# ボーカル・デリバリー用語表(約100語)

作成: 2026-09-20 / 対象: Suno v6

**これは辞書であって、プロンプトのテンプレートではない。**
うちの原則は「**スタイルプロンプトは短ければ短いほど良い。1000文字は上限であって目標ではない**」。
**1セクションに足すのは1〜2語まで。** 表の語を並べると必ず破綻する。

## 使う前に読む3行

1. **同時に組み合わせる ≠ 曲中で切り替える。** `Whispered`と`Explosive Belt`は
   同時指定なら衝突、`Whispered Verse → Explosive Belt Chorus`なら自然。
2. **スタイル欄に書く語は曲全体にかかる。** 温度を決める語(強い側も弱い側も)を
   スタイル欄に置くなら**必ず場所を限定する**(`Breathy Line Endings In The Verses`)。
   場所を書かない温度語は、曲で一番温度の違うセクションを殺す
   (`songs/24-ten-no-ginshi.md`の叫ばなかった事故)。
3. **セクション単位のデリバリーはブラケットに置く。** デリバリーは
   「モデルが確実に従う階層」。ただし**短い定型の語**にすること
   (`[Dry Harsh Shouting Voice, Desperate]`のような説明文は効きにくい)。

## 実証レベルの凡例

| | 意味 |
|---|---|
| **A** | **うちの`songs/``reference/`でボーカル用途の実使用あり**(括弧内は実測ヒット数)。最優先で使う |
| **B** | **Suno公式グロッサリー記載**(`help.suno.com/en/articles/9010177`)。**ただし当該ドメインは読めなかった**ため検索経由の二次情報 |
| **C** | **一般的な音楽用語だが、うちでもSuno公式確認でも裏が取れていない。** 使うなら「未検証だが試すか」と確認を取ってから |

**Bは「Sunoが理解する語彙」であって「効くと実証された」ではない。** AとBを同列に扱わない。

---

## 1. 音をつなぐ・切る

| 語 | 意味 | 聴こえ方 | 併用しやすい | 衝突しやすい | 書き方 | 実証 |
|---|---|---|---|---|---|---|
| Legato | 音と音を滑らかにつなぐ | 途切れない、流れる | Crooning, Vibrato, Sustained | Staccato, Rhythmic Delivery | スタイル欄。場所を限定 | B |
| Staccato | 音を短く切る | 歯切れ、粒が立つ | Sharp Consonant, Rhythmic | Legato, Sustained | ブラケット | B |
| Portamento | 音程間を滑らせる | ぬるっと移る | Legato, Vibrato | Staccato | スタイル欄 | C |
| Glissando | 音程を連続で滑らせる | 大きく滑り落ちる/上がる | Falsetto, Vocal Run | Straight Tone | ブラケット | C |
| Detached | 音を一つずつ独立させる | 平板、事務的 | Monotone, Spoken | Legato, Melisma | `Detached Monotone Verses` | **A(1)** |
| Marcato | 一音ずつ強く際立たせる | 押し出しが強い | Accent, Powerful | Breathy, Gentle | ブラケット | C |
| Slurred | 語をつなげて崩す | 酔ったような曖昧さ | Conversational, Husky | Clear Articulation | ブラケット | C |
| Sustained | 音を長く保つ | 伸びる、空間が出る | Legato, Vibrato, Head Voice | Staccato, Rhythmic | `Long Sustained Tones` | **A(3)** |
| Held Note | 一音を持続 | 一点で止まる | Sustained, Crescendo | Vocal Run | `Wavering Held Notes` | **A(1)** |
| Clipped | 語尾を切り落とす | そっけない、冷たい | Detached, Spoken | Drawn-out Vowel | ブラケット | C |

## 2. 音程をどう動かすか

