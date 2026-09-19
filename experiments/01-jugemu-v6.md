# 検証01: 寿限無 — Suno v6 で落語は成立するか(一発録り)

実施日: 2026-09-19 / 対象: Suno v6(2026-09-09リリース、10日後の検証)

**これは曲ではない。** 【曲を考える時のルール】の2(Verse文字数)・3(サビ文字数)・
4(スケルトン)は適用しない。**ルール5(実証済みのみ)もユーザー判断で意図的に外している**
(「今回は検証なので実績のないプロンプトやブラケットも使っていく」2026-09-19)。

## 方針: 変数分離ではなく一発録り

当初はA/B/C版で1変数ずつ変える設計にしたが、**ユーザー判断で「一発録り」に変更**
(「ファーストテイクを見習って、それぞれのスタイルで、出来うる限り効きそうな指示を使って」)。

- **捨てるもの**: どのタグが効いたかの特定。全部盛りなので原因が分離できない。
- **取りに行くもの**: **v6の天井**。まず実力が見たい。効いた要因の切り分けは次の段階。
- **既存原則との衝突を自覚した上での選択**: CLAUDE.mdの
  「**スタイルプロンプトは短ければ短いほど良い**」と正面から反する。
  ただし**v6は入力トークンが大幅に拡張されており**(v4.5で200→1000)、
  旧世代の「短い方が効く」がそのまま当てはまるとは限らない。
  **長いプロンプトが効くかどうか自体も、今回の観測対象。**

## バージョンの時系列(重要)

| | 時期 |
|---|---|
| v4.5 | 2025年5月 |
| v5.5 | 2026年3月26日 |
| **v6** | **2026年9月9日** |
| この検証 | 2026年9月19日 |

**引用できる検証記事は全てv6以前。** これは追試ではなく**新規の観測**。

## 既知の失敗(v5.5世代)

ロケットニュース24が2026-06-15に『寿限無』をSunoに流し込み、
**「冒頭は語り手っぽかったが、肝心の『寿限無寿限無…』の箇所で予想外の大合唱になった」**
と報告。結論は「現状は微妙、1年後ならAI寄席の未来が見えた」。

**この"反復を盛り上げにくる"性質は、うちも独立に踏んでいる**
(`songs/15-nemuri-mizu.md`: フラットにしたいのにサビを盛り上げようとし、
打ち消しタグを何重にかけても完全には勝てなかった)。

→ **`No Crowd Vocals` はリポジトリで15回使用済み(`No Fade Out`と並ぶ最多の除外タグ)。
報告された失敗(大合唱)を直接撃つ実証済みタグが手元にあった**ので、全版に入れている。

---

## 歌詞(3版共通)

