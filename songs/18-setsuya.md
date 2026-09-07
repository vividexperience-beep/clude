# 雪意(せつい)

ボーカル: 清宮栞(きよみや しおり) — 6曲目、432Hzチューニング+冬の言葉だけの歌詞という実験
テーマ: 雪が降るのを、窓辺で静かに見つめる。リラクゼーション/不安解消
ジャンル: Nature Ambient / Winter Soundscape(拍・ビートを持たない自由なテンポ、432Hzチューニング)
モチーフ: しんしんと降り積む雪、窓の霜、白い吐息。「冬に関係する言葉だけ」で歌詞を構成する
という語彙制限の実験

## 制作メモ

- タイトルは「雪意(せつい)」に確定(ユーザー決定)。「雪が降りそうな気配・様子」を意味する
  古典的な言葉で、しんしんと降る前の静けさ・前兆を言い当てている。
- **「気持ちが落ち着く周波数」をリサーチ**(2026-09-06)。432Hzが440Hz(標準チューニング)と
  比べて心拍数・コルチゾール(ストレスホルモン)を下げる効果が複数の臨床研究で確認されている、
  最も裏付けのある「落ち着く周波数」だった。396Hz(不安・恐れの解放)との併用例もあったが、
  今回は432Hzに絞り、CLAUDE.md「チューニングを演出に使う」技法をそのまま適用した
  (`Tuned To 432 Hz, Grounding Root Tone, Warm Resonant Drone`)。科学的な効能を歌詞や
  タイトルで断定的に謳うことは避け、あくまで音響上のチューニング指定として使っている。
- **歌詞を「冬に関係する単語のみ」で構成する語彙制限の実験**(ユーザー発案)。雪・霜・氷・
  凍てつく・しんしんと・吹雪・雪明かり等、冬の季語・語彙だけで全行を構成し、抽象的な
  感情語(寂しい・切ない等)を一切使わずに、情景描写だけで温度・静けさ・孤独感を伝える
  ことを試みた。「1種類の抽象語彙だけに絞って反復する」技法(技法引き出し参照)の
  発展形として、抽象語1つではなく「冬」という語彙カテゴリ全体に絞るアプローチ。
- 「木霊」「秋思」と同じくFlat Dynamics系のタグで統一し、`[Refrain]`ラベルを継続使用。
- **初稿への3点フィードバックを受けて全面改訂(2026-09-06)**:
  1. **構成のスケルトンがまだ重複していた**(Refrain 8行=Verse2 8行、Intro/Bridge/Outroが
     揃って2行、という指摘)。今回は**1〜7行を1つずつ、すべて異なる行数で使う**よう設計:
     Intro 1行/Verse1 5行/Refrain 7行/Verse2 6行/Bridge 3行/Final Refrain 4行/Outro 2行。
     セクション間で行数が一つも重複しない構成は清宮栞の楽曲群で初めて。
  2. **歌い方を「ぽつりぽつと呟く」ようなデリバリーに変更**。`Murmured Delivery,
     Spoken-Sung Quality, Words Dropped Sparsely One By One, Long Pauses Between Phrases`
     を追加し、通常の"歌う"デリバリーから、単語を一つずつ置いていくような呟き方に変更。
     歌詞側も読点(、)で細かく区切り、「ひとひら/また、ひとひら」のように単語単位で
     雪を数えるような書き方にした(歌い方と歌詞内容を一致させる、テーマの音への翻訳技法)。
  3. **楽器編成を大幅に削ぎ落とし**、雪が降る「無音な世界観」を邪魔しないようにした。
     尺八・クリスタルチャイムを削除し、**ミュージックボックスの極めて疎らな単音+432Hz
     ドローンのみ**という最小構成に変更(`Extremely Sparse, Single Notes, Long Silence
     Between Notes` / `Barely Audible`)。432Hzのチューニングそのものは指示通り変更していない。