| 語 | 意味 | 聴こえ方 | 併用しやすい | 衝突しやすい | 書き方 | 実証 |
|---|---|---|---|---|---|---|
| Vibrato | 音程を周期的に揺らす | 温かみ、伸びの表情 | Sustained, Belt, Legato | Straight Tone | 量の語とセット推奨 | **A(7)** |
| Minimal Vibrato | 揺れを強く抑える | 素朴、澄んだ直線 | Breathy, Intimate, Close-Mic | Melisma, Vocal Run | 清宮栞の固定に採用済み | **A(6)** |
| Straight Tone | ビブラートをかなり抑えた声 | 硬質、少年的 | Detached, Clean | Vibrato, Melisma | スタイル欄 | C |
| Wide Vibrato | 揺れ幅が大きい | 演歌/オペラ寄り | Belt, Powerful | Intimate, Whispered | スタイル欄 | C |
| Light Vibrato | 揺れが浅い | 上品、控えめ | Crooning, Gentle | Wide Vibrato | スタイル欄 | C |
| Melisma | 1音節に複数の音程 | R&B/ゴスペル的な装飾 | Vocal Run, Belt, Head Voice | Detached, Spoken, Rap | ブラケット | B |
| Vocal Run | 短い音程の高速連続 | 技巧が前に出る | Melisma, Falsetto | Spoken, Minimal Vibrato | `Smooth Vocal Runs` | **A(1)** |
| Riff (vocal) | 即興的な短い装飾フレーズ | 崩して歌う | Melisma, Ad-lib | Straight Tone | **うちでは全部ギター用。混同注意** | C |
| Pitch Bend | 音程を意図的に上下 | たわむ、崩れる | Blue Note, Gritty | Clean, Straight Tone | **うちの実績はサックス。声では未使用** | C |
| Scooping | 下から音程に入る | 甘え、粘り | Crooning, Husky | Clear Articulation | ブラケット | C |
| Fall-off | 音の終わりを下へ落とす | 投げやり、余韻 | Conversational, Breathy | Crescendo | ブラケット | C |
| Doit | 音の終わりを上へ跳ね上げる | 軽い煽り | Playful, Teasing | Mournful | ブラケット | C |
| Blue Note | 半音下げの崩し | ブルース/ジャズ感 | Husky, Smoky | Clean, Bright | スタイル欄 | C |
| Slight Human Pitch Wave | 微細な人間的揺らぎ | 補正されていない生々しさ | Natural Vocal Grain, Audible Breath | Autotune系 | YuRa質感更新で採用済み | **A(1)** |

## 3. 強さをどう変化させるか

| 語 | 意味 | 聴こえ方 | 併用しやすい | 衝突しやすい | 書き方 | 実証 |
|---|---|---|---|---|---|---|
| Powerful | 聴感上の強さ | 押し出しが強い | Belt, Front And Center | Whispered, Breathy | **YuRa固定トリオの語** | **A(47)** |
| Soft | 弱く柔らかい | 近い、優しい | Intimate, Breathy, Close-Mic | Explosive, Belt | 場所を限定 | **A(15)** |
| Gentle | 穏やか | 角が立たない | Unhurried, Warm | Forceful, Gritty | 場所を限定 | **A(16)** |
| Explosive | 爆発的 | 一気に開く | Maximum Energy, Belt | Restrained, Breathy | サビ/Final限定 | **A(8)** |
| Forceful | 押しが強い | 力任せ寄り | Marcato, Shouted | Crooning, Intimate | ブラケット | C |
| Moderate | 中庸 | 目立たない | — | — | **情報量が薄い。使う価値が低い** | C |
| Crescendo | 徐々に強く | 盛り上がる | Building Intensity | Flat Dynamics | ブラケット | B |
| Diminuendo / Decrescendo | 徐々に弱く | 引いていく | Fall-off, Outro | Crescendo | ブラケット | B |
| Building Intensity | 段階的に上げる | Pre-Chorus的 | Energy Lift, Crescendo | Flat Dynamics | ブラケット実績あり | **A(2)** |
| Energy Lift | 一段上げる | 持ち上がる | Building Intensity | Restrained | ブラケット実績あり | **A(4)** |
| Maximum Energy | 全開 | 曲の頂点 | Explosive, Final Shout | Intimate, Hushed | **リポジトリ最多の叫び系タグ** | **A(5)** |
| Final Shout | 最後の一声 | 締めの叫び | Maximum Energy | Gentle Outro | ブラケット実績あり | **A(3)** |
| Accent | 特定の語を強調 | 一点が立つ | Sharp Consonant, Marcato | Legato | ブラケット | B |
| Sforzando | 一瞬だけ強く | 突き刺す | Accent, Staccato | Legato, Sustained | ブラケット | C |
| Dynamic Contrast | 緩急そのものを指定 | 起伏が付く | セクション別演出全般 | Flat Dynamics | スタイル欄の設計図として | **A(3)** |

