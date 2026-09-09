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
  ...]`をIntro内に埋め込む形でしか使っていなかった)を新設。全8セクションの行数も
  重複しないよう設計: Cold Open Chorus 4行/Verse1 8行/Spoken Interlude 3行/Chorus 7行/
  Verse2 6行/Bridge 2行/Final Chorus 5行(Chorusより圧縮)/Outro 1行。
- Final Chorusでは「石が尽きるまで」というフックだけ残し、それ以外を「それでも学ばず
  また回す」という結末に書き換えた(サビ反復時はフック以外を書き換える、の技法)。
  コメディとして"成長・改心"では終わらせず、**変わらない滑稽さのまま着地させる**のが狙い。

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

回せ 回せ
石が尽きるまで
星も願いも
全部賭けてやる

[Verse 1]
[Gritty spoken-sung delivery, driving groove]

深夜3時
充電20％
指が覚えた
連打のリズム
低残高の
通知は無視
今夜だけは
負けられない

[Spoken Interlude]
[Half-spoken growl, dramatic pause before, self-aware]

……ここでSSRが出れば
すべてが報われる
出なければまた課金だ

[Chorus]

回せ 回せ
石が尽きるまで
星も願いも
全部賭けてやる
明日の飯より
今のガチャだ
負け犬でいい、それが俺だ

[Verse 2]
[Confident growl]

攻略サイトも読み尽くした
天井まではあと三万円
財布の中身
軽くなるほど
魂だけが
重くなってく

[Bridge]
[Half-growled, exhausted honesty, guitars drop out]

本当は分かってるんだ
搾取されてもそれでも回す

[Final Chorus]
[Full growl, guitars return]

回せ 回せ
石が尽きるまで
それでも明日も
きっと回してる
負け犬のままでいい

[Outro]
[Growled, tired but satisfied, hard stop]

また課金 また負ける また笑う
```

## タイトル候補(名前と合わせて後日決定)

- **無課金の反逆者** — 実際は課金しているのに「無課金」を名乗る矛盾がコメディ
- **深夜3時の魔王** — 大真面目なアンチヒーロー感とガチャ廃人の自虐を両立
- **石が尽きるまで** — サビのフックをそのままタイトルに
