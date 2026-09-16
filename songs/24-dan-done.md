# 断(だん)、done(タイトル仮)

ボーカル: YuRa(**SunoのVoice機能でYuRaを選択する前提**)
ジャンル: Glitch Pop Rock / Digital Alternative Rock(152Bpm)
テーマ: 壊れた機材を直さずそのまま鳴らす。破綻を音色として肯定する

**この曲は2026-09-16に明文化された【曲を考える時のルール】6項目に準拠した最初の曲。**

---

## 制作の軸(ユーザーとの4回の確認で確定)

1. **方向性**: ノイズ・破綻を音色にするダーク系(YuRaに前例なし)
2. **軸は物語ではなく韻とフロー**。破綻にまつわる言葉・近しい言葉・対比語の語感で作る
3. **フックは日本語と英語の発音が近い語でダブル韻を踏む** → `断(だん)、done、それで完全`
4. **日英ペアはフック周辺だけ。Verseはカタカナで回す**
5. Voice機能を使うので、声の特性フレーズ(`Powerful Female Vocal`)は削除

---

## 韻の設計(検討用・Sunoには貼らない)

### フック — 日英ダブル韻 + 対比語
```
断(ダン) = a-n     破綻側
done(ダン) = a-n   破綻側(英語)
完全(カンゼン) = a-n-e-n  対比側
```
**a-nを三連打してから対比語の完全(カンゼン)に落とす。** 同じ音を畳みかけて歌詞自体を
打楽器のように機能させる技法(CLAUDE.md記載)を、日英またぎで実装したもの。
「断」と「done」は字面も意味も無関係だが音だけが一致する = **実在の語の"音"だけを借りて
意味を差し替える技法**(猫里るーじゅさんの曲から抽出済み)の英語版。

### Verse — カタカナ脚韻、Verseごとに母音を変える
| | 脚韻 | 母音 |
|---|---|---|
| Verse 1 | グリッチ / スイッチ / ピッチ | u-i-i |
| Verse 2 | ミュート / ルート / ブート | u-u-o |
| Verse 3 | クラッシュ / フラッシュ / ラッシュ | u-a-u |

厳密な母音一致より語感のリズムで踏む、`songs/05-told-you-so.md`で実証済みの
「カタカナ英語(外来語)での脚韻」路線。

### 洗い出した語彙(母音が完全一致したものだけ)
**漢語二字**
- a-n-e-n … 断片・断線 ↔ **完全**
- i-n-o-u … 沈黙 ↔ **均衡**
- o-u-a-i … 崩壊・溶解
- a-a-i / e-a-i … 瓦解 / 決壊

→ 破綻側2語と対比側1語が同韻になる **断片／断線／完全** が最も強く、ここからフックを作った。

**和語(採用分)**
- 破綻側: 抜けかけ・飛ぶ・裂ける・軋む・潰す・焦げる・割れる
- 対比側: 完全(フックのみ)

---

## 構成(スケルトン)

```
[Chorus]        ← 冒頭から。前置きなし
[Verse 1]
[Chorus]
[Verse 2]
[Breakdown]
[Verse 3]
[Final Chorus]  ← Hard Stop で断ち切る
```

**`songs/`全曲のセクション並びを抽出して照合済み(ルール4)。**
Intro・Outro・Bridge・Pre-Chorusの4つが全部無い曲は既存に1つもない
(22「息吹」は語りのみの別物)。Verse3本・サビ3本という配分も既存になし。

- 01 / 03: Intro→V→PreC→Chorus→V→PreC→Chorus→間奏→Bridge→FinalChorus→Outro
- 10: Chorus1(冒頭)→V→PreC→PostChorus→V→PreC→Chorus3→Bridge→VocalBreak→FinalChorus→Outro
- 21: ColdOpenChorus→V→PreC→Chorus→V→InstBreak→Bridge→FinalChorus→Outro
- 23: Intro→V1→V2→V3→Chorus→InstBreak→V4→Chorus→Outro
- 04 / 05 / 06: ブラケット一切なし

**終わり方そのものを題材に一致させた**: Outroを置かずFinal Chorusで`Decisive Ending`。
曲の終わりが断線になる。