## 4. 声区(レジスター)

| 語 | 意味 | 聴こえ方 | 併用しやすい | 衝突しやすい | 書き方 | 実証 |
|---|---|---|---|---|---|---|
| Belt | 高音域を胸声で力強く持続 | 張り上げて伸びる | Powerful, Chorus, Maximum Energy | Whispered, Breathy, Falsetto | **`Powerful`とは別物。併用可** | **A(9)** |
| Belted Delivery | ベルト発声での歌唱 | 同上 | Powerful, Dry Vocal | Intimate | 実使用あり | **A(3)** |
| Chest Voice | 胸声 | 太い、地声感 | Powerful, Belt | Falsetto, Whistle | スタイル欄 | C |
| Head Voice | 頭声 | 軽く高い、透明 | Sustained, Legato | Growl, Gritty | スタイル欄 | C |
| Mixed Voice | 胸声と頭声の中間 | 無理のない高音 | Belt, Melisma | — | スタイル欄 | C |
| Falsetto | 通常音域の上の軽い裏声 | 息が多く儚い | Breathy, Airy, Intimate | Belt, Growl, Powerful | スタイル欄/ブラケット | B |
| Whistle Register | 最高音域の笛声 | 超高域の細い音 | — | ほぼ全部 | **うちのキャラに合う場面が無い** | C |
| Vocal Fry | 最低域のきしみ | ざらつく低い軋み | Raspy, Smoky, Spoken | Clean, Head Voice | スタイル欄 | C |
| Full Voice | 出し切る | 解放感 | Belt, Explosive | Half Voice, Hushed | ブラケット | C |
| Half Voice | 抑えて出す | 内緒話に近い | Intimate, Close-Mic | Full Voice | ブラケット | C |

## 5. 声をどう出すか(質感)

