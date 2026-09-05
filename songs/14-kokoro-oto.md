# 心音(おと)

ボーカル: 清宮栞(きよみや しおり) — Lo-fi専用キャラクターの2曲目、瞑想BGMへの初挑戦
テーマ: 瞑想BGM。自分自身の鼓動に耳をすませ、そのリズムに導かれて内側へ沈んでいく
ジャンル: Meditation Ambient / Healing New Age(60Bpm、人間の安静時心拍数に合わせたテンポ)
モチーフ: 指先で自分の鼓動を数えるという具体的な仕草を軸に、外の音が消えて内側の音だけが
残っていく過程を描く

## 制作メモ

- 「宇宙(そら)」(1曲目)とは完全に別モチーフ。無重力・宇宙空間ではなく、自分の身体・鼓動という
  極めて近い距離のイメージに絞った。
- テンポは「人間の心音とほぼ同じ」という指定を、飾りではなく歌詞のテーマそのものに直結させた
  (`songs/01-one-step-behind.md`で確立した「テーマを音そのものに翻訳する技法」の応用)。
  60Bpmという数値を単なるBPMタグとしてではなく、楽器が1拍ごとに1回だけ鳴る
  「心音のこだま」として演出指定した。
- 楽器はハープ・ハンドパン・マリンバの3本柱指定を受け、瞑想BGMとして過不足がないかを検討。
  ドラムキット・ベースギター・シンセリードは明示的に除外し、3楽器+ごく控えめなアンビエント
  パッドのみに絞った。パッドが無いと持続音が途切れて瞑想の没入感が切れるため最小限で追加、
  逆にこれ以上楽器を足すと「瞑想BGM」ではなく「曲」になってしまうと判断し、他は加えていない。
- **1回目のフィードバックで3点修正**: (1)ハンドパンをカリンバに変更、(2)瞑想BGMなのにサビで
  盛り上がってしまう問題に対応するため、Chorus/Final Chorus専用のブラケットで「Verseと同じ音量・
  同じエネルギー、盛り上げない」と明記し、スタイルプロンプト側にも`Flat Dynamics Throughout`
  `No Build-Up` `No Climax` `Chorus At Same Volume And Energy As Verse`を追加してSuno標準の
  「サビで盛り上げる」挙動を明示的に打ち消した。(3)楽器の音量が大きくリラクゼーションに
  程遠いという指摘を受け、`Overall Low Volume Mix, Background Listening Volume, Never Loud`を
  追加し、各楽器にも`Kept Quiet Throughout` `Kept Soft` `Very Low Volume`を個別に付与した。
- ボーカルは清宮栞の固定ボイスプロンプト(ひそひそ声だが澄んで届く)をそのまま使用。声は固定・
  ジャンルは柔軟、という既存キャラクター運用方針に従った。
- ブラケット密度は「静かな内省系は薄く」の方針に従い、構造タグ中心+Intro/Bridge/Outroにのみ
  情景描写ブラケットを添える形にした(`songs/13-drifting.md`と同系統)。
- 歌詞は瞑想ガイドとして機能させるため、抽象的な感情語(「解放」「浄化」等)を避け、指先・
  手のひら・呼吸といった具体的な身体感覚だけで進行を描いた。

## スタイルプロンプト

```
Gentle Soothing Female Vocal, Alto Range,
Warm Soft Timbre With A Slight Natural Huskiness,
Subtle Natural Rasp As A Distinctive Vocal Character,
Close-Mic Intimate Presence, Soft Breathy Delivery,
Comforting And Healing Quality, Natural Vocal Grain,
Audible Breath Between Phrases, Minimal Vibrato, Relaxed Unhurried Phrasing,
Same Quiet Intensity Throughout, No Vocal Build, No Climax,

Meditation Ambient, Healing New Age,
60 Bpm, Matching Resting Heart Rate,

Kalimba, Slow Soft Pulse, One Gentle Pluck Per Beat, Echoing A Heartbeat,
Harp Arpeggios, Flowing And Sustained, Kept Quiet,
Marimba, Sparse Warm Melodic Phrases, Mellow Wooden Tone, Kept Soft,
Faint Ambient Pad, Very Low Volume,
No Drum Kit, No Bass Guitar, No Synth Leads,

Flat Dynamics, No Build-Up, No Climax, Chorus Same Volume As Verse,
Overall Low Volume Mix, Background Listening Volume, Never Loud,
Spacious Reverb, Wide And Airy, Sparse Arrangement, Room To Breathe,

Gentle Outro, Gradual Fade, No Final Climax
```

## 歌詞

```
[Intro]
[Kalimba pulse begins alone, one soft pluck per beat, quiet throughout]

目を閉じて
手のひらを 胸に

[Verse 1]

指先で
鼓動を数える
ひとつ ふたつ
息を吸って

外の音が
少しずつ 遠のく
自分の中の
音だけが残る

[Chorus]
[Same calm volume as verse, no build-up]

このリズムに
身体を預けよう
考えることは
今だけ手放して

鼓動と同じ
速さで揺れる
それだけでいい
それでいい

[Verse 2]

肩の力が
指先から抜ける
床に沈む
重さを感じて

呼吸のたびに
胸が広がる
狭くなっていた
世界がゆるむ

[Bridge]
[Only the kalimba pulse and breath remain, unchanged in volume]

吸って
吐いて
それだけ

[Final Chorus]
[Same calm volume as verse, no build-up, no climax]

このリズムに
身体を預けよう
考えることは
今だけ手放して

鼓動と同じ
速さで揺れる
それだけでいい
それでいい

[Outro]
[Pulse slows and dissolves into silence, no swell]

そのままで
いい
```
