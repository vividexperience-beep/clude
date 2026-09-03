# 雨

ボーカル: YuRa
テーマ: 悲しみに暮れ、傘もささずに雨の中を歩き、最後は天を仰ぎ見る
ジャンル: Trance(116Bpm)、ボーカル+サックスを主役にした引き算の編成
モチーフ: 雨と涙の区別がつかないこと(涙(あめ)というルビで表記そのものに埋め込む)

## 制作メモ(教訓)

このリポジトリで一番長く難産だった曲。ここに至るまでの主な教訓を記録する。

- **迷走の経緯**: もともと「かっこいい曲を作りたい」という別のリサーチ(7曲の技法研究)から
  ハードトランス・四つ打ちの路線に入ったが、「雨」は本来ボーカルを聴かせる静かな曲であるべきで、
  ジャンル選定自体がテーマと噛み合っていなかった。最終的にテンポを116Bpmまで落とし、
  楽器をキック・ベース・ボーカル・サックスだけに絞ることで解決した。**曲調の勢いに引っ張られて、
  テーマに合わないジャンルを選んでしまう失敗**として記録する。
- **何度直してもAI構文から抜け出せなかった**: 「〜が〜して」の説明文、状況の実況、感情語の直接使用
  (「消えてしまいたい」等)、紋切り型の比喩(「視界が二重に見える」=涙のクリシェ)を繰り返し指摘され、
  そのたびに単語だけ差し替える対症療法に陥った。
- **決定打はユーザー自身が即興で書いた1行だった**: 「冷えた身体を雨粒が伝う/その場から動けず/
  天を仰ぎ頬を打つ」。ここから抽出した技法:
  1. **雨(自然)を文の主語にし、自分を受け身の側に置く**(「雨粒が身体を伝う」であって「私が感じる」ではない)
  2. **て形の説明的な繋ぎを使わず、連用形の止め(仰ぎ、動けず等)で切る**
  3. **理由・分析の助詞(んだろう、のに、さえ)を一切使わない**、ただ事実だけを置く
  4. **圧倒的な省略・短さ**
  → 単語を差し替えるだけでは直らず、**文法・主語の取り方という、もっと根本的なレベルの模倣**が
  必要だった。
- **ユーザーの既存曲「Afterimage」を通しで読んで、さらに4つの技法を発見**:
  1. 英単語をサビの決め台詞としてではなく、**文中の語彙として自然に混ぜる**(「耳の奥で fade out」)
  2. **ルビでの意味ずらしを頻繁に使う**(「雨音(あまおと)」「現実(いま)」「明日(あす)」)
  3. **「oh oh / ah ah」のような合いの手で、1つの文を2つに割って挟み込む**(合いの手は文の"外"の
     飾りではなく、文の"中"に割り込ませて呼吸を作る)
  4. **主語を文末に置く倒置**(「駆け出した私」)で自分を突き放して見る距離感を作る
- **「表記を変えただけ」の誤魔化しを指摘された**: `[Vocal Break]`を「ah-ah-ah / oh-oh」から
  日本語の「……あ / ……ああ / ああああ」に変えたが、これは**ローマ字をひらがなに変えただけ**で、
  「音節を積み上げる」という仕組み自体はAfterimageの丸パクリのままだった。技法の模倣とは、
  表面上の文字種を変えることではなく、**仕組み・機能ごと別物にすること**だと学んだ。最終的に
  「1つの持続音が途中で崩れて消える」という、積み上げ型とは違う演出指示(ブラケットのみ、
  音節を書かない)に変更して解決。
- **ブラケット見出し形式([Genre][Vocal]等)は文字数を圧迫するだけで必須ではない**という指摘を受け、
  ユーザーの普段の書き方(空行でカテゴリ分け、見出しなし)に戻した。約100文字浮いた。
- **特定セクションだけの編成指示(Chorus1をボーカル+ベースのみにする等)は、スタイルプロンプトの
  文章で説明するより、歌詞側の該当ブラケットに直接書く方が確実**(Sunoが「Chorus 1」をスタイル文
  から正しく特定できるとは限らないため)。
- Suno 4.5+で生成する場合は、長い説明文・ダッシュを使った複雑な文よりも、**普段通りのシンプルな
  カンマ区切りタグに戻す**方が良いというユーザーの判断で、スタイルプロンプトを簡略化した。
- ユーザー自身が「深層意識(わたし)」「記憶(ば)」というルビの意味ずらしを独自に使いこなしていた。
  技法として完全に定着した実例。

## スタイルプロンプト

```
Trance, 116 Bpm, Minor Key,
Cold Open, Chorus 1 Is Vocal And Bass Only — No Kick, No Sax Until After,
Driving Yet Aching, Stripped Back For Vocal And Sax,

Yura, Powerful Female Vocal, Strong Vocal Presence, Natural Vocal Grain, Audible Breath, Slight Human Pitch Wave,
Verse 1 Near-Whisper, Swallowed Consonants, No Vibrato,
Choruses Open But Trembling, Slight Rasp, Never Fully Smoothed,
Bridge Almost Pure Breath,
Final Chorus Full Open Belt, Aching Not Triumphant, Power Undercut By Exhaustion,

Saxophone Lead Voice, Answering Vocal In The Spaces Between Lines Not Underneath,
Breathy Crying Tone, Reed Noise, Pitch Bends, Wavering Held Notes,
Mirrors Vocal Arc: Hesitant Early, Raw By Chorus, Most Exposed In Final Chorus,

Dry Minimal Four-On-The-Floor Kick, Deep Sustained Sub Bass,
Nothing Else, No Pads, No Guitars, No Extra Synths,

Only Kick, Bass, Vocal, Sax At Any Time, No Full Stacking,
Silence After Bridge Is Performance,

Hard Stop Ending, No Fade Out
```

## 歌詞

```
[Chorus 1]
[Vocal And Bass Only, No Kick, No Sax]
冷えた身体(からだ)を 涙(あめ)が伝う
その場から 動けず
天(そら)を仰ぎ 頬を打つ

[Verse 1]
木々を 雨が叩き
水音だけが 満ちゆく
全てを 置き去りに
息だけが 白く……

[Pre-Chorus 1]
まぶたの端に 記憶の欠片(かけら)

[Post-Chorus]
ah ah
凍えた指を

ah ah
雨が濡らす

声も出せず
天(そら)を仰ぐ

[Verse 2]
水たまりを 蹴り上げながら
足元だけが 揺れ動く
雨に打たれ
静けさだけが隣に……

[Pre-Chorus 2]
心の奥に 雨の音

[Chorus 3]
乾かない想いを 涙(あめ)が撫で
拭えないまま
天(そら)を仰ぎ 声を上げる

[Bridge]
雨粒が打つ
静寂の中に

[Vocal Break]
[A single sustained note, breath catching and cracking partway through, then falling into silence]

[Final Chorus]
想いも悲しみも 雨に委ね
その記憶(ば)にとどまり

ah ah
深層意識(わたし)を

ah ah
雨が消す

息もできず
天(そら)を仰ぎ見る

[Outro]
まだ
やまない 涙(あめ)
```
