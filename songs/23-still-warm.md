# Still Warm

ボーカル: YuRa
テーマ: 終わりが来ることを知っている夜、それでも今だけは確かに触れ合っている
ジャンル: ジャンル名を使わず楽器・奏法のみで指定(124Bpm)。呼吸音をパーカッションの一部として
  編み込み、心臓の鼓動のようなサブベースの脈動、チェロとヴァイオリンが2つの声のように
  掛け合うInstrumental Breakという構成
モチーフ: 手のひら(汗ばむ→冷える→強く握る→指を絡める)、握る力の強さの変化

## 制作メモ

- **チャッピー(他AI)に「教科書的なAI恋愛歌詞」と判定された箇所の修正**: 初稿はVerse 3
  「永遠なんて どこにも無いから」、Chorus「終わりがあるのを 知ってしまったから」という、
  テーマを直接言葉で説明する行を使っていた。この曲は内省的なラブバラードであり
  「具体描写と抽象的な啖呵、ジャンルで使い分ける」ルールに従えば、アンセム系の
  抽象啖呵の対象外。直接言明を削り、既存の「手のひら」モチーフの延長(握る力の変化)
  で同じ意味を語る形に書き直した:
  - Verse 3: 「永遠なんて どこにも無いから」→「その汗が 少しずつ冷えていく」
    (Verse 1の「汗ばんでる」を指示語「その汗」で受け、説明せず体感の変化だけで緊張を示す)
  - Chorus: 「終わりがあるのを 知ってしまったから」→「繋いだ指に 爪が食い込むほど」
    (Verse 1「少し強く握る」の延長として握る力を頂点まで強め、Outroの「痛いくらい、
    抱きしめて」への伏線にもなる)
  - この修正で副次的に、曲全体が終始口語体(「〜してる」「〜だけど」)で統一され、
    「永遠」「知ってしまったから」が作っていた文体の浮き(説明的・書き言葉寄りの
    レジスターの混入)も解消された。
  - 同日に別件で「文体を古語に格上げすると直接言明のAI臭さが消える」という技法を
    発見していたが、この曲(YuRaの現代的な口語ラブバラード)には不向きと判断し、
    不採用。古語技法ではなく具体描写への書き換えで対応した、という技法選択の実例として
    記録する。
- **スタイルプロンプートとブラケットの不整合を1件修正**: `[Instrumental Break]`に
  "strings and guitar"とギターが書かれていたが、スタイルプロンプト側の楽器指定
  (Swung Garage Beat, Soft Sub-Bass, Warm Analog Synth Pads, Strings)にギターは
  存在しなかった。ブラケット側からギターを削除し、Strings+Padのみに統一して解決。
- **スタイル全体への緩急設計の明記**(「古き盟約」リミックスで採用した技法)を今回も
  スタイルプロンプート本文に直接入れた: `Intimate And Restrained Verses, Tension
  Gradually Building Into The Chorus, Powerful Emotional Release In The Chorus,
  Strong Dynamic Contrast`。ブラケット側の緩急指定と二重に補強する運用。
- **スケルトンの使い回し回避の確認**: Pre-Chorusを使わず、Chorusは1回のみ(Final Chorus
  ではなくフックだけの`Chorus Tag`で再登場)、Verseを4回使用、という構成は、直近のYuRa曲
  (Verse→Pre-Chorus→Chorus→Verse→Bridge→Final Chorusの繰り返し)と種類・出現回数の
  両方が異なり、厳格化ルールに抵触しない。
- アウトロの「抱きしめて/もっと強く、抱きしめて/痛いくらい、抱きしめて」は、中島美嘉
  「祈り、終われば」から抽出した「三段階リフレイン」技法(同じ文型を繰り返し修飾語だけ
  変えて感情を積み上げる)の実践。
