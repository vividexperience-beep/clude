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

### 第1ラウンドの生成結果を受けた修正(2026-09-19)

ユーザーからのフィードバック3点に対応した。

**1. 読みが間違う → 言い立ては全部かな、マクラは漢字＋ルビ**

読みは[みんなの知識](https://www.benricho.org/kotoba_lesson/yoko_jyugemu-hurigana.html) /
[ふじみ野市立小のPDF](https://www.fujimino.ed.jp/koma/aboutus/doc/zyugemu.pdf)で確認:
`じゅげむじゅげむ/ごこうのすりきれ/かいじゃりすいぎょのすいぎょうまつ/うんらいまつ/
ふうらいまつ/くうねるところにすむところ/やぶらこうじのぶらこうじ/ちょうきゅうめいのちょうすけ`

**言い立てだけルビを使わず全部かなにしたのは意図的。** 理由が3つある。
- CLAUDE.md記録:「**意味の正確さより、音として読みやすい日本語を優先した方が発音が安定する**」
  (日本語発音の記事より)。言い立ては**音しか要らない**ので、この原則が最も強く当てはまる。
- **ルビの括弧`( )`自体が区切りとして読まれる可能性がある。**
  「一息で言わせたい」という要求と真っ向から衝突するので、括弧を1つも置かない形にした。
- 難読語が連続するため、ルビだらけになって可読性も落ちる。

**マクラ側は漢字＋ルビ**(`毎度(まいど)` `一席(いっせき)` `和尚(おしょう)` `寸法(すんぽう)`)。
こちらは**意味が要る**ので漢字を残す。

**2. 観客の笑い声が無関係な箇所に入る → 全版に除外タグを追加、版2から要求を削除**

**予告していたリスクがそのまま出た。** `songs/16-shinkan.md`の
「環境音を形容詞で作るとノイズ化する」教訓の通りで、
**笑い声は実在の楽器名に置き換えられない**ので回避策が無い。

- 版2から`Scattered Audience Laughter Between Lines`を**削除**
- **全版に`No Audience Laughter, No Applause`を追加**
  (`No 〜`の書式はリポジトリで確立、ただしこの語の組み合わせは新規)
- 版2から外していた`No Crowd Vocals`を**復活**(笑いを求めなくなったので矛盾が消えた)
- **注意**: 笑い声が版1・版3でも出ていたなら、原因は`Audience`系の語ではなく
  **`Rakugo` `Comic` `Stand-Up`といったコメディ系のジャンル語**の可能性がある。
  除外タグで消えなければ、そちらを疑う。
- **実務的な結論**: v4.5世代の漫才制作報告でも
  **「笑い声と拍手だけ効果音で後から追加」**という運用だった。
  Sunoに客席を求めず、**後乗せする方が確実**という可能性が高い。

**3. 言い立てが区切られる → 改行もスペースも一切入れず1行にした**

Sunoの歌詞では**改行＝フレーズの切れ目＝息継ぎ**になる。
第1版は11行に割っていたので、切れて当然だった。
**1行・スペースなし・括弧なしの連続文字列**にして、一息で言い切らせる形に変更。
落語家が実際にやっているのもこれ(言い立ては見せ場で一息)。

```
[Spoken Word]
え〜 毎度(まいど)ばかばかしいお笑いを 一席(いっせき)申し上げます

ある男に 子供が生まれまして
名前をどうしたものかと
お寺の和尚(おしょう)さんのところへ 駆け込みます

「和尚(おしょう)さん 名前をつけてやってください」
「うむ めでたい名を いくつか挙げてみよう」

ところがこの父親
どれもこれも 捨てがたい なんてんで
ぜんぶ 付けてしまった

この子の名前が こうでございます

じゅげむじゅげむごこうのすりきれかいじゃりすいぎょのすいぎょうまつうんらいまつふうらいまつくうねるところにすむところやぶらこうじのぶらこうじパイポパイポパイポのシューリンガンシューリンガンのグーリンダイグーリンダイのポンポコピーのポンポコナのちょうきゅうめいのちょうすけ

……と こういう寸法(すんぽう)で
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
No Melody, No Beat, No Singing,
No Crowd Vocals, No Audience Laughter, No Applause
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
Empty Room Tone, Close Mono Microphone, Warm Old Tape,
No Melody, No Beat, No Singing,
No Crowd Vocals, No Audience Laughter, No Applause
```

**版1との違い**: 演者の指定ではなく**場の指定**で攻める。
出囃子・客席・マイク・テープ質感という「録音物としての落語」。

**未検証**: `Yose Theatre` `Debayashi` `Shamisen`(リポジトリに前例ゼロ) /
`Room Tone` `Scattered Audience Laughter` / `Close Mono Microphone` `Warm Old Tape`

**第1ラウンドで客席の笑いを要求したところ、無関係な箇所にも入って邪魔になった**ため、
`Scattered Audience Laughter Between Lines`を削除し、除外タグ側に回した。
**予告していたノイズ化リスクがそのまま出た形。**
客席は**後から効果音で足す**方が確実(v4.5世代の漫才制作報告も同じ運用だった)。

---

## 版3 —「落語」という語を一切使わない

```
Spoken Word Performance, Audiobook Narration, Stand-Up Storytelling,
Solo Male Voice, Natural Conversational Intonation,
Character Voices, Shifting Between Speakers,
Deliberate Pacing, Long Pauses, Dry Close Microphone,
Absolutely No Singing, No Melody, No Pitch, No Beat,
No Crowd Vocals, No Audience Laughter, No Applause,
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
3. **言い立てが一息で通るか** — 1行・スペースなしにしたので、
   どこで勝手に切られるかが分かる。**「パイポパイポ」「ポンポコピー」は反復かつ意味を持たない音**なので、
   寿限無の反復とは**別の壊れ方**をする可能性がある
4. **かな表記で読みが正しくなったか** — マクラのルビ`( )`が悪さをしていないかも同時に見る
5. **「」の1往復で声が変わるか** — 演じ分けができれば漫才の芽も出る
6. **間(ポーズ)が入るか** — 落語は間が命。音楽モデルはグリッドに詰めたがるはず
7. **除外タグで笑い声が消えたか** — 消えなければ原因は`Audience`系の語ではなく
   **`Rakugo` `Comic` `Stand-Up`等のコメディ系ジャンル語**の側にある
8. **長いプロンプトが効いたか** — 「短い方が良い」がv6でも生きているかの観測

---

## 結果(生成後に記入)

### 版1(落語家)

### 版2(寄席ライブ)

### 版3(落語という語を使わない)

### 結論
