(function () {
  "use strict";

  // Enables the :active CSS state on tap in iOS Safari, which otherwise
  // only applies :active to elements with a touch listener somewhere
  // in their ancestry.
  document.addEventListener("touchstart", function () {}, true);

  var STORAGE_KEY = "wasuremono.templates.v1";

  var PRESETS = {
    "前処理": [
      "コンプレッサー一式", "土嚢袋", "粘土、セメント", "青ボンド", "試走管", "流出防止", "通線",
      "グリ、フレキ", "確認用注入パッカー", "取付カメラ"
    ],
    "製管、注入": [
      "製管機", "ユニット一式", "プロファイル", "架台", "青ボンド", "通線",
      "ウエイト、シャックル", "ウインチ", "コロサポ", "角材(タイコ)", "モルタル", "耐圧ホース",
      "サクションホース", "本管パッカー", "取付カメラ", "ウレタン、アセトン", "ウレタンスポンジ",
      "外部削孔機", "グリ、フレキ", "集塵機", "フレコン", "ハイウォッシャー", "ミニバキューマー",
      "小型桝用ポンプ", "サニーホース", "ゴムステップ"
    ],
    "仕上げ": [
      "コロサポ", "外部削孔機", "取付カメラ", "グリ、フレキ", "ウレタン除去ブラシ",
      "流出防止", "内部削孔機用ブラシ", "青ボンド", "赤ボンド"
    ],
    "製管、ウエイト": [
      "製管機", "ユニット一式", "プロファイル", "架台", "粘土、セメント", "青ボンド", "取付カメラ", "通線",
      "ウエイト、シャックル", "ウインチ", "コロサポ", "角材(タイコ)", "取付桝用網", "新ハイザイ袋"
    ],
    "注入": [
      "モルタル", "青ボンド", "耐圧ホース", "サクションホース", "本管パッカー", "取付カメラ",
      "ウレタン、アセトン", "ウレタンスポンジ", "外部削孔機", "グリ、フレキ",
      "集塵機", "フレコン", "ハイウォッシャー", "ミニバキューマー", "小型桝用ポンプ", "サニーホース", "ゴムステップ"
    ],
    "調査": ["試走管", "流出防止", "通線", "調査用パッカー", "取付カメラ", "グリ、フレキ"]
  };

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

  var templates = loadTemplates();
  var state = { view: "home", currentId: null, editMode: false, selected: {}, homeEditMode: false, homeSelected: {} };

  var RENAMED_PRESETS = { "製管、ウエイト、シャックル": "製管、ウエイト" };

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
        ? '<div class="empty">新規シートはまだありません。<br>テンプレートは編集で保護されています。</div>'
        : '<div class="empty">まだテンプレートがありません。<br>右下の + から、現場の作業ごとにチェックリストを作りましょう。</div>';
    } else {
      listHtml = '<div class="card-list">' + visibleTemplates.map(renderTemplateCard).join("") + "</div>";
    }

    var headerRight = editMode
      ? '<button class="back" id="home-edit-done-btn">完了</button>'
      : '<button class="back" id="home-edit-btn">編集</button>';

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
          ? '<div class="actions-row"><button class="btn danger block" id="home-delete-selected-btn">選択したシートを削除(' + selectedIds.length + ")</button></div>"
          : "");
    }

    return (
      '<header class="topbar"><h1>忘れ物チェック</h1>' + headerRight + "</header>" +
      "<main>" +
      toolbar +
      listHtml +
      "</main>" +
      (editMode ? "" : '<button class="fab" id="new-template-btn" aria-label="新しいテンプレート">＋</button>') +
      renderNewTemplateDialog()
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
      "<h3>新しいテンプレート</h3>" +
      '<form autocomplete="off" onsubmit="return false;">' +
      '<div class="field">' +
      "<label>タイトル</label>" +
      '<input type="text" id="tpl-title-input" name="q1" placeholder="例: 本日使う物" maxlength="40" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">' +
      "</div>" +
      '<div class="field">' +
      "<label>サンプルから始める(任意)</label>" +
      '<div class="chip-row" id="preset-chip-row">' +
      '<div class="chip active" data-preset="">空で作成</div>' +
      presetChips +
      "</div>" +
      "</div>" +
      "</form>" +
      '<div class="actions-row">' +
      '<button class="btn secondary block" id="new-template-cancel">キャンセル</button>' +
      '<button class="btn block" id="new-template-create">作成</button>' +
      "</div>" +
      "</div>" +
      "</dialog>"
    );
  }

  function renderItemRow(it) {
    if (state.editMode) {
      var selected = !!state.selected[it.id];
      return (
        '<div class="item-row edit ' + (selected ? "selected" : "") + '" data-item="' + it.id + '">' +
        '<div class="select-box" data-select="' + it.id + '">' + (selected ? "✓" : "") + "</div>" +
        '<div class="item-name" data-select="' + it.id + '">' + escapeHtml(it.name) + "</div>" +
        "</div>"
      );
    }
    return (
      '<div class="item-row ' + (it.checked ? "checked" : "") + '" data-item="' + it.id + '">' +
      '<div class="check" data-toggle="' + it.id + '">✓</div>' +
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
        ? '<div class="empty">追加した項目はまだありません。<br>テンプレート項目は編集で保護されています。</div>'
        : '<div class="empty">まだ項目がありません。<br>下のフォームから追加してください。</div>';
    } else {
      groups = '<div class="item-list">' + visibleItems.map(renderItemRow).join("") + "</div>";
    }

    var headerRight = editMode
      ? '<button class="back" id="edit-done-btn">完了</button>'
      : '<button class="back" id="edit-btn">編集</button>' +
        (t.isPreset ? "" : '<button class="back" id="menu-btn">…</button>');

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
        : '<form class="add-item-row" autocomplete="off" onsubmit="return false;">' +
          '<input type="text" id="item-add-input" name="q2" placeholder="項目を追加" maxlength="40" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">' +
          '<button class="btn" id="add-item-btn">追加</button>' +
          "</form>") +
      "</main>" +
      (t.isPreset ? "" : renderMenuDialog(t))
    );
  }

  function renderMenuDialog(t) {
    return (
      '<dialog id="menu-dialog">' +
      '<div class="dialog-body">' +
      "<h3>テンプレート設定</h3>" +
      '<form autocomplete="off" onsubmit="return false;">' +
      '<div class="field">' +
      "<label>タイトル</label>" +
      '<input type="text" id="tpl-title-edit" name="q3" value="' + escapeHtml(t.name) + '" maxlength="40" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">' +
      "</div>" +
      "</form>" +
      '<div class="actions-row">' +
      '<button type="button" class="btn secondary block" id="rename-save">保存</button>' +
      "</div>" +
      '<div class="actions-row">' +
      '<button type="button" class="btn secondary block" id="duplicate-btn">複製</button>' +
      '<button type="button" class="btn danger block" id="delete-btn">削除</button>' +
      "</div>" +
      '<div class="actions-row">' +
      '<button type="button" class="btn secondary block" id="menu-close">閉じる</button>' +
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
        if (!confirm(ids.length + "件のシートを削除しますか?元に戻せません。")) return;
        templates = templates.filter(function (t) { return t.isPreset || !state.homeSelected[t.id]; });
        state.homeSelected = {};
        saveTemplates();
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

    document.getElementById("home-edit-btn").addEventListener("click", function () {
      state.homeEditMode = true;
      state.homeSelected = {};
      render();
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
      t.items.push({ id: uid(), name: name, checked: false });
      saveTemplates();
      render();
      var el = document.getElementById("item-add-input");
      if (el) el.focus();
    }

    document.getElementById("add-item-btn").addEventListener("click", addItem);
    nameInput.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter") addItem();
    });

    document.getElementById("edit-btn").addEventListener("click", function () {
      state.editMode = true;
      state.selected = {};
      render();
    });

    var menuBtn = document.getElementById("menu-btn");
    if (menuBtn) {
      var menuDialog = document.getElementById("menu-dialog");
      menuBtn.addEventListener("click", function () {
        menuDialog.showModal();
        // iOS Safari では showModal() の直後に focus() しておかないと、
        // ダイアログ内の入力欄をタップしてもキーボードが出ないことがある。
        // (新規作成のダイアログは最初から focus() しているので、そちらは出る)
        var titleInput = document.getElementById("tpl-title-edit");
        if (titleInput) {
          titleInput.focus();
          titleInput.select();
        }
      });
      document.getElementById("menu-close").addEventListener("click", function () {
        menuDialog.close();
      });

      document.getElementById("rename-save").addEventListener("click", function () {
        var titleInput = document.getElementById("tpl-title-edit");
        var val = titleInput.value.trim();
        // 空のまま押されたときに黙って何もしないと、壊れているように見える。
        if (!val) {
          toast("タイトルを入力してください");
          titleInput.focus();
          return;
        }
        t.name = val;
        t.updatedAt = Date.now();
        saveTemplates();
        menuDialog.close();
        render();
        toast("タイトルを変更しました");
      });

      document.getElementById("duplicate-btn").addEventListener("click", function () {
        var copy = {
          id: uid(),
          name: t.name + " のコピー",
          items: t.items.map(function (it) { return { id: uid(), name: it.name, checked: false, fromPreset: !!it.fromPreset }; }),
          isPreset: false,
          updatedAt: Date.now()
        };
        templates.unshift(copy);
        saveTemplates();
        menuDialog.close();
        go("template", copy.id);
      });

      document.getElementById("delete-btn").addEventListener("click", function () {
        if (!confirm("「" + t.name + "」を削除しますか?元に戻せません。")) return;
        templates = templates.filter(function (x) { return x.id !== t.id; });
        saveTemplates();
        menuDialog.close();
        go("home");
      });
    }
  }

  // ---------- init ----------

  ensureDefaultTemplates();
  render();

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