- **さらに「Intro/Outroに毎回必ず歌詞を入れている、しかも毎回似た行数」という指摘を受け、
  清宮栞の既存6曲(宇宙・心音・水界・木霊・秋思・雪意)を確認したところ、全曲でIntro/Outro
  両方に1〜3行の短い歌詞が入っていることが判明**(2026-09-06)。構成の行数を変えるだけでは
  不十分で、**「そもそも歌詞を入れるかどうか」自体も変えるべき要素**だった。今回は
  Intro/Outroを**完全に歌詞なし(楽器のみ)**に変更し、最初に歌が入るのはVerse1、最後に
  歌が入るのはFinal Refrainとした。結果的に「無音の世界観」というこの曲のテーマとも
  より親和性が高い形になった。詳細はCLAUDE.md「清宮栞の楽曲で構成の型を使い回さない」を参照。
- **生成結果に変なアンビエンス(環境音)と、最後に不要な太鼓のような打楽器が入った
  というフィードバックを受け再修正**。`Near Total Silence``Vast Empty Reverb Space`
  といった抽象的な形容が、「木霊」の雨音ノイズ化と同じパターンでSuno側に意図しない
  音響テクスチャを生成させていたと判断し削除。代わりに`Only Music Box And Drone, No
  Other Instruments``No Ambient Noise, No Hiss, No Background Texture`という直接的な
  除外タグに差し替えた。終わり方も`Gently Dissolves Into Silence`だけでは弱かったため、
  `No Final Hit, No Percussion Accent At The End, Simply Fades To Nothing`を追加し、
  終盤の余計な打楽器の一撃を明示的に禁止した。
- スタイルプロンプト修正時に見落としていた、**歌詞ブラケット内の表現も合わせて確認**。
  Outroのブラケットに残っていた`dissolving into total silence`も同種の抽象的な表現
  だったため、`the music box and drone simply fade to nothing, no vocal, no final hit`
  に修正し、スタイルプロンプトの安全な言い回しと揃えた。

## スタイルプロンプト

```
Gentle Soothing Female Vocal, Alto Range,
Warm Soft Timbre With A Slight Natural Huskiness,
Close-Mic Intimate Presence,
Murmured Delivery, Spoken-Sung Quality, Words Dropped Sparsely One By One,
Long Pauses Between Phrases, Almost Whispered, Minimal Vibrato,
Same Quiet Intensity Throughout, No Vocal Build, No Climax,

Nature Ambient, Winter Soundscape, Free-Flowing, No Fixed Beat,

Music Box, Extremely Sparse, Single Notes, Long Silence Between Notes,
Deep Low Drone, Tuned To 432 Hz, Grounding Root Tone, Barely Audible,
Only Music Box And Drone, No Other Instruments,
No Drum Kit, No Taiko, No Percussion Of Any Kind, No Bass, No Synth Leads,
No Ambient Noise, No Hiss, No Background Texture,

Flat Dynamics, No Build-Up, No Climax, Vocal Kept Low,

No Final Hit, No Percussion Accent At The End, Simply Fades To Nothing
```

## 歌詞

```
[Intro]
[Instrumental only — a single sparse music box note drops, 432Hz drone barely audible beneath, no vocal yet]

[Verse 1]

窓辺に、
雪明かり
凍てつく夜
白さだけ
積もる

[Refrain]
[Same calm volume as verse, no build-up]

音もなく、
舞い落ちる
ひとひら
また、ひとひら
凍える
ただ、しずかに
夜がふける

[Verse 2]

霜の花、
窓に咲いて
指先は
凍えたまま
白い息
溶けてゆく

[Bridge]
[Music box falls silent, only the faint 432Hz drone remains]

しんしんと、
また
雪

[Final Refrain]
[Same calm volume as verse, no build-up, no climax — shorter and sparser than the first refrain]

音もなく、
ひとひら
ただ、
降る

[Outro]
[Instrumental only — the music box and drone simply fade to nothing, no vocal, no final hit]
```