---

## 文字数(ルール2・3の検証)

**Verse — 3本とも 16 / 16 / 11 / 14 モーラで完全一致**

| | L1 | L2 | L3 | L4 |
|---|---|---|---|---|
| Verse 1 | 16 | 16 | 11 | 14 |
| Verse 2 | 16 | 16 | 11 | 14 |
| Verse 3 | 16 | 16 | 11 | 14 |

**Chorus — 3本とも 13 / 13 / 14 / フック(11) で完全一致**

| | L1 | L2 | L3 | L4 |
|---|---|---|---|---|
| Chorus 1 | 13 | 13 | 14 | 11(固定) |
| Chorus 2 | 13 | 13 | 14 | 11(固定) |
| Final Chorus | 13 | 13 | 14 | 11(固定) |

**サビ3本で重複している単語はフック1行のみ(ルール3)。**
- Chorus 1: ジャック・抜けかけた・鳴らす・直せ・言う・声・潰した・メーター・振り切って・笑ってる
- Chorus 2: ケーブル・踏まれて・音・飛ぶ・拾う・やつ・どこにも・いない・針・赤・食い込んで・唸る
- Final Chorus: スピーカー・裂けても・止めない・逃げ道・鍵・捨ててきた・床・震えて・板・軋む

壊れる機材が **ジャック → ケーブル → スピーカー** と段階的に大きくなることで、
サビが3回出ても話が前に進む(「繰り返しのサビはフック以外書き換える」の実践)。

---

## スタイルプロンプト

```
Front And Center Vocal, Strong Vocal Presence,
Rapid Rap Flow, Sharp Consonant Articulation,

Glitch Pop Rock, Digital Alternative Rock,
152 Bpm,

Punchy Live Drums, Heavy Distorted Sub Bass,
Broken Digital Texture,
Minimal Synth Texture, Slightly Out Of Tune As The Song Progresses,

Explosive Chorus,
Percussion Drops Out In The Breakdown Then Returns Abruptly,

Decisive Ending, No Fade Out
```

### 各行の根拠(ルール5)

| 記述 | 根拠 |
|---|---|
| `Front And Center Vocal, Strong Vocal Presence` | YuRaの固定トリオ。Voice機能使用時に**残す**側(2026-09-12訂正) |
| `Rapid Rap Flow` | `songs/11-000000-bug.md` |
| `Sharp Consonant Articulation` | `songs/05-told-you-so.md` |
| `Glitch Pop Rock` `Digital Alternative Rock` `Broken Digital Texture` `Punchy Live Drums` `Minimal Synth Texture` | `reference/suno-samples.md` 5曲目「消えない名前」(**YuRaの固定トリオで使用**) |
| `Heavy Distorted Sub Bass` | `songs/11-000000-bug.md` |
| `Explosive Chorus` | `songs/11-000000-bug.md` |
| `Percussion Drops Out In The Breakdown Then Returns Abruptly` | `reference/suno-samples.md` 11曲目「自壊」 |
| `Decisive Ending, No Fade Out` | `songs/11-000000-bug.md` |
| `NNN Bpm` の書式 | 全曲で使用 |

**`Minimal Synth Texture, Slightly Out Of Tune As The Song Progresses` だけは応用。**
「自壊」の`Music Box Slightly Out Of Tune As Song Progresses`(曲が進むほど音律が狂う)
という**実証済みの構文の楽器名だけを差し替えたもの**で、構文そのものは実績がある。
ただし楽器が違う以上、同じように効くかは未検証。ギター全体ではなくシンセ1層に限定して
リスクを抑えている(全体を狂わせると単に破綻するため)。

**152Bpmは新規の数値。**「消えない名前」は164、`songs/11`は160、`songs/05`は106。
語感を聴かせたい曲なので、速すぎて言葉が潰れない範囲に落とした。

---

## 歌詞(Suno貼り付け用)