| 語 | 意味 | 聴こえ方 | 併用しやすい | 衝突しやすい | 書き方 | 実証 |
|---|---|---|---|---|---|---|
| Breathy | 息を多く含ませる | 近く、柔らかい | Intimate, Close-Mic, Soft | Belt, Powerful, Explosive | **場所を限定しないと叫びを殺す** | **A(12)** |
| Airy | 軽く空気感がある | 薄く広い | Falsetto, Head Voice | Gritty, Growl | **うちの実績はミックス用途。声では未使用** | C |
| Clean | 濁りが少ない | 澄んで明瞭 | Front And Center, Clear Articulation | Gritty, Raspy, Growl | 実使用あり | **A(17)** |
| Gritty | ざらつきを含む | 砂っぽい | Raspy, Growl, Strained | Clean, Gentle | 実使用あり | **A(2)** |
| Raspy | しゃがれ感 | 擦れた芯 | Husky, Smoky, Growl | Clean, Airy | **四道壮琉の固定** | **A(4)** |
| Husky | ハスキー | 低く掠れる | Raspy, Smoky, Alto | Bright, Falsetto | 壮琉・栞で使用 | **A(3)** |
| Smoky | 煙ったような暗い色 | 夜、退廃 | Husky, Dark Timbre | Bright, Playful | 壮琉の固定 | **A(3)** |
| Growl | 喉を使った歪んだ発声 | 唸る、がなる | Raspy, Aggressive | Clean, Crooning, Gentle | **`Screaming`/`Death Growl`より適切** | **A(7)** |
| Voice Cracking | 声が端で割れる | 限界の生々しさ | Growl, Desperate | Clean, Controlled | 壮琉の固定 | **A(4)** |
| Whispered | ささやく | 音程が薄い | Intimate, Close-Mic, Hushed | Belt, Powerful, Explosive | **確実に効く階層** | **A(8)** |
| Murmured | 呟く | 独り言に近い | Unhurried, Soft | Shouted, Belt | `songs/18-setsuya.md`で採用 | **A(2)** |
| Hushed | 声をひそめる | 抑えた緊張 | Intimate, Close-Mic | Maximum Energy | ブラケット実績あり | **A(2)** |
| Spoken | 話すように | 旋律が消える | Conversational, Natural Pauses | Melisma, Belt | **確実に効く階層** | **A(42)** |
| Spoken Word | 語りとして扱う | 完全に喋り | Natural Pauses, Clear Articulation | Chorus系ラベル | **確実に効く階層** | **A(9)** |
| Shouted | 張り上げる | 叫ぶ | Maximum Energy, Explosive | Breathy, Crooning | **`Ganari-Style Shouted Delivery`は不採用にした前例あり。単語で使う** | C |
| Screamed | スクリーム | 絶叫 | Metal系 | Clean Male Vocals | **うちでは`Avoid Screamed Climax`と除外側でのみ使用** | C |
| Crooning | 柔らかく親密に歌う | 古典的な甘さ | Intimate, Legato, Warm | Growl, Shouted | スタイル欄 | B |
| Nasal | 鼻にかかる | 独特の癖 | 特定年代の再現 | Clean, Warm | スタイル欄 | C |
| Warm | 温かい音色 | 中低域が豊か | Mid-Range, Gentle | Cold, Bright | 実使用あり | **A(10)** |
| Bright | 明るい音色 | 高域が立つ | Playful, Clean | Dark, Smoky | 実使用あり | **A(7)** |
| Dark | 暗い音色 | 沈む | Smoky, Husky | Bright, Playful | 実使用あり | **A(10)** |
| Natural Vocal Grain | 補正しない粒立ち | 生々しさ | Audible Breath, Pitch Wave | Autotune系 | **YuRa/栞/壮琉の共通語** | **A** |

## 6. 言葉をどう歌うか

