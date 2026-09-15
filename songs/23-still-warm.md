# Still Warm

ボーカル: YuRa
テーマ: 終わりが来ることを知っている夜、それでも今だけは確かに触れ合っている
ジャンル: Future Garage・Japanese Pop、Cinematic String Accents、124Bpm
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

## スタイルプロンプト

```
Powerful Female Vocal, Front And Center Vocal, Strong Vocal Presence,
Natural Vocal Grain Left In, Audible Breath Between Phrases, Slight Human Pitch Wave,
Lead Vocal Always Dominant, Never Buried Beneath Strings Or Instruments,

Future Garage, Japanese Pop, Cinematic String Accents,
124 Bpm,
Song Length Around 3 Minutes 30 Seconds,

Intimate And Restrained Verses, Tension Gradually Building Into The Chorus, Powerful Emotional Release In The Chorus, Strong Dynamic Contrast,

Swung Garage Beat, Soft Sub-Bass,
Warm Analog Synth Pads, Strings Swell Beneath The Vocal In The Chorus, Never Overpowering,

Close Intimate Vocal Mix In The Verses, Full Wide Emotional Mix In The Chorus, Clean Separation Between Vocal And Strings,

Gentle Fade, No Hard Cut,

Not Ambient, No Crowd Vocals
```

## 歌詞

```
[Intro]
[Soft analog pad gradually swelling over an extended intro, no vocal, distant]

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
[Extended instrumental, strings trade long phrases over a slowly building pad, no vocal for a full extended passage before returning]

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
抱きしめて もっと強く、抱きしめて
痛いくらい、抱きしめて
```
