# One Step Behind

テーマ: すれ違う関係の温度差
特殊構成: エコー・ズレ二重唱(リードボーカルに対し、半歩遅れて自分の言葉で応じるエコーボーカルが最後まで完全には重ならない)

## 採用版(Suno生成で確認済み・気に入った版)

ジャンル名を使わず、楽器・奏法の指定だけで音を組み立てた版。2026-08-26にSunoで実際に生成し、
「全体の雰囲気・質感」「『半拍遅れる』感が音で伝わった」「YuRaの質感が良かった」と高評価。
**この曲のベースはこの版とする。**

音声ファイル: `23ac4c69-One_Step_Behind.mp3`(ユーザーが確認済み)

補足: 同じプロンプトでも生成ごとにブレがあり、複数回生成した中の1つが特に良かったとのこと。
Sunoは同一プロンプトでも複数回試して良いものを選ぶ前提で使うこと。

### スタイルプロンプト

```
YuRa,
Powerful Female Vocal,
Front And Center Vocal,
Strong Vocal Presence,
Close-Mic'd, Intimate Room Tone,

Detuned Music Box Motif,
Ticking Clock Percussion, Slightly Off-Time,
Felt Piano, Muffled And Warm,
Sparse Rimshot, No Full Drum Kit,
Deep Felt Sub Kick,
Muted Electric Guitar, Single Note Plucks,
Cold Analog Synth Pad,

Two Vocal Characters, Lead And Echo,
Echo Vocal Answers With Its Own Short Lines, Always Half A Beat Late,
Echo Vocal Absent From Final Resolution,

Wide Warm Stereo Mix,
Quiet Dynamic Build,
Gentle Fade,
No Crowd Vocals,
Avoid Resolved Happy Ending
```

### ブラケット

```
[Intro]
[Detuned music box motif, ticking clock pulse]

「おかえり」って 
言った声が
昨日より小さくて

[Verse 1]
[Lead Vocal]

リモコンの位置も
決まった席も変わらない
二十六度で止めた設定
また一度下がってる

洗濯物をたたむ手が
テレビの光で青い
「今日どうだった?」って聞いたら
「普通」しか返ってこない

[Pre-Chorus]
[Lead Vocal]

怒ってるわけじゃないの
ただ、静かになっただけ

[Chorus]
[Lead Vocal]

One step behind
気づけばいつも半歩遅れる
同じ部屋の同じ時間で
なんで置いていかれるんだろう

[Echo Vocal — Always Half A Beat Late]
(どうしてなの？)

[Lead Vocal]

One step behind
悪いのは誰でもないから
言葉のかわりに
ただ見つめてる

[Verse 2]
[Lead Vocal]

先に寝るねって
返事はいつも一拍遅れて
「うん、おやすみ」だけ

明かりが 消えてから
背中越しに聞こえる息遣い
隣で寝てるあなたの寝息が
遠くから聞こえてくる

[Pre-Chorus]
[Lead Vocal]

壊したいわけじゃないの
うまく笑えないだけ

[Chorus]
[Lead Vocal]

One step behind
気づけばいつも半歩遅れる
同じ部屋の同じ時間で
なんで届かないんだろう

[Echo Vocal — Always Half A Beat Late]
(何故なの？)

[Lead Vocal]

One step behind
悪いのは誰でもないから
リモコンの温度
また一度上げてみる

[Instrumental Interlude]
[Felt piano and ticking percussion only]

[Bridge]
[Sparse, ticking pulse thins to near silence]

合わせようとするたび
逆に離れていく気がして

[Lead Vocal]
[Intimate Vocal]

だけど  あなたを好きな
自分が ここに居る

[Final Chorus]
[Warm synth pad swells in]
[Lead Vocal + Echo Vocal, still slightly apart]

One step behind
それでも
隣にいたいと思う
半歩の距離は
きっと埋めなくても
いいのかもしれない
One step behind
名前を呼んだら
今日はちゃんと
「なに?」って
振り向いた

[Outro]
[Music box fades, ticking stops]
[Lead Vocal]

もう
この距離のままでいい

[end]
```

## 学んだこと

- **理屈上の懸念(「オルゴールは自壊からの流用で不気味すぎるかも」)と、実際に聴いた印象は一致しないことがある。**
  理論的な整合性チェックは大事だが、最終的には生成して聴いてみないと分からない。next timeも「合わなそう」と
  決めつけて捨てる前に、まず試すという判断もあり得る。
- 「半歩遅れる」というテーマを、歌詞の意味だけでなく **リズム/パーカッションのズレそのもの**
  (Ticking Clock Percussion, Slightly Off-Time)で表現する手法は効果的だった。今後もテーマを
  音のレベルに翻訳できないか考える。
- ジャンル名(Future Garage等)を使わず、楽器名+奏法だけで指定するSuno活用法は、今回はうまく機能した。

## 他に検討したバージョン(未検証・差し替え候補)

以下は同じ歌詞に対して試作したが、実際にSunoで生成して比較していない案。必要になれば
`git log` でこの時点までのコミットを遡って復元できる。

- **Future Garage / Uk Garage版**: シグネチャーサウンド(Powerful Female Vocal + Future Garage +
  Japanese Pop + Uk Garage Groove)での最初の完成版。
- **心情ベース版(Con Sordino Strings)**: 彼女の「感情を抑え込み、声を潜めている」内面を、
  弱音器奏法(Con Sordino)とチェロで表現しようとした案。Final Chorusで弱音器を外す設計。
- **生楽器インディー系**(「君のいた速度」ライン): ナイロンギター+エレピ中心、エコーも生声。
- **Neo-Bossa Nova / Brazilian R&B融合**: ボサノヴァの「ビートより少し遅れて歌う」性質を活用。
- **Kizomba風 Afro-Fusion**: 密着した二人がリズムに完全には同期しないダンスの質感を活用。
- **Half-Time Trip-Hop / UK Bass**: Portishead系の重く暗いハーフタイムグルーヴ。

いずれもスタイルプロンプトとブラケットは対で差し替える必要がある(片方だけ差し替えると音の方向性が
衝突するので注意)。