- **サウンドが「聴いたことある」と指摘され、ジャンル名を全廃して楽器・奏法だけで再構築**
  (2026-09-15)。「Future Garage, Japanese Pop, Cinematic String Accents」はCLAUDE.md
  記載の通りYuRaの最頻出組み合わせ(既存5曲で使用済み)で、6曲目になると量産感が出る
  という指摘を受けた。「雨」「One Step Behind」の手法(ジャンル名を使わず楽器・奏法
  だけで組む)を採用し、テーマを直接音に翻訳する技法を実践:
  - Verse3の歌詞「呼吸の音を数える」というモチーフを、実際に**呼吸音をパーカッションの
    レイヤーとして編み込む**という音響指示に翻訳(`Sampled Breath Woven Into The
    Percussion Bed`)。歌詞の内容と音響指示が一致する形。
  - 握る力が強まっていく歌詞の展開を、**サブベースの心臓の鼓動がサビに向けて
    引き締まっていく**という指示(`Sub-Bass Heartbeat Pulse, Tightening Toward The
    Chorus`)に翻訳。
  - Instrumental Breakの楽器を「ストリングス+パッド」という曖昧な指定から、
    **チェロとヴァイオリンが同じフレーズを掛け合う=2人の声の比喩**という具体的な
    奏法指定に変更(`Solo Cello And Violin Trade The Same Phrase Like Two Voices`)。
    単なる伴奏ではなく、歌詞の「2人」というテーマを音そのもので表現する技法の実践。
  - 文字数は965文字(圧縮前は1005文字で規定オーバーだったため、冗長な修飾を削って
    調整)。
- **ユーザー改稿でOutroを2行→4行に拡張**(2026-09-15)。「抱きしめて もっと強く、抱きしめて」
  「痛いくらい、抱きしめて」という2行から、「抱きしめて もっと強く」「抱きしめて、痛いくらい」
  「今のうちに...」「抱きしめて…」の4行に変更。動詞(抱きしめて)を先に置き修飾語を
  後に続ける倒置に変わり、「今のうちに...」という新しい行で"時間切れが迫っている"
  切迫感を、抽象的な説明language(「終わりがあるから」等、初稿で問題になった言い回し)
  ではなく口語の呼びかけとして追加。三段階リフレイン(抱きしめて→もっと強く→痛いくらい)
  の技法自体は維持しつつ、フェードアウトの最後の一言（抱きしめて…）に向けて余韻を
  より長く引き伸ばす形になった。

## スタイルプロンプト

```
YuRa,
Powerful Female Vocal, Front And Center Vocal, Strong Vocal Presence,
Natural Vocal Grain Left In, Audible Breath Between Phrases, Slight Human Pitch Wave,
Verses Hushed And Close-Mic, Chorus Opens Into Full Aching Belt, Never Buried Beneath Strings,

124 Bpm,
Song Length Around 3 Minutes 30 Seconds,

Warm Analog Pad Slowly Filtering Open Across The Intro, Tape Saturation,
Sampled Breath Woven Into The Percussion Bed, Rising In Presence As Tension Builds,
Sub-Bass Heartbeat Pulse, Tightening Toward The Chorus,
Swung Off-Grid Hi-Hats, Soft And Distant In The Verses,

Solo Cello And Violin Trade The Same Phrase Like Two Voices In The Instrumental Break,
Strings Swell Beneath The Chorus Vocal, Tremolo Rising Into The Belt, Never Overpowering,

Close Intimate Vocal Mix In The Verses, Full Wide Emotional Mix In The Chorus,
Clean Separation Between Vocal And Strings,

Gentle Fade, No Hard Cut, Ends On Breath Not Silence,

Not Ambient, No Crowd Vocals
```

## 歌詞

```
[Intro]
[Warm analog pad slowly filtering open, tape saturation underneath, no vocal, distant]

[Verse 1]
[Hushed, intimate, close-mic]
触れた手のひら 少しだけ汗ばんでる
離さないように 少し強く握る

[Verse 2]
[Still intimate, quiet warmth]
隣で笑う 声が掠れてる
明日のことは まだ分からないけど
今はただ、ここにいる

[Verse 3]
[Breath catching, tension quietly rising]
その汗が 少しずつ冷えていく
呼吸の音を 数える

[Chorus]
[Vocal opens, full emotional release, lead vocal stays dominant as strings swell beneath]
世界が全部 消えてしまっても
この手の中の 熱だけは覚えていて
繋いだ指に 爪が食い込むほど
声に出せなくても 今、確かに触れてる

[Instrumental Break]
[Extended instrumental, solo cello and violin trade the same phrase back and forth like two voices, no vocal for a full extended passage before returning]

[Verse 4]
[Pulled back, quiet, the afterglow]
指を絡めて もう何も言わずに
肩に寄りかかる 重さだけが本当
窓の外が 少しずつ白んでいく
朝が来るのが 今だけは怖くない

[Chorus Tag]
[Brief hushed return, just the hook, not a full repeat]
声に出せなくても ここにいる

[Outro]
[Vocal fading to a whisper, gentle]
抱きしめて もっと強く
抱きしめて、痛いくらい
今のうちに...
抱きしめて…
```
