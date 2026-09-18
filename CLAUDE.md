# 開発上の決まりごと

## 入力欄に「name」「名」を使わない

iOS Safari は入力欄の種類を推測するとき、以下を全て見て「連絡先(名前)の入力欄だ」と判断し、
キーボード上部に「連絡先を自動入力」という候補バーを勝手に出してくる。

- `id` 属性の文字列(例: `new-template-name`)
- `name` 属性の文字列
- `autocomplete` 属性
- 入力欄を囲む `<form>` の有無と、その `autocomplete`
- **画面に見えているラベルの日本語**(例: 「作業名」の「名」)

このアプリでは実際にこれが発生し、属性だけ直しても消えず、ラベルの「作業名」を
「タイトル」に変えて初めて消えた。

### 新しく入力欄を作るときのルール

- `id` に `name` という英単語を含めない(`tpl-title-input` のように `title` 等を使う)
- `name` 属性は `q1` `q2` のような意味を持たない値にする
- ラベルに「名」を使わない(「タイトル」「項目」など)
- `autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"` を付ける
- `<form autocomplete="off" onsubmit="return false;">` で囲む
  (`onsubmit` を止めないと Enter でページ遷移してしまう)

## その他

- 依存ライブラリなし。`index.html` / `style.css` / `app.js` / `sw.js` の素の構成を保つ
- 外部通信は一切しない(オフライン前提のため)
- テキストのデータは localStorage。ただし **写真だけは IndexedDB**(`checklist/` のみ)
  - localStorage は5MBが上限で、しかも同じドメインの2アプリで共有するため写真は入らない
  - 写真は長辺1000px・JPEG品質0.7に縮小してから保存する(1枚あたり10〜150KB程度)
  - 保存期間は60日。起動時に期限切れと、項目から参照されなくなった写真を削除する
- `app.js` か `style.css` を変更したら `sw.js` の `CACHE` のバージョン番号を必ず上げる
  (上げないと端末側のキャッシュが更新されず、修正が反映されない)