| 語 | 意味 | 聴こえ方 | 併用しやすい | 衝突しやすい | 書き方 | 実証 |
|---|---|---|---|---|---|---|
| Clear Articulation | 歌詞を明瞭に発音 | 輪郭が立つ | Sharp Consonant, Spoken | Slurred, Melisma | スタイル欄 | C |
| Sharp Consonant Articulation | 子音を鋭く立てる | 刻みが効く | Rap, Spoken Word | Breathy, Legato | `songs/05-told-you-so.md` | **A(1)** |
| Emphasized Consonants | 子音を強調 | 同上 | Rhythmic Delivery | Drawn-out Vowel | スタイル欄 | C |
| Drawn-out Vowels | 母音を伸ばす | 引き伸ばす | Sustained, Legato | Staccato, Rap | ブラケット | C |
| Conversational | 会話のように | 自然な喋り | Spoken, Natural Pauses | Melisma, Belt | `Conversational Rhythm, Not Sing-Song` | **A(4)** |
| Rhythmic Delivery | リズムを強く意識 | 拍に乗る | Rap, Syncopated | Legato, Rubato | `[Confident, rhythmic delivery]` | **A(1)** |
| Speech-like | 話し声に近い | 歌と喋りの中間 | Spoken, Murmured | Chorus系ラベル | スタイル欄 | C |
| Syncopated Delivery | 拍の裏に言葉を置く | 跳ねる | Rap, Groove | Straight, Marcato | **うちの実績は楽器側。声では未使用** | C |
| Behind The Beat | 少し後ろに置く | 余裕、粘り | Husky, Smoky, Soul | Ahead Of The Beat | スタイル欄 | C |
| Ahead Of The Beat | 少し前のめり | 焦り、疾走 | Desperate, Fast Flow | Behind The Beat | スタイル欄 | C |
| Rap | ラップ | 旋律より輪郭 | Sharp Consonant, Flow | Melisma, Belt | ジャンル語として実使用 | **A(11)** |
| Rapping | 韻律的な語り/詠唱 | 同上 | 同上 | 同上 | 公式定義はこちら | B |
| Chanted | 詠唱 | 反復的で儀式的 | Ritual系, Unison | Conversational | ブラケット | C |
| Scat | 無意味音節での即興 | ジャズ的 | Jazz, Vocal Run | Clear Articulation | **うちの3件は`Scattered`の誤検出。実使用ゼロ** | B |
| Ad-lib | 合いの手・即興 | 隙間を埋める | Call And Response | Minimal | 実使用あり | **A(2)** |
| Harmonization | 複数声部が別の音を歌う | 厚みが出る | Layered, Choir | Solo, Front And Center | 公式用語 | B |
| Layered Harmonies | 重ねたハーモニー | 広がる | Choruses, Soaring | Intimate, Close-Mic | reference内に実使用 | **A(1)** |
| Unison | 全員が同じ音 | 一枚の塊 | Choir, Massed Voices | Harmonization | `songs/09-goji-no-haietsu.md` | **A(2)** |
| Call And Response | 掛け合い | 呼びかけと応答 | Ad-lib, Audience | Solo | **声部は標準語彙で書く(Audience/Crowd)** | **A(2)** |

## 7. 感情・演技の指定

| 語 | 意味 | 聴こえ方 | 併用しやすい | 衝突しやすい | 書き方 | 実証 |
|---|---|---|---|---|---|---|
| Intimate | 親密 | 耳元 | Close-Mic, Breathy, Soft | Maximum Energy, Belt | 実使用最多級 | **A(27)** |
| Close Vocal / Close-Mic | 近接マイク | 距離が近い | Intimate, Breathy | Vast Reverb, Distant | 実使用あり | **A(7/13)** |
| Restrained | 抑制された | 出し切らない | Controlled, Verses | Explosive, Maximum Energy | **場所を限定しないと事故る** | **A(6)** |
| Controlled | 制御された | 崩れない | Restrained, Clean | Desperate, Cracking | 実使用あり | **A(8)** |
| Desperate | 切羽詰まった | 余裕がない | Cracking, Shouted, Fast | Controlled, Unhurried | 実使用あり | **A(5)** |
| Defiant | 反抗的 | 突っ張る | Powerful, Belt | Gentle, Tender | 実使用あり | **A(3)** |
| Playful | 遊び心 | 軽く跳ねる | Teasing, Bright | Mournful, Dark | **一ノ瀬柚葉の基本線** | **A(8)** |
| Teasing | 煽る、からかう | あざとい | Playful, Azato-Cute | Solemn | **一ノ瀬柚葉の基本線** | **A(6)** |
| Unhurried | 急がない | 間が広い | Relaxed, Murmured | Fast Flow, Desperate | **清宮栞の固定** | **A(10)** |
| Relaxed | 力を抜いた | ゆるい | Unhurried, Soft | Maximum Energy | **場所を限定しないと事故る** | **A(9)** |
| Tender | 優しい | 慈しむ | Warm, Gentle | Defiant, Growl | 未使用 | C |
| Mournful | 悲嘆 | 沈んで重い | Dark, Slow | Playful, Bright | 未使用 | C |
| Vulnerable | 傷つきやすい | 脆さが出る | Breathy, Intimate, Bridge | Powerful, Defiant | 未使用 | C |
| Aggressive Yet Controlled | 攻撃的だが制御されている | 暴れるが崩れない | Growl, Raspy | Gentle | **四道壮琉の固定** | **A** |

