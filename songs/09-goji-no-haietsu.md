# 五時の拝謁

ボーカル: キャラクター未指定(荘厳な合唱一本、リードボーカルなし)
テーマ: 朝5時、猫に顔を引っ掻かれて起こされる日常を「拝謁の儀式」として描くコミカル曲
ジャンル: Sacred Choral Music(Gregorian Chant風パロディ)
モチーフ: 一つの朝の流れ(起床→給餌→無反応)を通して、猫を君主として崇める「忠誠の誓い」

## 制作メモ(教訓)

- `songs/08-tettai-sakusen.md`の「大真面目な歌唱×しょぼい内容」というギャップの技法を継続。
  今回は「猫に顔を引っ掻かれて叩き起こされる」という些細な日常を、荘厳な聖歌隊の合唱で
  「陛下への拝謁」「勅命」「詔(みことのり)」として歌わせるギャップが笑いどころ。
- ボーカル方向性として「壮大なコーラス一本」と「独唱者(司祭風)+コーラス応答」の2案を提示し、
  歌詞のブラケットが`[Chorus]`のまま維持されたことから、合唱一本の方向で確定と判断した。
  (司祭+コーラス応答版のスタイルプロンプトも一応提示済み。将来リミックスする場合に使える)
- Aメロ→Bメロ→サビを通して「朝5時に起こされ、台所でご飯を用意し、一瞥もされずに食べ始められる」
  という**一つの連続した朝の場面**だけに絞り、`songs/07-yuzutto-magic.md`で起きた
  「場面がバラバラで意味が繋がらない」失敗を避けた。
- 2回目のサビは1回目と同じ「今日も従う」という核のフックは残しつつ、状況を「御前へと進む」
  (起床)→「空いた器だけが証となる」(給餌後、感謝されない)に変化させ、Final Chorusでは
  「今日も」→「生涯」と誓いの射程を拡大させた。`songs/08-tettai-sakusen.md`で確立した
  「フック以外は物語の進行に合わせて書き換える」ルールをここでも踏襲。
- ユーザー自身が、歌詞中の「拝謁」「刻」など読み方が揺れうる漢字全箇所に統一してルビを
  振り直した最新版を提示。Sunoでの読み間違い防止のため、同じ漢字が複数回登場する場合は
  **初出だけでなく全箇所にルビを振る**方が安全、という運用を確認した。

## スタイルプロンプト(採用: 合唱一本)

```
Massed Choir Vocals,
No Lead Vocal, Full Choir Unison And Harmony,
Gregorian Chant Influence,
Reverent Solemn Delivery,
Deep Male And Female Voices Blended,

Sacred Choral Music,
Cathedral Pipe Organ,
Tubular Bells,
Low String Drones,
Distant Timpani Rolls,

66 Bpm,
Stately Tempo,

Cavernous Cathedral Reverb,
Wide Ambient Mix,

Played Completely Straight,
Grand Sustained Final Chord,
No Fade Out
```

### 未採用案(参考: 独唱者(司祭風)+コーラス応答)

将来リミックスする場合用に記録。この場合は歌詞ブラケットを`[Cantor]`/`[Choir Response]`に
組み替える必要がある。

```
Solo Cantor Lead Vocal, Priest-Like Delivery,
Reverent Chanting Cadence,
Full Choir Response, Massed Voices In Unison,
Gregorian Chant Influence,
Call And Response Between Cantor And Choir,

Sacred Choral Music,
Cathedral Pipe Organ,
Tubular Bells,
Low String Drones,
Distant Timpani Rolls,

66 Bpm,
Stately Tempo,

Cavernous Cathedral Reverb,
Wide Ambient Mix,

Played Completely Straight,
Grand Sustained Final Chord,
No Fade Out
```

## 歌詞

```
[Intro]
夜明け前
玉座は ベッドの上
今日も 拝謁(はいえつ)の刻(とき)

[Verse 1]
柔らかき肉球
頬に触れる音で
覚醒せよと
勅命が下る

爪先ひとつ
額に軽く添えて
「起きよ」とだけ
仰せになる

[Pre-Chorus]
逆らうことなど
許されるはずもなく
五時の鐘より
早く起き上がる

[Chorus]
陛下の朝に
かしずいて
まぶたも開かぬまま
御前へと進む
これが我らの
定めた契り
爪の詔(みことのり)に
今日も従う

[Verse 2]
台所へと
裸足のまま急ぎ
缶を開ける音に
足音が近づく

御膳(ごぜん)を捧げ
恭しく(うやうやしく)差し出す
一瞥もくれず
食し始められる

[Pre-Chorus]
感謝の言葉など
求めてはいけない
それでも尽くすのが
我らの役目

[Chorus]
陛下の朝に
かしずいて
空いた器だけが
証となる
これが我らの
定めた契り
爪の詔(みことのり)に
今日も従う

[Bridge]
[Spoken]
ふと
見上げれば
もう
興味なさげに
毛づくろい

[Final Chorus]
陛下の朝に
かしずいて
明日もまた同じ刻(とき)に
起こされるだろう
これが我らの
永遠の契り
爪の詔(みことのり)に
生涯従う

[Outro]
それでも
なぜだろう
今日も また
この刻(とき)を待っている
```