落語の構成は**口上 → マクラ → 噺 → サゲ**、定型句は「えー、毎度ばかばかしい話を一席」
(出典: [日経](https://www.nikkei.com/article/DGXMZO29095650W8A400C1000000/) /
[三分で深まる落語の世界](https://3min-nippon.blog/rakugo-composition/))。

言い立ての全文は
[Wikipedia](https://ja.wikipedia.org/wiki/寿限無) /
[みんなの知識 ちょっと便利帳](https://www.benricho.org/kotoba_lesson/yoko_jyugemu-hurigana.html)
で確認。**`やぶら小路のぶら小路` と `藪ら柑子の藪柑子` の2系統が流通**しており、
検索で一致した前者を採用。古典落語なので著作権は切れている。

**設計の意図**
- **口上とマクラを付けた**。報告では「冒頭は語り手っぽかった」ので、
  **普通の喋りから言い立てに入る瞬間**が同じ生成内にある方が、どこで壊れるか分かる。
- **「」の会話を1往復入れた**。
  「Sunoは`「」`を付けるとセリフ調になる」というユーザー報告があり
  (ネルログ、検索要約のみで本文は未確認)、**歌わせたくない今回は逆に武器になる**。
  ついでに**落語の核心である一人での演じ分け**も同時に測れる。
- **サゲは書いていない。** 寿限無のサゲは複数系統あるので、捏造せず
  `……と こういう寸法で` という落語の定型的な締めで終える。

```
[Spoken Word]
え〜 毎度ばかばかしいお笑いを 一席 申し上げます

ある男に 子供が生まれまして
名前をどうしたものかと
お寺の和尚さんのところへ 駆け込みます

「和尚さん 名前をつけてやってください」
「うむ めでたい名を いくつか挙げてみよう」

ところがこの父親
どれもこれも 捨てがたい なんてんで
ぜんぶ 付けてしまった

この子の名前が こうでございます

寿限無 寿限無
五劫のすり切れ
海砂利水魚の
水行末 雲来末 風来末
食う寝るところに住むところ
やぶら小路のぶら小路
パイポパイポ パイポのシューリンガン
シューリンガンのグーリンダイ
グーリンダイのポンポコピーの
ポンポコナの
長久命の長助

……と こういう寸法で
```

---

## 版1 —「落語家」を真正面から書く

```
Rakugo, 落語, Japanese Rakugo Storyteller, 落語家,
Solo Male Performer Seated On Stage, Telling A Story To A Live Audience,
Spoken Word, Natural Conversational Intonation, Never Sung,
One Performer Voicing Every Character, Voice Shifts Between Characters,
Unhurried Delivery With Deliberate Pauses,
Close Dry Voice, Small Wooden Theatre,
Taiko Opening Only, Silence While He Speaks,
No Melody, No Beat, No Crowd Vocals, No Singing
```

**実証済み**: `Spoken Word`(確実に効くデリバリー区分) / `Taiko`(4回) /
`No Crowd Vocals`(15回) / `No Beat`(清宮栞の章) / `Close`系(`Close Vocal`)

**未検証**: `Rakugo` `落語` `落語家` `Japanese Rakugo Storyteller` /
`Natural Conversational Intonation` / `One Performer Voicing Every Character` /
`Voice Shifts Between Characters` / `Unhurried Delivery With Deliberate Pauses` /
`Small Wooden Theatre` / `Never Sung` `No Melody` `No Singing`

**日本語(`落語` `落語家`)を混ぜているのも実験。** Sunoが日本語のジャンル語を解するかは不明。

---

## 版2 — 寄席のライブ録音として撮る

```
Live Recording From A Small Yose Theatre,
Rakugo Performance, Japanese Comic Storytelling,
Solo Male Storyteller, Spoken Word, Natural Speech Rhythm,
Shamisen And Taiko Debayashi Intro, Fading Out As He Begins,
Room Tone, Scattered Audience Laughter Between Lines,
Close Mono Microphone, Warm Old Tape,
No Melody, No Beat, No Singing
```

**版1との違い**: 演者の指定ではなく**場の指定**で攻める。
出囃子・客席・マイク・テープ質感という「録音物としての落語」。

**未検証**: `Yose Theatre` `Debayashi` `Shamisen`(リポジトリに前例ゼロ) /
`Room Tone` `Scattered Audience Laughter` / `Close Mono Microphone` `Warm Old Tape`

**リスクを明示**: **`Audience Laughter` はノイズ化する恐れがある。**
`songs/16-shinkan.md`で「環境音を形容詞で作るとホワイトノイズになる」教訓を得ており、
**笑い声は実在の楽器名に置き換えられない**ので、この教訓の回避策が使えない。
なお`Audience`という語自体は`[Audience Chant Response]`で3回使用実績がある。

**`No Crowd Vocals`をこの版だけ外している。** 客席の笑いを求めているので矛盾するため。
**その結果として大合唱が戻るなら、それは`No Crowd Vocals`が効いていた証拠**になる。

---

## 版3 —「落語」という語を一切使わない

```
Spoken Word Performance, Audiobook Narration, Stand-Up Storytelling,
Solo Male Voice, Natural Conversational Intonation,
Character Voices, Shifting Between Speakers,
Deliberate Pacing, Long Pauses, Dry Close Microphone,
Absolutely No Singing, No Melody, No Pitch, No Beat, No Crowd Vocals,
Spoken Only From Start To Finish
```

**この版の狙い**: **`Rakugo` がSunoの語彙に存在しない可能性への保険。**
存在しない語はノイズになるだけで、版1・版2を悪化させている可能性すらある。
英語圏の確立した語彙(`Audiobook Narration` `Stand-Up`)の方が、
**モデルの学習データ的には通りやすいはず**(推測)。

**版1・2が駄目で版3が通ったなら、「落語という概念ではなく、"喋り"として指定すべき」
という実用的な結論が出る。**

---

## 見るポイント

1. **「寿限無 寿限無」で歌/合唱になるか** — 本題
2. **どこで壊れるか** — 口上・マクラ・会話・言い立て のどこまで喋れているか
3. **「パイポパイポ」「ポンポコピー」はどうか** —
   **反復かつ意味を持たない音**なので、寿限無の反復とは**別の壊れ方**をする可能性がある
4. **「」の1往復で声が変わるか** — 演じ分けができれば漫才の芽も出る
5. **間(ポーズ)が入るか** — 落語は間が命。音楽モデルはグリッドに詰めたがるはず
6. **版2の笑い声がノイズになっていないか**
7. **長いプロンプトが効いたか** — 「短い方が良い」がv6でも生きているかの観測

---

## 結果(生成後に記入)

### 版1(落語家)

### 版2(寄席ライブ)

### 版3(落語という語を使わない)

### 結論
