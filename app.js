(function () {
  "use strict";

  var STORAGE_KEY = "wasuremono.templates.v1";
  var CATEGORIES = ["材料", "道具", "機械", "その他"];

  var PRESETS = {
    "調査": [
      ["試走管", "道具"], ["流出防止", "道具"], ["通線", "道具"],
      ["調査用パッカー", "道具"], ["取付カメラ", "機械"], ["グリ、フレキ", "道具"]
    ],
    "前処理": [
      ["コンプレッサー一式", "機械"], ["土嚢袋", "材料"], ["試走管", "道具"],
      ["流出防止", "道具"], ["通線", "道具"], ["グリ、フレキ", "道具"],
      ["確認用注入パッカー", "道具"], ["取付カメラ", "機械"]
    ],
    "製管、ウエイト": [
      ["製管機", "機械"], ["ユニット一式", "材料"], ["プロファイル", "材料"],
      ["架台", "道具"], ["青ボンド", "材料"], ["通線", "道具"],
      ["ウインチ", "機械"], ["コロサポ", "道具"], ["角材(タイコ)", "道具"],
      ["取付桝用網", "材料"], ["新ハイザイ袋", "材料"]
    ],
    "注入": [
      ["モルタル", "材料"], ["青ボンド", "材料"], ["耐圧ホース", "道具"],
      ["サクションホース", "道具"], ["本管パッカー", "道具"], ["ウレタン", "材料"],
      ["ウレタンスポンジ", "材料"], ["外部削孔機", "機械"], ["グリ、フレキ", "道具"],
      ["集塵機", "機械"], ["ミニバキューマー", "機械"], ["小型桝用ポンプ", "機械"],
      ["サニーホース", "道具"], ["ゴムステップ", "材料"]
    ],
    "仕上げ": [
      ["コロサポ", "道具"], ["外部削孔機", "機械"], ["グリ、フレキ", "道具"],
      ["ウレタン除去ブラシ", "道具"], ["流出防止", "道具"], ["内部削孔機用ブラシ", "道具"]
    ],
    "製管、注入": [
      ["製管機", "機械"], ["ユニット一式", "材料"], ["プロファイル", "材料"],
      ["架台", "道具"], ["青ボンド", "材料"], ["通線", "道具"],
      ["ウインチ", "機械"], ["コロサポ", "道具"], ["角材(タイコ)", "道具"],
      ["モルタル", "材料"], ["耐圧ホース", "道具"], ["サクションホース", "道具"],
      ["本管パッカー", "道具"], ["ウレタン", "材料"], ["ウレタンスポンジ", "材料"],
      ["外部削孔機", "機械"], ["グリ、フレキ", "道具"], ["集塵機", "機械"],
      ["ミニバキューマー", "機械"], ["小型桝用ポンプ", "機械"], ["サニーホース", "道具"],
      ["ゴムステップ", "材料"]
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

  var templates = loadTemplates();
  var state = { view: "home", currentId: null, editMode: false, selected: {} };

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

    var groups = CATEGORIES.map(function (cat) {
      var items = t.items.filter(function (it) { return it.category === cat; });
      if (items.length === 0) return "";
      return (
        '<div class="category-group">' +
        '<h2><span class="dot" style="background:var(--cat-' + cat + ')"></span>' + cat + "</h2>" +
        items.map(renderItemRow).join("") +
        "</div>"
      );
    }).join("");

    if (t.items.length === 0) {
      groups = '<div class="empty">まだ持ち物がありません。<br>下のフォームから追加してください。</div>';
    }

    var catOptions = CATEGORIES.map(function (c) {
      return '<option value="' + c + '">' + c + "</option>";
    }).join("");

    var headerRight = editMode
      ? '<button class="back" id="edit-done-btn">完了</button>'
      : '<button class="back" id="edit-btn">編集</button><button class="back" id="menu-btn">…</button>';

    var topBlock;
    if (editMode) {
      var selectedIds = Object.keys(state.selected);
      var allSelected = t.items.length > 0 && selectedIds.length === t.items.length;
      topBlock =
        '<div class="summary-bar edit-toolbar">' +
        '<button class="btn secondary" id="select-all-btn">' + (allSelected ? "選択解除" : "全て選択") + "</button>" +
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
        : '<div class="add-item-row">' +
          '<input type="text" id="new-item-name" placeholder="持ち物を追加" maxlength="40">' +
          '<select id="new-item-category">' + catOptions + "</select>" +
          '<button class="btn" id="add-item-btn">追加</button>' +
          "</div>") +
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
        var allSelected = t.items.length > 0 && Object.keys(state.selected).length === t.items.length;
        if (allSelected) {
          state.selected = {};
        } else {
          state.selected = {};
          t.items.forEach(function (it) { state.selected[it.id] = true; });
        }
        render();
      });
    }

    var renameBtn = document.getElementById("rename-item-btn");
    if (renameBtn) {
      renameBtn.addEventListener("click", function () {
        var id = Object.keys(state.selected)[0];
        var item = t.items.find(function (it) { return it.id === id; });
        if (!item) return;
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
        t.items = t.items.filter(function (it) { return !state.selected[it.id]; });
        state.selected = {};
        saveTemplates();
        render();
      });
    }

    document.getElementById("reset-checks-btn").addEventListener("click", function () {
      t.items.forEach(function (it) { it.checked = false; });
      saveTemplates();
      render();
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

    document.getElementById("edit-btn").addEventListener("click", function () {
      state.editMode = true;
      state.selected = {};
      render();
    });

    var menuDialog = document.getElementById("menu-dialog");
    document.getElementById("menu-btn").addEventListener("click", function () {
      menuDialog.showModal();
    });
    document.getElementById("menu-close").addEventListener("click", function () {
      menuDialog.close();
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

  render();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    });
  }
})();
