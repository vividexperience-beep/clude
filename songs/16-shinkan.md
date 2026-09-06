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

Nature Ambient, Forest Rain Soundscape, No Fixed Tempo, Free-Flowing,

Rain On Leaves Prominent And Close, Enveloping, Continuous Soft Patter,
Distant Soft Thunder Rumble, Grounding And Low, Felt More Than Heard,
Sparse Distant Bird Call, Warm Cello, Slow Sustained Phrases, Minimal,
Faint Ambient Pad, Very Low Volume,
No Drum Kit, No Bass Guitar, No Synth Leads, No Percussion,

Flat Dynamics, No Build-Up, No Climax, Refrain Same Volume As Verse,
Vocal And Instruments Kept Low, Rain Forward, Never Overpowering Vocal,
Vast Reverberant Space, Long Sustained Tones,

Gentle Outro, Rain Fades Into Silence
```

## 歌詞

```
[Intro]
[Soft rain begins, distant thunder rumble beneath]

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
[Only rain and distant thunder remain]

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
[Rain fades into silence]

このまま
根になる
```
