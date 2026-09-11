# 魂の10連

ボーカル: 四道壮琉(しどう たける) — がなりが得意な、しゃがれ声・中低音の男性キャラ。5人目の固定キャラクター
テーマ: 深夜のガチャ課金を、アンチヒーローの戦いとして大真面目に歌うコメディ
ジャンル: Wicked Hard Rock / Sinister Blues-Rock Edge(140Bpm)
モチーフ: 石(ガチャ石)・SSR・天井・低残高通知。「大真面目な歌唱×しょぼい内容」ギャップ技法
(`songs/08` `songs/09`)の3例目、今回はアンチヒーロー×コメディという新しい掛け合わせ

## 制作メモ

- タイトルは「魂の10連」に確定(ユーザー決定)。ガチャの「10連ガチャ」(10回まとめ引き)に
  「魂ごと賭ける」という曲の内容がそのまま乗った、シンプルで的確なタイトル。
- **新キャラクター(5人目)「四道壮琉(しどう たける)」を新設**。最初の候補「鉄太」は
  実在の歴史的人物(木村鉄太、1828–1862、幕末の武士)と同名だったためユーザー判断で
  却下し、「四道壮琉」に確定(2026-09-09)。声質はリサーチに基づき、「がなり」の最も近い英訳が
  `Screaming`/`Death Growl`(デス声寄り、過剰)ではなく`Growl`(ノドを使った歪んだ生々しい声、
  民族音楽由来)だと判明したため採用。独自表現`Ganari-Style Shouted Delivery`は標準語彙で
  ない懸念があり不採用にした。
  ```
  Raspy Gravelly Male Vocal, Husky Mid-Low Range, Smoky Dark Timbre,
  Powerful Growl, Gritty Belted Delivery, Voice Cracking At The Edges,
  Aggressive Yet Controlled, Natural Vocal Grain, Audible Breath,
  Lead Vocal Focus, Vocal Forward, Never Buried Beneath Guitars
  ```
  Asher(`Clean Male Vocals, No Scream`)とは正反対の、「がなりが得意」という得意技を
  前面に出した声質。
- **「全体的に音量が小さい」フィードバックを受けてさらに調査(2026-09-09)**。
  `Radio-Ready Loudness, Clean Modern Production`(マスタリング指定)を追加した後も、
  そもそも**声の質感(Raspy/Growl等)しか指定しておらず、「ボーカルがミックスの主役である」
  という指定が一つも無かった**ことが判明。YuRa(`Front And Center Vocal, Strong Vocal
  Presence`)や清宮栞(`Vocal Forward In The Mix, Never Buried`)は声質と別にミックス上の
  主役指定を必ず持っているが、四道壮琉の固定ボーカルにはそれが抜けていた。
  `Lead Vocal Focus, Vocal Forward, Never Buried Beneath Guitars`を追加して対応。
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
- **ユーザーがさらに歌詞を振り切った最終稿に仕上げた(2026-09-09、2回目の改稿)**。
  Bridgeに「それでも ここまで来たら/後には引けねぇ/引いちゃいけねぇぇぇぇッ！！！」を
  追加し、静かな告白から叫びへ転換する構成に変更。Outroも「出るまで回せ！！/また課金！/
  必ずでる！」から「諦めるなッ！課金しろッ！出るまで回せッ！俺の負けはないッ！」という
  さらに畳みかける絶叫に変更。歌詞本文は変更せず、**ブラケットのタグのみ**この改稿に
  合わせて2箇所修正した:
  1. `[Bridge]`: `Half-growled, exhausted honesty, guitars drop out` →
     `Half-growled confession, guitars drop out, then building back to a defiant
     shout as guitars surge back in`(前半の静けさしか捉えておらず、後半の
     「引けねぇ」という高まりをタグが反映していなかったため、静→動の変化を1つのタグに
     書き込んだ)。
  2. `[Outro]`: `Growled, tired but satisfied, hard stop` →
     `Growled, manic and unhinged, triumphant escalation, hard stop`
     (「疲れてるけど満足」という落ち着いたタグのままでは、新しい畳みかける絶叫の熱量と
     合わなくなっていたため)。
  歌詞内容とブラケットのデリバリー指定がズレていないか、改稿のたびに確認する必要がある
  という実例。
- **歌詞本文の最新稿(2026-09-11、3回目の改稿)**。Chorus 1「出るまで回せばいい」→
  「出るまで回せば」に圧縮。Final Chorusの後半を「出るまで回せばいい/それで俺の勝ちぃッ！！！」
  から「これ迄の 課金(どりょく)を/無駄にさせねぇぇッ！！！」に変更。`課金`という字に
  `どりょく`(努力)という読みを当てる、彼方→かなたと同系統の意味ずらしルビ技法の新例。
  ガチャへの課金を"努力"と言い換える皮肉・開き直りのニュアンスが加わった。この歌詞本文の
  改訂は、Voice機能カバー版(`songs/20-gacha-oni-voice-cover.md`)とも共通の最新稿として
  両ファイルに反映した(ボーカル・ブラケットの扱いだけが2ファイルで異なる)。

## スタイルプロンプト

```
Raspy Gravelly Male Vocal, Husky Mid-Low Range, Smoky Dark Timbre,
Powerful Growl, Voice Cracking At The Edges, Aggressive Yet Controlled,
Natural Vocal Grain, Audible Breath, Lead Vocal Forward, Never Buried Beneath Guitars,

Wicked Hard Rock, Sinister Blues-Rock Edge,
140 Bpm,

Heavy Distorted Guitar Riffs, Grinding Palm-Muted Chug, Doubled Rhythm Guitars,
Driving Rock Drums, Punchy Snare, Double-Kick Accents,
Dirty Growling Bass,

Menacing Yet Comedic, Self-Aware Camp,

Wall Of Sound Density, Heavily Compressed Master,

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
負けられないぃぃッ！！！

[Spoken Interlude]
[Half-spoken growl, dramatic pause before, self-aware]

……ここで S S R が出れば
すべてが報われる
出なければ...
さらに課金だぁッ！

[Chorus 1]

回せ！ 回せ！
石が尽きるまで
星も願いも
全部賭けてやる
明日の飯より
今はガチャだ
出るまで回せば
それで俺の勝ちッ！！！

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
出るまで回せッ！！！

[Bridge]
[Half-growled confession, guitars drop out, then building back to a defiant shout as guitars surge back in]

本当は分かってるんだ
搾取(さくしゅ)されてるって事も
それでも ここまで来たら
後には引けねぇ
引いちゃいけねぇぇぇぇッ！！！

[Final Chorus]
[Full growl, guitars return]

回せ！ 回せ！
石が尽きるまで
それでも明日(あす)も
きっと 回してる

これ迄の 課金(どりょく)を
無駄にさせねぇぇッ！！！

[Outro]
[Growled, manic and unhinged, triumphant escalation, hard stop]

諦めるなッ！

課金しろッ！

出るまで回せッ！

俺の負けはないッ！

出るまで回せばッ！

俺の勝ちぃぃぃぃッ！！！！！
```

