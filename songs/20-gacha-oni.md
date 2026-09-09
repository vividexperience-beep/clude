# (タイトル未定 — 候補は本文末尾)

ボーカル: (名前未定) — がなりが得意な、しゃがれ声・中低音の男性キャラ。5人目の固定キャラクター
テーマ: 深夜のガチャ課金を、アンチヒーローの戦いとして大真面目に歌うコメディ
ジャンル: Wicked Hard Rock / Sinister Blues-Rock Edge(140Bpm)
モチーフ: 石(ガチャ石)・SSR・天井・低残高通知。「大真面目な歌唱×しょぼい内容」ギャップ技法
(`songs/08` `songs/09`)の3例目、今回はアンチヒーロー×コメディという新しい掛け合わせ

## 制作メモ

- **新キャラクター(5人目)を新設**。声質はリサーチに基づき、「がなり」の最も近い英訳が
  `Screaming`/`Death Growl`(デス声寄り、過剰)ではなく`Growl`(ノドを使った歪んだ生々しい声、
  民族音楽由来)だと判明したため採用。独自表現`Ganari-Style Shouted Delivery`は標準語彙で
  ない懸念があり不採用にした。
  ```
  Raspy Gravelly Male Vocal, Husky Mid-Low Range, Smoky Dark Timbre,
  Powerful Growl, Gritty Belted Delivery, Voice Cracking At The Edges,
  Aggressive Yet Controlled, Natural Vocal Grain, Audible Breath
  ```
  Asher(`Clean Male Vocals, No Scream`)とは正反対の、「がなりが得意」という得意技を
  前面に出した声質。
- **リサーチで判明した新知見: ボーカル指定はジャンルより先に書いた方が反映されやすい**
  (ジャンルタグに埋もれると薄まる、という情報)。この曲からボーカル→ジャンルの順で
  スタイルプロンプトを組む。
- テーマは「アンチヒーローだがコメディも欲しい」という要望から、**深夜のガチャ課金を
  大真面目な"戦い"として歌う**というギャップ技法を採用。「石(ガチャ通貨)」「SSR」
  「天井(確率保証)」「低残高通知」という具体的なガチャ用語だけで場面を統一し、
  抽象的な"闇落ち"描写にはしていない。
- **「スケルトンが毎度同じになる」という指摘を受け、これまでこのリポジトリで一度も
  使っていない構成**を採用: `songs/10-ame.md`で一度だけ使われた「Cold Open(サビ始まり)」
  技法に加え、**独立したセクションとしての`[Spoken Interlude]`**(これまでは`[Spoken:
  ...]`をIntro内に埋め込む形でしか使っていなかった)を新設。
- **ユーザー自身が歌詞に手を入れ、より振り切った最終稿に仕上げた(2026-09-09)**。主な変更:
  1. `[Chorus]`を`[Chorus 1]``[Chorus 2]`の2つに分割し、賭ける対象を「ガチャの石」→
     「生活費全部」へとエスカレートさせた。フック(「回せ！回せ！石が尽きるまで」)は
     全サビで共通のまま、後半だけ書き換える技法(`songs/08`等で確立)を、1曲の中に
     複数回登場するサビ全てに適用した実例。
  2. Outroを、当初の「また課金 また負ける また笑う」(静かな自嘲の受け入れ)から、
     **「それで俺の勝ちぃぃぃぃっ！！！！！」という狂気の勝利宣言**に変更。コメディの
     着地点を"諦観"から"完全に開き直った妄想の勝利"へと振り切った。
  3. 感嘆符・伸ばし表記(「負けられないぃぃっ！！！」等)でがなりの熱量を歌詞本文にも
     直接埋め込み、`明日(あす)`という既存のルビ技法(未来→あすと同系統)も追加。
  この改訂により、当初設計した「全セクション行数が重複しない」構成は崩れたが(Chorus群が
  軒並み8行になった)、これは**同一曲内で複数回登場するサビの行数が揃うのは自然**であり
  (むしろサビごとに行数を変える方が不自然)、「構成の型を使い回さない」教訓が本来
  問題にしていたのは**曲間でのスケルトンの使い回し**であって、1曲内のサビの行数統一とは
  別の話だと整理した。

## スタイルプロンプト

```
Raspy Gravelly Male Vocal, Husky Mid-Low Range, Smoky Dark Timbre,
Powerful Growl, Gritty Belted Delivery, Voice Cracking At The Edges,
Aggressive Yet Controlled, Natural Vocal Grain, Audible Breath,

Wicked Hard Rock, Sinister Blues-Rock Edge,
140 Bpm,

Heavy Distorted Guitar Riffs, Grinding Palm-Muted Chug,
Driving Rock Drums, Punchy Snare, Double-Kick Accents,
Dirty Growling Bass,

Menacing Yet Comedic, Self-Aware Camp,

Decisive Ending, No Fade Out
```

## 歌詞

```
[Cold Open Chorus]
[Full growl, hits immediately, no build-up, guitars slam in from the first beat]

回せ！ 回せ！
石が尽きるまで
星も願いも
全部賭けてやる！

[Verse 1]
[Gritty spoken-sung delivery, driving groove]

深夜3時
充電20％
指が覚えた
連打のリズム
低残高の
通知は無視
今夜だけは
負けられないぃぃっ！！！

[Spoken Interlude]
[Half-spoken growl, dramatic pause before, self-aware]

……ここでS S R(エスエスアール)が出れば
すべてが報われる
出なければまた課金だ！

[Chorus 1]

回せ！ 回せ！
石が尽きるまで
星も願いも
全部賭けてやる
明日の飯より
今はガチャだ
出るまで回せばいい
それで俺の勝ちぃっ！！！

[Verse 2]
[Confident growl]

攻略サイトも読み尽くした
天井まではあと三万円
財布の中身
軽くなるほど
魂だけが
重くなってく

[Chorus 2]

回せ！ 回せ！
石が尽きるまで
俺の生活費
全部賭けてやる
明日(あす)からの事は
気にするな！
今はガチャだ
出るまで回せっ！！！

[Bridge]
[Half-growled, exhausted honesty, guitars drop out]

本当は分かってるんだ
搾取(さくしゅ)されてもそれでも回す

[Final Chorus]
[Full growl, guitars return]

回せ！ 回せ！
石が尽きるまで
それでも明日(あす)も
きっと回してる
出るまで回せばいい
それで俺の勝ちぃっ！！！

[Outro]
[Growled, tired but satisfied, hard stop]

出るまで回せ！！

また課金！

必ずでる！

それで俺の勝ちぃぃぃぃっ！！！！！
```

## タイトル候補(名前と合わせて後日決定)

- **無課金の反逆者** — 実際は課金しているのに「無課金」を名乗る矛盾がコメディ
- **深夜3時の魔王** — 大真面目なアンチヒーロー感とガチャ廃人の自虐を両立
- **石が尽きるまで** — サビのフックをそのままタイトルに