---

## 衝突の早見表(これだけは覚える)

**同時に置くと潰し合う組み合わせ**

| 片方 | もう片方 | なぜ |
|---|---|---|
| Whispered / Breathy / Murmured | Belt / Explosive / Maximum Energy | 息を混ぜる指示と張り上げる指示が正面衝突 |
| Relaxed / Restrained / Gentle / Soft | Maximum Energy / Final Shout | **`songs/24`で実際に叫びが死んだ組み合わせ** |
| Legato / Sustained | Staccato / Rhythmic Delivery | つなぐ指示と切る指示 |
| Straight Tone / Minimal Vibrato | Wide Vibrato / Melisma / Vocal Run | 揺らすなと装飾しろの衝突 |
| Clean | Gritty / Raspy / Growl / Vocal Fry | 濁らせるなと濁らせろ |
| Falsetto / Head Voice | Belt / Growl / Chest Voice | 声区が逆 |
| Clear Articulation | Slurred / Melisma | 輪郭を立てると崩せない |
| Front And Center / Close-Mic | Vast Reverb / Distant | 距離が逆 |

**同じ曲の中で切り替えるなら全部自然。** 衝突するのは「同時に最大化」した時だけ。

## セクション別の設計例(YuRa)

**土台(固定・触らない)**
```
Powerful Female Vocal, Front And Center Vocal, Strong Vocal Presence
```

**セクション別(ブラケット側で切り替える)**

| セクション | デリバリー | 実証 |
|---|---|---|
| Verse | `[Controlled]` / `[Conversational]` / `[Restrained]` | A |
| Pre-Chorus | `[Building Intensity]` / `[Energy Lift]` | A |
| Chorus | `[Powerful Belt]` / `[Belted Delivery]` | A |
| Bridge | `[Intimate]` / `[Close Vocal]` | A |
| Final Chorus | `[Maximum Energy]` / `[Final Shout]` | A |

**`Belt`は`Powerful`と二重指定にならない。** `Powerful`=聴感上の強さ、
`Belt`=胸声での高音持続という発声技法で、公式定義上も別物。
**`Chest-Dominant`のような声区指定を土台に足すのは別の話**(声質側の指定であり、
`Powerful Female Vocal`と役割が重なる可能性がある)。今回は**採用していない**。

## 出典と、確認できなかったこと

- **A欄はこのリポジトリを直接grepした実測値。** ボーカル文脈の行に限定して数えた。
  `Scat`(実体は`Scattered Audience Laughter`)、`Syncopated`(楽器)、
  `Pitch Bend`(サックス)、`Riff`(ギター)、`Doubled`(ギター)、
  `Strained`(`Restrained`の部分一致)は**誤検出として除外済み**。
- **B欄の根拠**: [Music Glossary for Suno](https://help.suno.com/en/articles/9010177)。
  **⚠️ このドメインはセッションのegressポリシーでブロックされており、一次情報を直接読めていない。**
  `usesuno.com` `hookgenius.app` `acetaggen.com`も同様にブロック。
  検索結果経由の二次情報なので、**次に読める環境があれば原文で確認すること。**
- **v6について**: 公式表現として確認できたのは
  "faster, more expressive, and higher quality, with a better grasp of the
  language and building blocks musicians use"(2026-09-09発表)。
  「versatile」「stronger control and precision」という文言は確認できなかった。
- 関連する既存記録は`CLAUDE.md`の
  「Sunoのタグの効き方(実証された内容)」「抑制語を曲全体にかけると、1箇所の爆発が死ぬ」
  「Sunoでの声部の指定は標準語彙を使う」を参照。
