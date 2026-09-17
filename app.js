(function () {
  "use strict";

  var STORAGE_KEY = "wasuremono.templates.v1";
  var CATEGORIES = ["材料", "道具", "機械", "その他"];

  var PRESETS = {
    "電気工事": [
      ["ケーブル", "材料"], ["配線器具", "材料"], ["圧着端子", "材料"],
      ["ドライバーセット", "道具"], ["電工ペンチ", "道具"], ["検電器", "道具"],
      ["電動ドリル", "機械"]
    ],
    "塗装": [
      ["塗料", "材料"], ["シンナー", "材料"], ["養生テープ", "材料"],
      ["刷毛", "道具"], ["ローラー", "道具"], ["マスカー", "道具"],
      ["エアコンプレッサー", "機械"]
    ],
    "溶接": [
      ["溶接棒", "材料"], ["ワイヤー", "材料"],
      ["溶接面", "道具"], ["ワイヤーブラシ", "道具"], ["チッパーハンマー", "道具"],
      ["溶接機", "機械"], ["発電機", "機械"]
    ],
    "配管": [
      ["塩ビ管", "材料"], ["継手", "材料"], ["シールテープ", "材料"],
      ["パイプレンチ", "道具"], ["水平器", "道具"],
      ["塩ビカッター", "機械"]
    ]
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

  function buildTemplateText(t) {
    var lines = [t.name];
    CATEGORIES.forEach(function (cat) {
      var items = t.items.filter(function (it) { return it.category === cat; });
      items.forEach(function (it) {
        lines.push(it.name + "(" + cat + ")");
      });
    });
    return lines.join("\n");
  }

  function copyTemplateAsText(t) {
    var text = buildTemplateText(t);
    var done = function () { toast("コピーしました。リマインダー/Keepに貼り付けてください"); };
    var fail = function () { fallbackCopy(text, done); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(fail);
    } else {
      fallbackCopy(text, done);
    }
  }

  function fallbackCopy(text, done) {
    try {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      done();
    } catch (e) {
      toast("コピーできませんでした");
    }
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
    }, 2600);
  }

  var templates = loadTemplates();
  var state = { view: "home", currentId: null };

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

  function go(view, id, opts) {
    state.view = view;
    state.currentId = id || null;
    syncUrl(opts && opts.replace);
    render();
  }

  function syncUrl(replace) {
    var url = new URL(window.location.href);
    if (state.view === "template" && state.currentId) {
      url.searchParams.set("t", state.currentId);
    } else {
      url.searchParams.delete("t");
    }
    var method = replace ? "replaceState" : "pushState";
    history[method](null, "", url.pathname + url.search);
  }

  function stateFromUrl() {
    var params = new URLSearchParams(window.location.search);
    var id = params.get("t");
    if (id && findTemplate(id)) {
      state.view = "template";
      state.currentId = id;
    } else {
      state.view = "home";
      state.currentId = null;
    }
  }

  window.addEventListener("popstate", function () {
    stateFromUrl();
    render();
  });

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

  function renderHomeView() {
    var listHtml;
    if (templates.length === 0) {
      listHtml =
        '<div class="empty">まだテンプレートがありません。<br>右下の + から、現場の作業ごとにチェックリストを作りましょう。</div>';
    } else {
      listHtml =
        '<div class="card-list">' +
        templates
          .map(function (t) {
            var p = progressOf(t);
            var pct = p.total ? Math.round((p.done / p.total) * 100) : 0;
            return (
              '<div class="template-card" data-open="' + t.id + '">' +
              '<div class="name">' + escapeHtml(t.name) + "</div>" +
              '<div class="progress-row">' +
              '<div class="progress-bar"><div style="width:' + pct + '%"></div></div>' +
              '<div class="progress-label">' + p.done + " / " + p.total + "</div>" +
              "</div>" +
              "</div>"
            );
          })
          .join("") +
        "</div>";
    }
    return (
      '<header class="topbar"><h1>忘れ物チェック</h1></header>' +
      "<main>" +
      listHtml +
      "</main>" +
      '<button class="fab" id="new-template-btn" aria-label="新しいテンプレート">＋</button>' +
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
      '<div class="field">' +
      "<label>作業名</label>" +
      '<input type="text" id="new-template-name" placeholder="例: 2階 電気配線工事" maxlength="40">' +
      "</div>" +
      '<div class="field">' +
      "<label>サンプルから始める(任意)</label>" +
      '<div class="chip-row" id="preset-chip-row">' +
      '<div class="chip active" data-preset="">空で作成</div>' +
      presetChips +
      "</div>" +
      "</div>" +
      '<div class="actions-row">' +
      '<button class="btn secondary block" id="new-template-cancel">キャンセル</button>' +
      '<button class="btn block" id="new-template-create">作成</button>' +
      "</div>" +
      "</div>" +
      "</dialog>"
    );
  }

  function renderTemplateView(t) {
    var p = progressOf(t);
    var pct = p.total ? Math.round((p.done / p.total) * 100) : 0;

    var groups = CATEGORIES.map(function (cat) {
      var items = t.items.filter(function (it) { return it.category === cat; });
      if (items.length === 0) return "";
      return (
        '<div class="category-group">' +
        '<h2><span class="dot" style="background:var(--cat-' + cat + ')"></span>' + cat + "</h2>" +
        items
          .map(function (it) {
            return (
              '<div class="item-row ' + (it.checked ? "checked" : "") + '" data-item="' + it.id + '">' +
              '<div class="check" data-toggle="' + it.id + '">✓</div>' +
              '<div class="item-name" data-toggle="' + it.id + '">' + escapeHtml(it.name) + "</div>" +
              '<button class="del" data-del="' + it.id + '" aria-label="削除">×</button>' +
              "</div>"
            );
          })
          .join("") +
        "</div>"
      );
    }).join("");

    if (t.items.length === 0) {
      groups = '<div class="empty">まだ持ち物がありません。<br>下のフォームから追加してください。</div>';
    }

    var catOptions = CATEGORIES.map(function (c) {
      return '<option value="' + c + '">' + c + "</option>";
    }).join("");

    return (
      '<header class="topbar">' +
      '<button class="back" id="back-btn">‹ 戻る</button>' +
      "<h1>" + escapeHtml(t.name) + "</h1>" +
      '<button class="back" id="menu-btn">…</button>' +
      "</header>" +
      "<main>" +
      '<div class="summary-bar">' +
      '<div class="count">' + p.done + " / " + p.total + "</div>" +
      '<div class="progress-bar"><div style="width:' + pct + '%"></div></div>' +
      '<button class="btn secondary" id="reset-btn">リセット</button>' +
      "</div>" +
      groups +
      '<div class="add-item-row">' +
      '<input type="text" id="new-item-name" placeholder="持ち物を追加" maxlength="40">' +
      '<select id="new-item-category">' + catOptions + "</select>" +
      '<button class="btn" id="add-item-btn">追加</button>' +
      "</div>" +
      "</main>" +
      renderMenuDialog(t)
    );
  }

  function renderMenuDialog(t) {
    return (
      '<dialog id="menu-dialog">' +
      '<div class="dialog-body">' +
      "<h3>テンプレート設定</h3>" +
      '<div class="field">' +
      "<label>作業名</label>" +
      '<input type="text" id="rename-input" value="' + escapeHtml(t.name) + '" maxlength="40">' +
      "</div>" +
      '<div class="actions-row">' +
      '<button class="btn secondary block" id="rename-save">名前を保存</button>' +
      "</div>" +
      '<div class="actions-row">' +
      '<button class="btn secondary block" id="duplicate-btn">複製</button>' +
      '<button class="btn danger block" id="delete-btn">削除</button>' +
      "</div>" +
      '<hr style="border:none;border-top:1px solid var(--border);margin:20px 0">' +
      "<h3>アプリを開かずに確認したいとき</h3>" +
      '<p style="font-size:13px;color:var(--text-dim);line-height:1.7;margin-top:-4px">' +
      "この作業専用のホーム画面アイコンを作ると、タップ1回で一覧を経由せずこの画面に入れます。" +
      "ブラウザの共有メニュー(Safari)や「⋮」メニュー(Chrome)から「ホーム画面に追加」を選んでください。オフラインでも開けます。" +
      "</p>" +
      '<div class="actions-row">' +
      '<button class="btn secondary block" id="copy-text-btn">テキストで書き出す(コピー)</button>' +
      "</div>" +
      '<p style="font-size:13px;color:var(--text-dim);line-height:1.7">' +
      "コピーした一覧をiPhoneの「リマインダー」やAndroidの「Google Keep」の新規作成画面に貼り付けると、行ごとに項目が分かれます。" +
      "これらのアプリならホーム画面ウィジェットで、アプリを開かず直接チェックできます。" +
      "</p>" +
      '<div class="actions-row">' +
      '<button class="btn secondary block" id="menu-close">閉じる</button>' +
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
    document.querySelectorAll("[data-open]").forEach(function (el) {
      el.addEventListener("click", function () {
        go("template", el.getAttribute("data-open"));
      });
    });

    var dialog = document.getElementById("new-template-dialog");
    var fab = document.getElementById("new-template-btn");
    var nameInput = document.getElementById("new-template-name");
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
      var items = (PRESETS[selectedPreset] || []).map(function (pair) {
        return { id: uid(), name: pair[0], category: pair[1], checked: false };
      });
      var t = { id: uid(), name: name, items: items, updatedAt: Date.now() };
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

    document.getElementById("reset-btn").addEventListener("click", function () {
      t.items.forEach(function (it) { it.checked = false; });
      saveTemplates();
      render();
    });

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

    document.querySelectorAll("[data-del]").forEach(function (el) {
      el.addEventListener("click", function (ev) {
        ev.stopPropagation();
        var id = el.getAttribute("data-del");
        t.items = t.items.filter(function (it) { return it.id !== id; });
        saveTemplates();
        render();
      });
    });

    var nameInput = document.getElementById("new-item-name");
    var catSelect = document.getElementById("new-item-category");

    function addItem() {
      var name = nameInput.value.trim();
      if (!name) {
        nameInput.focus();
        return;
      }
      t.items.push({ id: uid(), name: name, category: catSelect.value, checked: false });
      saveTemplates();
      render();
      var el = document.getElementById("new-item-name");
      if (el) el.focus();
    }

    document.getElementById("add-item-btn").addEventListener("click", addItem);
    nameInput.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter") addItem();
    });

    var menuDialog = document.getElementById("menu-dialog");
    document.getElementById("menu-btn").addEventListener("click", function () {
      menuDialog.showModal();
    });
    document.getElementById("menu-close").addEventListener("click", function () {
      menuDialog.close();
    });

    document.getElementById("copy-text-btn").addEventListener("click", function () {
      copyTemplateAsText(t);
    });

    document.getElementById("rename-save").addEventListener("click", function () {
      var val = document.getElementById("rename-input").value.trim();
      if (!val) return;
      t.name = val;
      t.updatedAt = Date.now();
      saveTemplates();
      menuDialog.close();
      render();
    });

    document.getElementById("duplicate-btn").addEventListener("click", function () {
      var copy = {
        id: uid(),
        name: t.name + " のコピー",
        items: t.items.map(function (it) { return { id: uid(), name: it.name, category: it.category, checked: false }; }),
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

  // ---------- init ----------

  stateFromUrl();
  syncUrl(true);
  render();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    });
  }
})();
