# 木霊(こだま)

ボーカル: 清宮栞(きよみや しおり) — 4曲目、森・雨の自然音への初挑戦
テーマ: リラクゼーション/不安解消。雨の森の中で、木の根に触れながら静かに呼吸する
ジャンル: Nature Ambient / Forest Rain Soundscape(拍・ビートを持たない自由なテンポ)
モチーフ: 木の根に触れる素足、雨粒、遠雷の振動。「根を張る」という言葉で、心を落ち着かせる
グラウンディングの感覚をそのまま情景化する

## 制作メモ

- タイトルは「木霊(こだま)」に確定(ユーザー決定)。「木々の精・響き」を意味する実在の言葉で、
  遠雷の振動・森の神秘性の両方にかかる。当初案の「森閑(しんかん)」から差し替えた。
- 「宇宙(そら)」(無重力)・「心音(おと)」(自分の鼓動)・「水界(すいかい)」(水中)に続く4曲目。
  今回は屋外の自然音というこれまでにない方向性で、既存曲と物理設定・語彙が重複しないよう
  「木の根」「苔」「雷」という新しい語彙を軸にした。
- **CLAUDE.mdのグラウンディング技法(低い持続ドローン)を、合成音ではなく「遠雷の振動」という
  自然現象に翻訳した**。歌詞にも「遠くの雷が低く響いて、その振動だけ胸に残る」と直接書き、
  スタイルプロンプトの`Distant Soft Thunder Rumble, Grounding And Low`と歌詞の両方で
  同じ演出を二重に支えている(`songs/01-one-step-behind.md`のテーマを音に翻訳する技法の応用)。
- **「Chorus」ラベル実験**: 「水界」で`Flat Dynamics`等のタグを入れてもサビの盛り上がりが
  残ったという教訓(CLAUDE.md「『Chorus』ラベルはタグだけでは盛り上げを完全に抑えきれない」)
  を受け、今回は`[Chorus]`という単語を避け、**`[Refrain]`というラベルに変更**して検証する。
  結果は生成後にフィードバックをもらい、この仮説が正しいか確認する。
- 楽器は新規にチェロを導入(ハープ・カリンバ・マリンバ・クリスタルボウル/ゴングに続く
  5つ目の楽器選択)。弦の持続音で、雨音・遠雷という自然音の間を静かに埋める役割。
- **雨音をもっと前に出したい**という要望を受け、`Gentle Rain On Leaves`を`Rain On Leaves
  Prominent And Close, Enveloping`に変更し、ミックス全体の指示も`Overall Low Volume Mix`
  から`Vocal And Instruments Kept Low, Rain Forward, Never Overpowering Vocal`に修正。
  「全体を静かにする」から「ボーカル・楽器は控えめ、雨音だけは前に出す」という役割分担に
  変えた(リラクゼーション系で音量を上げすぎない、という既存の教訓とは矛盾しない範囲で調整)。
- **生成結果、雨音が「雑音(ホワイトノイズ的な質感)」になったというフィードバックを受け再修正**。
  `Prominent And Close, Enveloping`という強い指定がノイズ寄りの質感を誘発したと判断し、
  `Real Acoustic Rain On Leaves, Soft Organic Pitter-Patter`と実在の自然音であることを明示、
  かつ`No White Noise, No Static Hiss`という直接的な除外タグを追加した。「前に出す」ことと
  「柔らかい質感を保つ」ことは両立させる必要があり、強調の言葉選び一つでノイズ寄りに
  転びうるという教訓。
- **さらにユーザーから「雨音を楽器で表現できないか」という提案を受け、方針を転換**。
  環境音サンプル(ambience)としての雨をタグで細かく制御するアプローチ自体をやめ、
  `Rain Stick`(石や種を筒に入れて転がし、雨音そのものを奏でる実在の打楽器)という
  **楽器の演奏として雨を表現**する方式に変更。さらに高音域のカリンバで不規則な粒の
  雫を添えた。「Sunoでの声部の指定は標準語彙を使う」の教訓と同じ発想で、環境音を
  細かく形容詞で制御しようとするより、**その音を本来奏でる実在の楽器名を使う方が
  Suno側に意図が伝わりやすい**という新しい応用例。
- **雷(`Distant Soft Thunder Rumble`)も同じ環境音タイプだと指摘され、まとめて楽器化**。
  雷→`Deep Gong`(低い持続する余韻が遠雷の質感に近い。`songs/15-nemuri-mizu.md`の
  サウンドバス技法で既に実績あり)、鳥の声(`Sparse Distant Bird Call`)→
  `Sparse High Glockenspiel Chime`に置き換え、環境音タグを全廃して全楽器編成にした。
  歌詞ブラケットの情景描写(Intro/Bridge/Outro)も「雨」「雷」という言葉を避け、
  「レインスティック」「ゴング」という楽器名で統一。**歌詞本文中の「雨」「雷」という
  言葉自体はただの歌唱内容(情景描写)であり、Sunoへの音響指示ではないため変更していない**
  (問題があったのはスタイルプロンプトのタグとブラケットの演出指示だけ)。
- ブラケット密度は既存3曲と同様、構造タグ+Intro/Bridge/Outroの情景描写のみに抑えた。

## スタイルプロンプト

```
Gentle Soothing Female Vocal, Alto Range,
Warm Soft Timbre With A Slight Natural Huskiness,
Subtle Natural Rasp As A Distinctive Vocal Character,
Close-Mic Intimate Presence, Soft Breathy Delivery,
Comforting And Healing Quality, Natural Vocal Grain,
Audible Breath Between Phrases, Minimal Vibrato, Relaxed Unhurried Phrasing,
Same Quiet Intensity Throughout, No Vocal Build, No Climax,

Nature Ambient, Forest Rain Soundscape, Free-Flowing, No Fixed Beat,

Rain Stick, Continuous Soft Cascading Texture, Evoking Falling Rain,
Sparse High Kalimba, Irregular Droplet-Like Plucks,
Deep Gong, Slow Decaying Resonance, Distant And Low, Grounding,
Sparse High Glockenspiel Chime, Occasional,
Warm Cello, Slow Sustained Phrases, Minimal, Faint Ambient Pad, Very Low,
No Drum Kit, No Bass, No Synth Leads,

Flat Dynamics, No Build-Up, No Climax, Refrain Same Volume As Verse,
Vocal And Instruments Kept Low, Never Overpowering Vocal, Vast Reverb,

Gentle Outro, Instruments Fade Into Silence
```

## 歌詞

```
[Intro]
[Rain stick begins alone, low gong resonance beneath]

雨が
葉を鳴らす

[Verse 1]

木の根に
触れる素足
冷たい土が
体を支える

苔の匂いが
胸に満ちて
灰色の光が
葉の間から

[Refrain]
[Same calm volume as verse, no build-up]

雨の粒だけ
数えていよう
根を張るように
ここにいよう

体の奥が
静かに緩む
土に還るように
息を吐く

[Verse 2]

肩に落ちる
雨のしずく
音もなく
染み込んでいく

遠くの雷が
低く響いて
その振動だけ
胸に残る

[Bridge]
[Only the rain stick and low gong resonance remain]

土の
匂いだけ

[Final Refrain]
[Same calm volume as verse, no build-up, no climax]

雨の粒だけ
数えていよう
根を張るように
ここにいよう

体の奥が
静かに緩む
土に還るように
息を吐く

[Outro]
[Rain stick and gong fade into silence]

このまま
根になる
```
