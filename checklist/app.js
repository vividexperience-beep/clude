(function () {
  "use strict";

  // Enables the :active CSS state on tap in iOS Safari, which otherwise
  // only applies :active to elements with a touch listener somewhere
  // in their ancestry.
  document.addEventListener("touchstart", function () {}, true);

  // 「忘れ物チェック」と同じドメインに同居するので、保存キーは必ず分ける。
  var STORAGE_KEY = "checklist.sheets.v1";

  // このアプリは最初から空。リストは全て利用者が自分で作る。
  var PRESETS = {};

  function uid() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return "id-" + Date.now() + "-" + Math.random().toString(16).slice(2);
  }

  function loadTemplates() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      var data = JSON.parse(raw);
      return Array.isArray(data) ? data : [];
    } catch (e) {
      return [];
    }
  }

  function saveTemplates() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(templates));
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var toastTimer = null;
  function toast(message) {
    var el = document.getElementById("toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "toast";
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      el.classList.remove("show");
    }, 2000);
  }

  // ---------- 写真の保存 ----------
  // 写真は localStorage(5MB上限・隣の「忘れ物チェック」と共有)には入りきらないので
  // IndexedDB に置く。項目側には photoId と撮影日時だけを持たせる。
  var PHOTO_DB = "checklist-photos";
  var PHOTO_STORE = "photos";
  var PHOTO_MAX_AGE_DAYS = 60;
  var PHOTO_MAX_AGE_MS = PHOTO_MAX_AGE_DAYS * 24 * 60 * 60 * 1000;

  function openPhotoDb() {
    return new Promise(function (resolve, reject) {
      var req = indexedDB.open(PHOTO_DB, 1);
      req.onupgradeneeded = function () {
        if (!req.result.objectStoreNames.contains(PHOTO_STORE)) {
          req.result.createObjectStore(PHOTO_STORE);
        }
      };
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { reject(req.error); };
    });
  }

  function photoTx(mode, run) {
    return openPhotoDb().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(PHOTO_STORE, mode);
        var req = run(tx.objectStore(PHOTO_STORE));
        tx.oncomplete = function () { db.close(); resolve(req ? req.result : undefined); };
        tx.onerror = function () { db.close(); reject(tx.error); };
      });
    });
  }

  function photoPut(id, dataUrl) {
    return photoTx("readwrite", function (store) { return store.put(dataUrl, id); });
  }

  function photoGet(id) {
    return photoTx("readonly", function (store) { return store.get(id); });
  }

  function photoDelete(id) {
    return photoTx("readwrite", function (store) { return store.delete(id); });
  }

  function photoAllKeys() {
    return photoTx("readonly", function (store) { return store.getAllKeys(); });
  }

  function photoDaysLeft(photoAt) {
    return Math.ceil((photoAt + PHOTO_MAX_AGE_MS - Date.now()) / (24 * 60 * 60 * 1000));
  }

  // 60日を過ぎた写真と、項目から参照されなくなった写真を消す。
  function cleanupPhotos() {
    var referenced = {};
    var expired = [];
    var changed = false;
    templates.forEach(function (t) {
      t.items.forEach(function (it) {
        if (!it.photoId) return;
        if (Date.now() - it.photoAt > PHOTO_MAX_AGE_MS) {
          expired.push(it.photoId);
          delete it.photoId;
          delete it.photoAt;
          changed = true;
        } else {
          referenced[it.photoId] = true;
        }
      });
    });
    if (changed) saveTemplates();

    return photoAllKeys().then(function (keys) {
      var dead = (keys || []).filter(function (k) { return !referenced[k]; });
      return Promise.all(dead.concat(expired).map(photoDelete));
    }).then(function () {
      return changed;
    }).catch(function () {
      return changed;
    });
  }

  // カメラ写真はそのままだと数MBあるので、長辺1000px・JPEG品質0.7 に縮小する。
  function compressImage(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onerror = function () { reject(reader.error); };
      reader.onload = function () {
        var img = new Image();
        img.onerror = function () { reject(new Error("image decode failed")); };
        img.onload = function () {
          var scale = Math.min(1, 1000 / Math.max(img.width, img.height));
          var w = Math.max(1, Math.round(img.width * scale));
          var h = Math.max(1, Math.round(img.height * scale));
          var canvas = document.createElement("canvas");
          canvas.width = w;
          canvas.height = h;
          canvas.getContext("2d").drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL("image/jpeg", 0.7));
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  var templates = loadTemplates();
  var state = { view: "home", currentId: null, editMode: false, selected: {}, homeEditMode: false, homeSelected: {} };
  var pendingPhoto = null;

  var RENAMED_PRESETS = {};

  function ensureDefaultTemplates() {
    var order = Object.keys(PRESETS);
    var defaults = [];
    var changed = false;

    templates.forEach(function (t) {
      if (RENAMED_PRESETS[t.name]) {
        t.name = RENAMED_PRESETS[t.name];
        changed = true;
      }
    });

    order.forEach(function (name) {
      var idx = templates.findIndex(function (t) { return t.name === name; });
      var tmpl;
      if (idx !== -1) {
        tmpl = templates[idx];
        templates.splice(idx, 1);
        if (!tmpl.isPreset) {
          tmpl.isPreset = true;
          changed = true;
        }
        var remaining = tmpl.items.slice();
        var syncedItems = PRESETS[name].map(function (itemName) {
          var pos = remaining.findIndex(function (it) { return it.name === itemName; });
          if (pos !== -1) {
            var found = remaining.splice(pos, 1)[0];
            if (!found.fromPreset) {
              found.fromPreset = true;
              changed = true;
            }
            return found;
          }
          changed = true;
          return { id: uid(), name: itemName, checked: false, fromPreset: true };
        });
        var customItems = remaining.filter(function (it) { return !it.fromPreset; });
        if (customItems.length !== remaining.length) changed = true;
        tmpl.items = syncedItems.concat(customItems);
      } else {
        var items = PRESETS[name].map(function (n) {
          return { id: uid(), name: n, checked: false, fromPreset: true };
        });
        tmpl = { id: uid(), name: name, items: items, isPreset: true, updatedAt: Date.now() };
        changed = true;
      }
      defaults.push(tmpl);
    });
    templates = defaults.concat(templates);
    if (changed) saveTemplates();
  }

  function findTemplate(id) {
    for (var i = 0; i < templates.length; i++) {
      if (templates[i].id === id) return templates[i];
    }
    return null;
  }

  function progressOf(t) {
    var total = t.items.length;
    var done = t.items.filter(function (it) { return it.checked; }).length;
    return { total: total, done: done };
  }

  function go(view, id) {
    state.view = view;
    state.currentId = id || null;
    state.editMode = false;
    state.selected = {};
    state.homeEditMode = false;
    state.homeSelected = {};
    pendingPhoto = null;
    render();
  }

  // ---------- rendering ----------

  function render() {
    var app = document.getElementById("app");
    if (state.view === "template" && findTemplate(state.currentId)) {
      app.innerHTML = renderTemplateView(findTemplate(state.currentId));
    } else {
      state.view = "home";
      app.innerHTML = renderHomeView();
    }
    bindEvents();
    hydratePhotos();
  }

  // サムネイルの中身は IndexedDB から非同期で読むので、描画後に流し込む。
  function hydratePhotos() {
    document.querySelectorAll("[data-photo]").forEach(function (img) {
      var id = img.getAttribute("data-photo");
      photoGet(id).then(function (dataUrl) {
        if (dataUrl) img.src = dataUrl;
      }).catch(function () {});
      img.addEventListener("click", function (ev) {
        ev.stopPropagation();
        if (!img.src) return;
        var dialog = document.getElementById("photo-dialog");
        if (!dialog) return;
        document.getElementById("photo-dialog-img").src = img.src;
        dialog.showModal();
      });
    });

    var dialog = document.getElementById("photo-dialog");
    if (dialog) {
      dialog.addEventListener("click", function () { dialog.close(); });
    }
  }

  function renderTemplateCard(t) {
    var p = progressOf(t);
    var pct = p.total ? Math.round((p.done / p.total) * 100) : 0;
    var progressHtml =
      '<div class="progress-row">' +
      '<div class="progress-bar"><div style="width:' + pct + '%"></div></div>' +
      '<div class="progress-label">' + p.done + " / " + p.total + "</div>" +
      "</div>";

    if (state.homeEditMode) {
      var selected = !!state.homeSelected[t.id];
      return (
        '<div class="template-card edit ' + (selected ? "selected" : "") + '" data-select="' + t.id + '">' +
        '<div class="card-select-row">' +
        '<div class="select-box">' + (selected ? "✓" : "") + "</div>" +
        '<div class="name">' + escapeHtml(t.name) + "</div>" +
        "</div>" +
        progressHtml +
        "</div>"
      );
    }
    return (
      '<div class="template-card" data-open="' + t.id + '">' +
      '<div class="name">' + escapeHtml(t.name) + "</div>" +
      progressHtml +
      "</div>"
    );
  }

  function renderHomeView() {
    var editMode = state.homeEditMode;
    var visibleTemplates = editMode ? templates.filter(function (t) { return !t.isPreset; }) : templates;

    var listHtml;
    if (visibleTemplates.length === 0) {
      listHtml = editMode
        ? '<div class="empty">削除できるリストがありません。</div>'
        : '<div class="empty">まだリストがありません。<br>右下の + から作りましょう。</div>';
    } else {
      listHtml = '<div class="card-list">' + visibleTemplates.map(renderTemplateCard).join("") + "</div>";
    }

    var headerRight = editMode
      ? '<button class="back" id="home-edit-done-btn">完了</button>'
      : '<button class="back" id="home-settings-btn" aria-label="設定">⚙️</button>';

    var toolbar = "";
    if (editMode) {
      var selectedIds = Object.keys(state.homeSelected);
      var selectableTemplates = templates.filter(function (t) { return !t.isPreset; });
      var allSelected = selectableTemplates.length > 0 && selectedIds.length === selectableTemplates.length;
      toolbar =
        '<div class="summary-bar edit-toolbar">' +
        (selectableTemplates.length > 0
          ? '<button class="btn secondary" id="home-select-all-btn">' + (allSelected ? "選択解除" : "全て選択") + "</button>"
          : "") +
        '<div class="progress-label" style="flex:1;text-align:center">' + selectedIds.length + "件選択中</div>" +
        "</div>" +
        (selectedIds.length >= 1
          ? '<div class="actions-row"><button class="btn danger block" id="home-delete-selected-btn">選択したリストを削除(' + selectedIds.length + ")</button></div>"
          : "");
    }

    return (
      '<header class="topbar"><h1>チェックリスト</h1>' + headerRight + "</header>" +
      "<main>" +
      toolbar +
      listHtml +
      "</main>" +
      (editMode ? "" : '<button class="fab" id="new-template-btn" aria-label="新しいリスト">＋</button>') +
      renderNewTemplateDialog() +
      (editMode ? "" : renderHomeMenuDialog())
    );
  }

  // リストそのものの管理(名前を変える/消す)はホームの⚙️に集約する。
  // リストの中身(項目)の管理は、リストを開いた先の⚙️が受け持つ。
  function renderHomeMenuDialog() {
    var renameable = templates.filter(function (t) { return !t.isPreset; });

    var pickList = renameable.length
      ? '<div class="menu-list">' +
        renameable.map(function (t) {
          return (
            '<button type="button" class="btn secondary block menu-item" data-rename="' + t.id + '">' +
            escapeHtml(t.name) +
            "</button>"
          );
        }).join("") +
        "</div>"
      : '<div class="dialog-note">名前を変えられるリストがありません。</div>';

    return (
      '<dialog id="home-menu-dialog">' +
      '<div class="dialog-body">' +

      '<div id="home-pane-main">' +
      "<h3>設定</h3>" +
      '<div class="menu-list">' +
      '<button type="button" class="btn secondary block menu-item" id="home-rename-open">' +
      "タイトルを変更<span>リストの名前を付け直します</span></button>" +
      '<button type="button" class="btn secondary block menu-item" id="home-delete-open">' +
      "リストを削除<span>選んだリストを、項目と写真ごと消します</span></button>" +
      "</div>" +
      '<div class="actions-row">' +
      '<button type="button" class="btn secondary block" id="home-menu-close">閉じる</button>' +
      "</div>" +
      "</div>" +

      '<div id="home-pane-pick" hidden>' +
      "<h3>どのリストの名前を変えますか?</h3>" +
      pickList +
      '<div class="actions-row">' +
      '<button type="button" class="btn secondary block" id="home-pick-back">戻る</button>' +
      "</div>" +
      "</div>" +

      '<div id="home-pane-title" hidden>' +
      "<h3>タイトルを変更</h3>" +
      '<form autocomplete="off" onsubmit="return false;">' +
      '<div class="field">' +
      "<label>タイトル</label>" +
      '<input type="text" id="home-title-edit" name="q6" maxlength="40" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">' +
      "</div>" +
      "</form>" +
      '<div class="actions-row">' +
      '<button type="button" class="btn block" id="home-rename-save">保存</button>' +
      "</div>" +
      '<div class="actions-row">' +
      '<button type="button" class="btn secondary block" id="home-title-back">戻る</button>' +
      "</div>" +
      "</div>" +

      "</div>" +
      "</dialog>"
    );
  }

  function renderNewTemplateDialog() {
    var presetChips = Object.keys(PRESETS)
      .map(function (name) {
        return '<div class="chip" data-preset="' + escapeHtml(name) + '">' + escapeHtml(name) + "</div>";
      })
      .join("");
    return (
      '<dialog id="new-template-dialog">' +
      '<div class="dialog-body">' +
      "<h3>新しいリスト</h3>" +
      '<form autocomplete="off" onsubmit="return false;">' +
      '<div class="field">' +
      "<label>タイトル</label>" +
      '<input type="text" id="tpl-title-input" name="q1" placeholder="例: 買い物" maxlength="40" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">' +
      "</div>" +
      (presetChips
        ? '<div class="field">' +
          "<label>サンプルから始める(任意)</label>" +
          '<div class="chip-row" id="preset-chip-row">' +
          '<div class="chip active" data-preset="">空で作成</div>' +
          presetChips +
          "</div>" +
          "</div>"
        : "") +
      "</form>" +
      '<div class="actions-row">' +
      '<button class="btn secondary block" id="new-template-cancel">キャンセル</button>' +
      '<button class="btn block" id="new-template-create">作成</button>' +
      "</div>" +
      "</div>" +
      "</dialog>"
    );
  }

  function renderThumb(it) {
    if (!it.photoId) return "";
    var left = photoDaysLeft(it.photoAt);
    return (
      '<div class="thumb-wrap">' +
      '<img class="item-thumb" data-photo="' + it.photoId + '" alt="">' +
      '<span class="thumb-days">あと' + left + "日</span>" +
      "</div>"
    );
  }

  function renderItemRow(it) {
    if (state.editMode) {
      var selected = !!state.selected[it.id];
      return (
        '<div class="item-row edit ' + (selected ? "selected" : "") + '" data-item="' + it.id + '">' +
        '<div class="select-box" data-select="' + it.id + '">' + (selected ? "✓" : "") + "</div>" +
        renderThumb(it) +
        '<div class="item-name" data-select="' + it.id + '">' + escapeHtml(it.name) + "</div>" +
        "</div>"
      );
    }
    return (
      '<div class="item-row ' + (it.checked ? "checked" : "") + '" data-item="' + it.id + '">' +
      '<div class="check" data-toggle="' + it.id + '">✓</div>' +
      renderThumb(it) +
      '<div class="item-name" data-toggle="' + it.id + '">' + escapeHtml(it.name) + "</div>" +
      "</div>"
    );
  }

  function renderTemplateView(t) {
    var p = progressOf(t);
    var pct = p.total ? Math.round((p.done / p.total) * 100) : 0;
    var editMode = state.editMode;

    var visibleItems = editMode ? t.items.filter(function (it) { return !it.fromPreset; }) : t.items;

    var groups;
    if (visibleItems.length === 0) {
      groups = editMode
        ? '<div class="empty">まだ項目がありません。</div>'
        : '<div class="empty">まだ項目がありません。<br>下のフォームから追加してください。</div>';
    } else {
      groups = '<div class="item-list">' + visibleItems.map(renderItemRow).join("") + "</div>";
    }

    var headerRight = editMode
      ? '<button class="back" id="edit-done-btn">完了</button>'
      : '<button class="back" id="alarm-btn" aria-label="通知">🔔</button>' +
        '<button class="back" id="settings-btn" aria-label="リスト設定">⚙️</button>';

    var topBlock;
    if (editMode) {
      var selectedIds = Object.keys(state.selected);
      var selectableItems = t.items.filter(function (it) { return !it.fromPreset; });
      var allSelected = selectableItems.length > 0 && selectedIds.length === selectableItems.length;
      topBlock =
        '<div class="summary-bar edit-toolbar">' +
        (selectableItems.length > 0
          ? '<button class="btn secondary" id="select-all-btn">' + (allSelected ? "選択解除" : "全て選択") + "</button>"
          : "") +
        '<div class="progress-label" style="flex:1;text-align:center">' + selectedIds.length + "件選択中</div>" +
        "</div>" +
        (selectedIds.length === 1
          ? '<div class="actions-row"><button class="btn secondary block" id="rename-item-btn">名前を編集</button></div>'
          : "") +
        (selectedIds.length >= 1
          ? '<div class="actions-row"><button class="btn danger block" id="delete-selected-btn">選択した項目を削除(' + selectedIds.length + ")</button></div>"
          : "") +
        '<div class="actions-row"><button class="btn secondary block" id="reset-checks-btn">チェック状態をリセット</button></div>';
    } else {
      topBlock =
        '<div class="summary-bar">' +
        '<div class="count">' + p.done + " / " + p.total + "</div>" +
        '<div class="progress-bar"><div style="width:' + pct + '%"></div></div>' +
        "</div>";
    }

    return (
      '<header class="topbar">' +
      '<button class="back" id="back-btn">‹ 戻る</button>' +
      "<h1>" + escapeHtml(t.name) + "</h1>" +
      headerRight +
      "</header>" +
      "<main>" +
      topBlock +
      groups +
      (editMode
        ? ""
        : (pendingPhoto
            ? '<div class="photo-pending">' +
              '<img src="' + pendingPhoto + '" alt="">' +
              '<div class="photo-pending-note">写真は' + PHOTO_MAX_AGE_DAYS + "日後に自動で消えます</div>" +
              '<button type="button" class="btn secondary" id="photo-clear-btn">取消</button>' +
              "</div>"
            : "") +
          '<form class="add-item-row" autocomplete="off" onsubmit="return false;">' +
          '<button type="button" class="btn secondary icon-btn" id="photo-btn" aria-label="写真を追加">📷</button>' +
          '<input type="text" id="item-add-input" name="q2" placeholder="項目を追加" maxlength="40" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">' +
          '<button type="button" class="btn" id="add-item-btn">追加</button>' +
          '<input type="file" id="photo-file" accept="image/*" hidden>' +
          "</form>") +
      "</main>" +
      '<dialog id="photo-dialog"><img id="photo-dialog-img" alt=""></dialog>' +
      (editMode ? "" : renderAlarmDialog(t)) +
      (editMode ? "" : renderMenuDialog(t))
    );
  }

  // ---------- 通知(カレンダー登録) ----------
  //
  // Webアプリは、閉じている間に時刻で通知を出すことができない。
  // (iOSで通知を出すには外部サーバーからのプッシュが必要で、この
  //  アプリの「外部通信なし・オフライン前提」と両立しない)
  // そこで端末内でICS(カレンダー)ファイルを組み立てて渡し、
  // OS側のカレンダーに予定とアラームとして持たせる。
  // 通知音はiOSのカレンダーの設定に従うため、アプリからは指定できない。

  var ALARM_REPEATS = [
    { value: "none", label: "なし", rrule: "" },
    { value: "daily", label: "毎日", rrule: "FREQ=DAILY" },
    { value: "weekday", label: "平日", rrule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
    { value: "weekly", label: "毎週", rrule: "FREQ=WEEKLY" }
  ];

  function pad2(n) {
    return (n < 10 ? "0" : "") + n;
  }

  function todayValue() {
    var d = new Date();
    return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate());
  }

  function renderAlarmDialog(t) {
    var a = t.alarm || {};
    var repeat = a.repeat || "none";
    var chips = ALARM_REPEATS.map(function (r) {
      return (
        '<div class="chip' + (repeat === r.value ? " active" : "") + '" data-repeat="' + r.value + '">' +
        r.label +
        "</div>"
      );
    }).join("");

    return (
      '<dialog id="alarm-dialog">' +
      '<div class="dialog-body">' +
      "<h3>通知を登録</h3>" +
      '<form autocomplete="off" onsubmit="return false;">' +
      '<div class="field">' +
      "<label>日付</label>" +
      '<input type="date" id="alarm-date" name="q4" value="' + escapeHtml(a.date || todayValue()) + '">' +
      "</div>" +
      '<div class="field">' +
      "<label>時刻</label>" +
      '<input type="time" id="alarm-time" name="q5" value="' + escapeHtml(a.time || "07:00") + '">' +
      "</div>" +
      '<div class="field">' +
      "<label>繰り返し</label>" +
      '<div class="chip-row" id="alarm-repeat-row">' + chips + "</div>" +
      "</div>" +
      "</form>" +
      '<div class="dialog-note">' +
      "端末のカレンダーに予定として登録します。アプリを閉じていても通知されます。<br>" +
      "通知音はiOSのカレンダーの設定に従います(アプリからは選べません)。<br>" +
      "登録後の変更・取り消しはカレンダー側で行ってください。" +
      "</div>" +
      '<div class="actions-row">' +
      '<button type="button" class="btn block" id="alarm-add">カレンダーに登録</button>' +
      "</div>" +
      '<div class="actions-row">' +
      '<button type="button" class="btn secondary block" id="alarm-close">閉じる</button>' +
      "</div>" +
      "</div>" +
      "</dialog>"
    );
  }

  function icsEscape(text) {
    return String(text)
      .replace(/\\/g, "\\\\")
      .replace(/;/g, "\\;")
      .replace(/,/g, "\\,")
      .replace(/\r?\n/g, "\\n");
  }

  function byteLen(str) {
    var n = 0;
    for (var i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      if (c < 0x80) n += 1;
      else if (c < 0x800) n += 2;
      else if (c >= 0xd800 && c <= 0xdbff) { n += 4; i++; }
      else n += 3;
    }
    return n;
  }

  // ICSは1行75オクテットまで。日本語は1文字3バイトあるので、
  // バイト数で数えて折り返す(文字の途中では切らない)。
  function icsFold(line) {
    var parts = [];
    var cur = "";
    var curBytes = 0;
    var i = 0;
    while (i < line.length) {
      var ch = line[i];
      if (ch >= "\uD800" && ch <= "\uDBFF" && i + 1 < line.length) {
        ch += line[i + 1];
        i += 2;
      } else {
        i += 1;
      }
      var b = byteLen(ch);
      var limit = parts.length === 0 ? 74 : 73;
      if (curBytes + b > limit) {
        parts.push(cur);
        cur = "";
        curBytes = 0;
      }
      cur += ch;
      curBytes += b;
    }
    parts.push(cur);
    return parts.join("\r\n ");
  }

  function buildIcs(t, date, time, repeat) {
    // タイムゾーンを付けない「浮動時刻」にして、端末の時計どおりに鳴らす
    var start = date.replace(/-/g, "") + "T" + time.replace(":", "") + "00";
    var stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    var title = t.name + " の確認";
    var found = ALARM_REPEATS.filter(function (r) { return r.value === repeat; })[0];
    var rrule = found ? found.rrule : "";

    var lines = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//checklist//JP",
      "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      "UID:" + uid() + "@checklist",
      "DTSTAMP:" + stamp,
      "DTSTART:" + start,
      "DURATION:PT15M",
      "SUMMARY:" + icsEscape(title),
      "DESCRIPTION:" + icsEscape("チェックリストの確認(" + t.items.length + "項目)")
    ];
    if (rrule) lines.push("RRULE:" + rrule);
    lines.push(
      "BEGIN:VALARM",
      "ACTION:DISPLAY",
      "DESCRIPTION:" + icsEscape(title),
      "TRIGGER:-PT0M",
      "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR"
    );
    return lines.map(icsFold).join("\r\n") + "\r\n";
  }

  function downloadIcs(fileTitle, text) {
    var blob = new Blob([text], { type: "text/calendar;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = String(fileTitle).replace(/[\\/:*?"<>|]/g, "_").slice(0, 30) + ".ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 10000);
  }

  // 画面上の名前と実際にできることが一致するよう、それぞれのボタンに
  // 何ができるかを併記する。リストそのものの管理(名前・削除)はホームの⚙️。
  // ここはリストの中身に対してできることだけを置く。
  function renderMenuDialog(t) {
    var item = function (id, label, note) {
      return (
        '<button type="button" class="btn secondary block menu-item" id="' + id + '">' +
        label +
        "<span>" + note + "</span>" +
        "</button>"
      );
    };

    var photoPick = t.items.length
      ? '<div class="menu-list">' +
        t.items.map(function (it) {
          return (
            '<button type="button" class="btn secondary block menu-item" data-photo-item="' + it.id + '">' +
            escapeHtml(it.name) +
            "<span>" + (it.photoId ? "写真あり(選ぶと差し替え)" : "写真なし") + "</span>" +
            "</button>"
          );
        }).join("") +
        "</div>"
      : '<div class="dialog-note">まだ項目がありません。</div>';

    return (
      '<dialog id="menu-dialog">' +
      '<div class="dialog-body">' +

      '<div id="menu-pane-main">' +
      "<h3>リスト設定</h3>" +
      '<div class="menu-list">' +
      item("menu-edit-items", "項目を編集・削除", "項目の名前を直す/消す、チェックを全部外す") +
      item("menu-photo-open", "写真を追加・変更", "すでにある項目に、後から写真を付けます") +
      "</div>" +
      '<div class="actions-row">' +
      '<button type="button" class="btn secondary block" id="menu-close">閉じる</button>' +
      "</div>" +
      "</div>" +

      '<div id="menu-pane-photo" hidden>' +
      "<h3>どの項目に写真を付けますか?</h3>" +
      photoPick +
      '<div class="dialog-note">写真は' + PHOTO_MAX_AGE_DAYS + "日後に自動で消えます。</div>" +
      '<div class="actions-row">' +
      '<button type="button" class="btn secondary block" id="menu-photo-back">戻る</button>' +
      "</div>" +
      '<input type="file" id="item-photo-file" accept="image/*" hidden>' +
      "</div>" +

      '<div id="menu-pane-photo-edit" hidden>' +
      '<h3 id="menu-photo-title"></h3>' +
      '<img id="menu-photo-preview" class="menu-photo-preview" alt="">' +
      '<div class="menu-list">' +
      '<button type="button" class="btn secondary block menu-item" id="menu-photo-replace">' +
      "写真を選び直す<span>別の写真に差し替えます</span></button>" +
      '<button type="button" class="btn danger block menu-item" id="menu-photo-remove">' +
      "写真を消す<span>項目は残り、写真だけ端末から消えます</span></button>" +
      "</div>" +
      '<div class="actions-row">' +
      '<button type="button" class="btn secondary block" id="menu-photo-edit-back">戻る</button>' +
      "</div>" +
      "</div>" +

      "</div>" +
      "</dialog>"
    );
  }

  // ---------- events ----------

  function bindEvents() {
    if (state.view === "home") bindHomeEvents();
    else bindTemplateEvents();
  }

  function bindHomeEvents() {
    if (state.homeEditMode) {
      bindHomeEditModeEvents();
    } else {
      bindHomeViewModeEvents();
    }
  }

  function bindHomeEditModeEvents() {
    document.getElementById("home-edit-done-btn").addEventListener("click", function () {
      state.homeEditMode = false;
      state.homeSelected = {};
      render();
    });

    document.querySelectorAll("[data-select]").forEach(function (el) {
      el.addEventListener("click", function () {
        var id = el.getAttribute("data-select");
        if (state.homeSelected[id]) delete state.homeSelected[id];
        else state.homeSelected[id] = true;
        render();
      });
    });

    var selectAllBtn = document.getElementById("home-select-all-btn");
    if (selectAllBtn) {
      selectAllBtn.addEventListener("click", function () {
        var selectableTemplates = templates.filter(function (t) { return !t.isPreset; });
        var allSelected = selectableTemplates.length > 0 && Object.keys(state.homeSelected).length === selectableTemplates.length;
        if (allSelected) {
          state.homeSelected = {};
        } else {
          state.homeSelected = {};
          selectableTemplates.forEach(function (t) { state.homeSelected[t.id] = true; });
        }
        render();
      });
    }

    var deleteSelectedBtn = document.getElementById("home-delete-selected-btn");
    if (deleteSelectedBtn) {
      deleteSelectedBtn.addEventListener("click", function () {
        var ids = Object.keys(state.homeSelected);
        if (!confirm(ids.length + "件のリストを削除しますか?元に戻せません。")) return;
        templates = templates.filter(function (t) { return t.isPreset || !state.homeSelected[t.id]; });
        state.homeSelected = {};
        saveTemplates();
        cleanupPhotos();
        render();
      });
    }
  }

  function bindHomeViewModeEvents() {
    document.querySelectorAll("[data-open]").forEach(function (el) {
      el.addEventListener("click", function () {
        go("template", el.getAttribute("data-open"));
      });
    });

    var homeMenuDialog = document.getElementById("home-menu-dialog");
    var homeMain = document.getElementById("home-pane-main");
    var homePick = document.getElementById("home-pane-pick");
    var homeTitle = document.getElementById("home-pane-title");
    var renameTargetId = null;

    var showHomePane = function (pane) {
      homeMain.hidden = pane !== "main";
      homePick.hidden = pane !== "pick";
      homeTitle.hidden = pane !== "title";
    };

    document.getElementById("home-settings-btn").addEventListener("click", function () {
      showHomePane("main");
      homeMenuDialog.showModal();
    });

    document.getElementById("home-menu-close").addEventListener("click", function () {
      homeMenuDialog.close();
    });

    document.getElementById("home-rename-open").addEventListener("click", function () {
      showHomePane("pick");
    });

    document.getElementById("home-pick-back").addEventListener("click", function () {
      showHomePane("main");
    });

    document.getElementById("home-title-back").addEventListener("click", function () {
      showHomePane("pick");
    });

    document.getElementById("home-delete-open").addEventListener("click", function () {
      homeMenuDialog.close();
      state.homeEditMode = true;
      state.homeSelected = {};
      render();
    });

    document.querySelectorAll("[data-rename]").forEach(function (el) {
      el.addEventListener("click", function () {
        renameTargetId = el.getAttribute("data-rename");
        var target = findTemplate(renameTargetId);
        if (!target) return;
        var titleInput = document.getElementById("home-title-edit");
        titleInput.value = target.name;
        showHomePane("title");
        // iOS Safari はここで focus() しておかないと、
        // 入力欄をタップしてもキーボードが出ないことがある
        titleInput.focus();
        titleInput.select();
      });
    });

    document.getElementById("home-rename-save").addEventListener("click", function () {
      var titleInput = document.getElementById("home-title-edit");
      var val = titleInput.value.trim();
      // 空のまま押されたときに黙って何もしないと、壊れているように見える。
      if (!val) {
        toast("タイトルを入力してください");
        titleInput.focus();
        return;
      }
      var target = findTemplate(renameTargetId);
      if (!target) return;
      target.name = val;
      target.updatedAt = Date.now();
      saveTemplates();
      homeMenuDialog.close();
      render();
      toast("タイトルを変更しました");
    });

    var dialog = document.getElementById("new-template-dialog");
    var fab = document.getElementById("new-template-btn");
    var nameInput = document.getElementById("tpl-title-input");
    var selectedPreset = "";

    fab.addEventListener("click", function () {
      nameInput.value = "";
      selectedPreset = "";
      document.querySelectorAll("#preset-chip-row .chip").forEach(function (c) {
        c.classList.toggle("active", c.getAttribute("data-preset") === "");
      });
      dialog.showModal();
      nameInput.focus();
    });

    document.querySelectorAll("#preset-chip-row .chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        selectedPreset = chip.getAttribute("data-preset");
        document.querySelectorAll("#preset-chip-row .chip").forEach(function (c) {
          c.classList.toggle("active", c === chip);
        });
        if (!nameInput.value.trim() && selectedPreset) {
          nameInput.value = selectedPreset;
        }
      });
    });

    document.getElementById("new-template-cancel").addEventListener("click", function () {
      dialog.close();
    });

    document.getElementById("new-template-create").addEventListener("click", function () {
      var name = nameInput.value.trim();
      if (!name) {
        nameInput.focus();
        return;
      }
      var items = (PRESETS[selectedPreset] || []).map(function (name) {
        return { id: uid(), name: name, checked: false, fromPreset: true };
      });
      var t = { id: uid(), name: name, items: items, isPreset: !!selectedPreset, updatedAt: Date.now() };
      templates.unshift(t);
      saveTemplates();
      dialog.close();
      go("template", t.id);
    });
  }

  function bindTemplateEvents() {
    var t = findTemplate(state.currentId);

    document.getElementById("back-btn").addEventListener("click", function () {
      go("home");
    });

    if (state.editMode) {
      bindEditModeEvents(t);
    } else {
      bindViewModeEvents(t);
    }
  }

  function bindEditModeEvents(t) {
    document.getElementById("edit-done-btn").addEventListener("click", function () {
      state.editMode = false;
      state.selected = {};
      render();
    });

    document.querySelectorAll("[data-select]").forEach(function (el) {
      el.addEventListener("click", function () {
        var id = el.getAttribute("data-select");
        if (state.selected[id]) delete state.selected[id];
        else state.selected[id] = true;
        render();
      });
    });

    var selectAllBtn = document.getElementById("select-all-btn");
    if (selectAllBtn) {
      selectAllBtn.addEventListener("click", function () {
        var selectableItems = t.items.filter(function (it) { return !it.fromPreset; });
        var allSelected = selectableItems.length > 0 && Object.keys(state.selected).length === selectableItems.length;
        if (allSelected) {
          state.selected = {};
        } else {
          state.selected = {};
          selectableItems.forEach(function (it) { state.selected[it.id] = true; });
        }
        render();
      });
    }

    var renameBtn = document.getElementById("rename-item-btn");
    if (renameBtn) {
      renameBtn.addEventListener("click", function () {
        var id = Object.keys(state.selected)[0];
        var item = t.items.find(function (it) { return it.id === id; });
        if (!item || item.fromPreset) return;
        var val = prompt("項目名を編集", item.name);
        if (val && val.trim()) {
          item.name = val.trim();
          saveTemplates();
        }
        delete state.selected[id];
        render();
      });
    }

    var deleteSelectedBtn = document.getElementById("delete-selected-btn");
    if (deleteSelectedBtn) {
      deleteSelectedBtn.addEventListener("click", function () {
        var ids = Object.keys(state.selected);
        if (!confirm(ids.length + "件の項目を削除しますか?元に戻せません。")) return;
        t.items = t.items.filter(function (it) { return it.fromPreset || !state.selected[it.id]; });
        state.selected = {};
        saveTemplates();
        cleanupPhotos();
        render();
      });
    }

    document.getElementById("reset-checks-btn").addEventListener("click", function () {
      t.items.forEach(function (it) { it.checked = false; });
      saveTemplates();
      render();
      toast("チェック状態をリセットしました");
    });
  }

  function bindViewModeEvents(t) {
    document.querySelectorAll("[data-toggle]").forEach(function (el) {
      el.addEventListener("click", function () {
        var id = el.getAttribute("data-toggle");
        var item = t.items.find(function (it) { return it.id === id; });
        if (item) {
          item.checked = !item.checked;
          saveTemplates();
          render();
        }
      });
    });

    var nameInput = document.getElementById("item-add-input");

    function addItem() {
      var name = nameInput.value.trim();
      if (!name) {
        nameInput.focus();
        return;
      }
      var item = { id: uid(), name: name, checked: false };
      var staged = pendingPhoto;
      var saved = Promise.resolve();
      if (staged) {
        item.photoId = uid();
        item.photoAt = Date.now();
        saved = photoPut(item.photoId, staged).catch(function () {
          delete item.photoId;
          delete item.photoAt;
          toast("写真を保存できませんでした");
        });
      }
      saved.then(function () {
        t.items.push(item);
        pendingPhoto = null;
        saveTemplates();
        render();
        var el = document.getElementById("item-add-input");
        if (el) el.focus();
      });
    }

    var photoBtn = document.getElementById("photo-btn");
    var photoFile = document.getElementById("photo-file");
    if (photoBtn && photoFile) {
      photoBtn.addEventListener("click", function () { photoFile.click(); });
      photoFile.addEventListener("change", function () {
        var file = photoFile.files && photoFile.files[0];
        if (!file) return;
        compressImage(file).then(function (dataUrl) {
          pendingPhoto = dataUrl;
          render();
        }).catch(function () {
          toast("この写真は読み込めませんでした");
        });
      });
    }

    var photoClearBtn = document.getElementById("photo-clear-btn");
    if (photoClearBtn) {
      photoClearBtn.addEventListener("click", function () {
        pendingPhoto = null;
        render();
      });
    }

    document.getElementById("add-item-btn").addEventListener("click", addItem);
    nameInput.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter") addItem();
    });

    var alarmBtn = document.getElementById("alarm-btn");
    if (alarmBtn) {
      var alarmDialog = document.getElementById("alarm-dialog");
      var alarmRepeat = (t.alarm && t.alarm.repeat) || "none";

      alarmBtn.addEventListener("click", function () {
        alarmDialog.showModal();
        // iOS Safari は showModal() 直後に focus() しないと、
        // ダイアログ内の入力欄を触っても反応しないことがある
        var dateInput = document.getElementById("alarm-date");
        if (dateInput) dateInput.focus();
      });

      document.getElementById("alarm-close").addEventListener("click", function () {
        alarmDialog.close();
      });

      document.querySelectorAll("#alarm-repeat-row .chip").forEach(function (chip) {
        chip.addEventListener("click", function () {
          alarmRepeat = chip.getAttribute("data-repeat");
          document.querySelectorAll("#alarm-repeat-row .chip").forEach(function (c) {
            c.classList.toggle("active", c === chip);
          });
        });
      });

      document.getElementById("alarm-add").addEventListener("click", function () {
        var date = document.getElementById("alarm-date").value;
        var time = document.getElementById("alarm-time").value;
        if (!date || !time) {
          toast("日付と時刻を入れてください");
          return;
        }
        // 次に開いたときに同じ設定から始められるよう覚えておく
        t.alarm = { date: date, time: time, repeat: alarmRepeat };
        t.updatedAt = Date.now();
        saveTemplates();
        downloadIcs(t.name, buildIcs(t, date, time, alarmRepeat));
        alarmDialog.close();
        toast("カレンダーに追加してください");
      });
    }

    var settingsBtn = document.getElementById("settings-btn");
    if (settingsBtn) {
      var menuDialog = document.getElementById("menu-dialog");
      var menuMain = document.getElementById("menu-pane-main");
      var menuPhoto = document.getElementById("menu-pane-photo");
      var itemPhotoFile = document.getElementById("item-photo-file");
      var photoTargetId = null;

      var menuPhotoEdit = document.getElementById("menu-pane-photo-edit");

      var showMenuPane = function (pane) {
        menuMain.hidden = pane !== "main";
        menuPhoto.hidden = pane !== "photo";
        menuPhotoEdit.hidden = pane !== "photoEdit";
      };

      var findItem = function (id) {
        var found = null;
        t.items.forEach(function (it) { if (it.id === id) found = it; });
        return found;
      };

      settingsBtn.addEventListener("click", function () {
        showMenuPane("main");
        menuDialog.showModal();
      });

      document.getElementById("menu-close").addEventListener("click", function () {
        menuDialog.close();
      });

      document.getElementById("menu-edit-items").addEventListener("click", function () {
        menuDialog.close();
        state.editMode = true;
        state.selected = {};
        render();
      });

      document.getElementById("menu-photo-open").addEventListener("click", function () {
        showMenuPane("photo");
      });

      document.getElementById("menu-photo-back").addEventListener("click", function () {
        showMenuPane("main");
      });

      var pickPhoto = function () {
        // 同じ写真を選び直しても change が起きるように毎回空にする
        itemPhotoFile.value = "";
        itemPhotoFile.click();
      };

      document.querySelectorAll("[data-photo-item]").forEach(function (el) {
        el.addEventListener("click", function () {
          photoTargetId = el.getAttribute("data-photo-item");
          var target = findItem(photoTargetId);
          if (!target) return;

          // まだ写真が無い項目は、そのままカメラ/写真選択へ進む。
          // 既にある場合は、差し替えるのか消すのかを選んでもらう。
          if (!target.photoId) {
            pickPhoto();
            return;
          }
          document.getElementById("menu-photo-title").textContent = target.name + " の写真";
          var preview = document.getElementById("menu-photo-preview");
          preview.removeAttribute("src");
          photoGet(target.photoId).then(function (dataUrl) {
            if (dataUrl) preview.src = dataUrl;
          });
          showMenuPane("photoEdit");
        });
      });

      document.getElementById("menu-photo-replace").addEventListener("click", pickPhoto);

      document.getElementById("menu-photo-edit-back").addEventListener("click", function () {
        showMenuPane("photo");
      });

      document.getElementById("menu-photo-remove").addEventListener("click", function () {
        var target = findItem(photoTargetId);
        if (!target || !target.photoId) return;
        if (!confirm("「" + target.name + "」の写真を消しますか?元に戻せません。")) return;

        var oldId = target.photoId;
        delete target.photoId;
        delete target.photoAt;
        t.updatedAt = Date.now();
        saveTemplates();
        photoDelete(oldId);
        menuDialog.close();
        render();
        toast("写真を消しました");
      });

      itemPhotoFile.addEventListener("change", function () {
        var file = itemPhotoFile.files && itemPhotoFile.files[0];
        if (!file) return;
        var target = null;
        t.items.forEach(function (it) { if (it.id === photoTargetId) target = it; });
        if (!target) return;

        compressImage(file).then(function (dataUrl) {
          var newId = uid();
          return photoPut(newId, dataUrl).then(function () {
            var oldId = target.photoId;
            target.photoId = newId;
            target.photoAt = Date.now();
            t.updatedAt = Date.now();
            saveTemplates();
            // 差し替えた場合、前の写真は参照されなくなるので消す
            if (oldId) photoDelete(oldId);
            menuDialog.close();
            render();
            toast("写真を登録しました");
          });
        }).catch(function () {
          toast("この写真は読み込めませんでした");
        });
      });
    }
  }

  // ---------- init ----------

  ensureDefaultTemplates();
  render();
  cleanupPhotos().then(function () { render(); });

  // 写真の期限切れはタイマーではなく「開いたときの点検」で消している。
  // ホーム画面に置いたまま何日も放置されると起動時の点検が走らないので、
  // 画面に戻ってきたときにも点検する。
  // (画面を作り直すのは実際に消したときだけ。開いているダイアログを
  //  勝手に閉じてしまわないようにするため)
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState !== "visible") return;
    cleanupPhotos().then(function (changed) {
      if (changed) render();
    });
  });

  if ("serviceWorker" in navigator) {
    var refreshedForUpdate = false;
    navigator.serviceWorker.addEventListener("controllerchange", function () {
      if (refreshedForUpdate) return;
      refreshedForUpdate = true;
      window.location.reload();
    });
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").then(function (reg) {
        reg.update();
      }).catch(function () {});
    });
  }
})();