```
[Chorus]
ジャック抜けかけたまま鳴らす
直せと言う声を潰した
メーター振り切って笑ってる
断(だん)、done、それで完全

[Verse 1]
配線の奥で揺れてるグリッチ
指先ひとつで落とせるスイッチ
触らない 触らせない
歪んだままで上げてくピッチ

[Chorus]
ケーブル踏まれて音が飛ぶ
拾うやつはどこにもいない
針が赤に食い込んで唸る
断(だん)、done、それで完全

[Verse 2]
客席の前で黙らせるミュート
手放してしまった帰りのルート
止めに来る奴はいない
焦げたままで立ち上がるブート

[Breakdown]
[Whispered]
断(だん)、done、それで——

[Verse 3]
割れた音ごと持っていくクラッシュ
目を焼きに来る真っ白なフラッシュ
瞬きひとつもしない
押し寄せてくる最後のラッシュ

[Final Chorus]
[Belting]
スピーカー裂けても止めない
逃げ道の鍵は捨ててきた
床まで震えて板が軋む
断(だん)、done、それで完全
```

---

## ブラケットについて

構造タグ + デリバリータグのみ。演出の説明文は置いていない。

| ブラケット | 根拠 |
|---|---|
| `[Chorus]` `[Verse 1〜3]` `[Final Chorus]` | Suno公式ドキュメント記載の構造タグ。全曲で使用 |
| `[Breakdown]` | `reference/suno-samples.md` 11曲目「自壊」で使用 |
| `[Whispered]` | 「確実に効く区分＝歌い方(デリバリー)」として外部ソースで確認済み。「消えない名前」でも`[Whispered Female Vocal]`として使用 |
| `[Belting]` | 同上。確実に効くデリバリー区分 |

**スタイルプロンプトとの照合(全セクション、毎回必須)**
- `[Breakdown]` ↔ `Percussion Drops Out In The Breakdown Then Returns Abruptly` — 一致
- `[Breakdown]` の `[Whispered]` ↔ 打楽器が抜けている箇所なので囁きと矛盾しない
- `[Final Chorus]` の `[Belting]` ↔ `Explosive Chorus` / `Strong Vocal Presence` と同方向、矛盾なし
- `[Final Chorus]` が曲の最後 ↔ `Decisive Ending, No Fade Out` — Outroが無いのでここで断ち切る
- `[Verse 1〜3]` の速いカタカナ踏み ↔ `Rapid Rap Flow, Sharp Consonant Articulation` — 一致
- サビは歌で伸ばす ↔ `Explosive Chorus`(`songs/11`でも`Rapid Rap Flow`と`Explosive Chorus`は併用実績あり)

---

## 仕掛けの解説

- **Breakdownでフックが途中で切れる。** `断(だん)、done、それで——` で止まり、
  Verse 3を挟んでFinal Chorusで初めて`完全`まで到達する。
  **フックそのものを断線させることで、題材を構成で表現している。**
  「サビの同じ設問をFinal Chorusで初めて答えに変える」(問い→答えの構造)の変種。
- **`〜まま`が3回出てくる(抜けかけたまま / 歪んだままで / 焦げたままで)。**
  これは意図的。「直さずにそのまま鳴らす」がこの曲の主張そのもので、
  同じ語を畳みかけて芯にしている。不要ならVerse側を削れる。
- **場面は1つに統一している**(ステージと機材)。ジャック・ケーブル・メーター・針・
  スピーカー・客席・配線・基盤と、すべて同じ場所で自然に共存する物だけを選んだ
  (「具体的なディテールは1つの場面にまとめる」の実践)。

## 判断が分かれうる点(正直に記録)

- **サビのL1の語尾だけ揃っていない**(鳴らす / 飛ぶ / 止めない)。
  L3は3本とも動詞終止形のウ段(笑ってる / 唸る / 軋む)で揃えてあるが、
  Final ChorusのL1は「止まらぬ」にすれば揃う一方、**自動詞になって
  「自分で止めない」という意味が消える**ため、意味を優先して揃えなかった。
- **`done`の発音はSuno任せ。** 日本語詞に単独で置いた英単語なので英語発音(/dʌn/＝ダン)
  される見込みだが保証はない。**ダブル韻が成立しているかは生成して確認する必要がある。**
- **`断(だん)`は単独の語としては通常の日本語ではない。** 音を優先した造語的な表記で、
  打楽器的な掛け声として置いている。
