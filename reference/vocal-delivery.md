# ボーカル・デリバリー辞典(9系統・約110語)

作成: 2026-09-20 / 改訂: 2026-09-20(9系統に再構成)/ 対象: Suno v6

**これは辞書であって、プロンプトのテンプレートではない。**
うちの原則は「**スタイルプロンプトは短ければ短いほど良い**」。
**1セクションに足すのは1〜2語まで。** 表の語を並べると必ず破綻する。

## この表が分けている2つの軸(混同注意)

1. **「正確な意味」列** — 声楽・音声学として一般に説明される定義。**これはSunoの理解とは無関係**。
   PressedとBreathyの違いは声帯閉鎖の強さの話であって、Sunoがその物理を分かっているという意味ではない。
2. **「実証」列(A/B/C)** — **Sunoで実際に効くか/使われているかの評価**。こちらだけがプロンプトの
   採否を決める。

**「音楽用語として正しい」ことと「Sunoに通りやすい」ことは別物。** 意味の説明は理解の補助として
書くが、**実際にプロンプトへ書く語は実証列で選ぶこと。**

### 実証レベルの凡例

| | 意味 |
|---|---|
| **A** | **うちの`songs/``reference/`でボーカル用途の実使用あり**(括弧内は実測ヒット数)。最優先 |
| **B** | **Suno公式グロッサリー記載**(`help.suno.com/en/articles/9010177`)。**当該ドメインはegressブロックで
  読めず、検索経由の二次情報。** 「Sunoが理解する語彙」であって「効くと実証された」ではない |
| **C** | **一般的な音楽・声楽用語だが、うちでもSuno公式でも裏が取れていない。** 使うなら
  「未検証だが試すか」と確認を取ってから |

## 使う前に読む3行

1. **「同時に組み合わせる」と「曲中で切り替える」は別物。** `Whispered`と`Explosive Belt`は
   同時指定なら衝突、`Whispered Verse → Explosive Belt Chorus`なら自然。
   **衝突表の「衝突しやすい」は同時最大化した場合の話であり、セクションを分ければほぼ全部使える。**
2. **スタイル欄に書く語は曲全体にかかる。** 温度を決める語(強い側も弱い側も)は
   必ず場所を限定する(`Breathy Line Endings In The Verses`)。
   場所を書かない温度語は、曲で一番温度の違うセクションを殺す
   (`songs/24-ten-no-ginshi.md`の叫ばなかった事故)。
3. **セクション単位のデリバリーはブラケットに置く。** デリバリーは
   「モデルが確実に従う階層」。ただし**短い定型の語**にすること。

---

## ① 発声(声帯の使い方・声区)

**声をどの声区・どのメカニズムで出すか。**

| 語 | 正確な意味 | 聴こえ方 | 近い語との違い | 併用しやすい | 衝突(同時最大化時) | 書き方 | 実証 |
|---|---|---|---|---|---|---|---|
| Chest Voice | 胸声。声帯全体が厚く振動する低い声区 | 太い、地声感 | Head Voiceより低く重い | Powerful, Belt | Falsetto, Whistle | スタイル欄 | C |
| Head Voice | 頭声。声帯が薄く伸びた高い声区 | 軽く高い、透明 | Falsettoより息漏れが少なく芯がある | Sustained, Legato | Growl, Gritty | スタイル欄 | C |
| Mixed Voice | 胸声と頭声を混ぜた発声 | 無理のない高音 | Belt(強く保つ)より柔らかい | Belt, Melisma | — | スタイル欄 | C |
| Falsetto | 声帯が完全に閉じきらず振動する高音の裏声 | 息が多く儚い | Head Voiceより芯が薄く息が多い | Breathy, Airy, Intimate | Belt, Growl, Powerful | スタイル欄/ブラケット | B |
| Whistle Register | 声帯の一部だけが振動する最高音域 | 超高域の細い音 | Falsettoより遥かに高く狭い | — | ほぼ全部 | **うちのキャラに合う場面が無い** | C |
| Vocal Fry | 声帯を緩く不規則に振動させる最低音域のきしみ | ざらつく低い軋み | Growlより喉の緊張が少ない | Raspy, Smoky, Spoken | Clean, Head Voice | スタイル欄 | C |
| Belt | 高音域を胸声のメカニズムのまま力強く持続する発声技法 | 張り上げて伸びる | **`Powerful`(聴感の強さ)とは別軸。併用可** | Powerful, Chorus, Maximum Energy | Whispered, Breathy, Falsetto | `[Powerful Belt]` | **A(9)** |
| Belted Delivery | ベルト発声での歌唱全体 | 同上 | 同上 | Powerful, Dry Vocal | Intimate | 実使用あり | **A(3)** |
| Full Voice | 声区・声量を出し切って歌う | 解放感 | Beltより発声技法の指定は無く、単に全開 | Belt, Explosive | Half Voice, Hushed | ブラケット | **A(2)** |
| Half Voice | 出力を抑えて歌う | 内緒話に近い | Breathyより息の量ではなく音量そのものの話 | Intimate, Close-Mic | Full Voice | ブラケット | C |

## ② 声の圧力(息の混ざり方・声帯の閉じ方)

**「大きい/小さい」(Powerful/Soft、③強弱)とは別軸。声門をどれだけ強く閉じているか、
どれだけ息が漏れているかという発声のメカニズムの話。**

| 語 | 正確な意味 | 聴こえ方 | 近い語との違い | 併用しやすい | 衝突(同時最大化時) | 書き方 | 実証 |
|---|---|---|---|---|---|---|---|
| Breathy | 声帯の閉鎖が不完全で息の成分が混ざる発声 | 近く、柔らかい、空気っぽい | **`Soft`(音量が小さい)とは別。Breathyは大声でも成立する** | Intimate, Close-Mic, Soft | Belt, Powerful, Explosive | **場所を限定しないと叫びを殺す** | **A(12)** |
| Pressed (Phonation) | 声帯の閉鎖・接触を強く保つ発声(息漏れが少ない) | 硬く詰まった圧、締まった芯 | Breathyの対極。音量ではなく声門の締まり方 | Powerful, Belt, Aggressive | Breathy, Airy, Falsetto | **未使用。声楽用語としては実在するが、Sunoでの反映は未検証** | C |
| Airy | 息の成分が多く軽い | 薄く広い | Breathyより「近さ」の要素が薄く、単に軽い | Falsetto, Head Voice | Gritty, Growl | **うちの実績はミックス用途のみ。声では未使用** | C |
| Relaxed (Vocal) | 声帯・喉の緊張を抜いた状態 | ゆるい、力が入っていない | Pressedの対極。Breathyとは息の量ではなく緊張の話 | Unhurried, Soft | Maximum Energy, Pressed | **場所を限定しないと事故る**(`songs/24`の前例) | **A(9)** |
| Natural Vocal Grain | 補正しない粒立ち | 生々しさ | 圧力ではなく質感の均され方の話 | Audible Breath, Pitch Wave | Autotune系 | **YuRa/栞/壮琉の共通語** | **A** |

## ③ 音のつなぎ方(articulation・音符の処理)

| 語 | 正確な意味 | 聴こえ方 | 近い語との違い | 併用しやすい | 衝突(同時最大化時) | 書き方 | 実証 |
|---|---|---|---|---|---|---|---|
| Legato | 音と音の間を切らずに連続的につなぐ | 途切れない、流れる | Sustainedは1音を伸ばす、Legatoは音同士のつなぎ | Crooning, Vibrato, Sustained | Staccato, Rhythmic Delivery | スタイル欄。場所を限定 | B |
| Staccato | 音を短く切って処理する | 歯切れ、粒が立つ | Detachedより「切る」動作そのものを指す | Sharp Consonant, Rhythmic | Legato, Sustained | ブラケット | B |
| Portamento | 音と音の間の音程を連続的に滑らせる | ぬるっと移る | Glissandoより滑らかで速度が遅い傾向 | Legato, Vibrato | Staccato | スタイル欄 | C |
| Glissando | 音程を素早く連続的に滑らせる(半音階的) | 大きく滑り落ちる/上がる | Portamentoより速く機械的な印象 | Falsetto, Vocal Run | Straight Tone | ブラケット | C |
| Detached | 音を一つずつ独立させ、粘りを持たせない | 平板、事務的 | Staccatoより「短く切る」ではなく「繋げない」 | Monotone, Spoken | Legato, Melisma | `Detached Monotone Verses` | **A(1)** |
| Marcato | 一音ずつはっきり際立たせて歌う | 押し出しが強い | Accentが1点なのに対し全体に適用される強調 | Accent, Powerful | Breathy, Gentle | ブラケット | C |
| Slurred | 語や音をつなげて崩す | 酔ったような曖昧さ | Legatoより「不明瞭さ」を含む | Conversational, Husky | Clear Articulation | ブラケット | C |
| Sustained | 一音・一語を長く保つ | 伸びる、空間が出る | Held Noteより曲全体の傾向を指すことが多い | Legato, Vibrato, Head Voice | Staccato, Rhythmic | `Long Sustained Tones` | **A(3)** |
| Held Note | 特定の一音を持続させる | 一点で止まる | Sustainedより単発の指示 | Sustained, Crescendo | Vocal Run | `Wavering Held Notes` | **A(1)** |
| Clipped | 語尾を切り落とす | そっけない、冷たい | Staccatoより「終わり方」だけの話 | Detached, Spoken | Drawn-out Vowel | ブラケット | C |

## ④ 音程の動かし方(ピッチの操作)

**ビブラートは「かける/かけない」だけでなく、rate(揺れの速さ)とextent(揺れの幅)という
2つの独立した変数がある(声楽理論)。うちの表現は「Wide/Light/Minimal」という幅の語に
ほぼ集約されており、速さを直接指定した実績は無い。**

| 語 | 正確な意味 | 聴こえ方 | 近い語との違い | 併用しやすい | 衝突(同時最大化時) | 書き方 | 実証 |
|---|---|---|---|---|---|---|---|
| Vibrato | 音程を周期的・規則的に揺らす | 温かみ、伸びの表情 | 揺れの幅(extent)・速さ(rate)は別途指定が必要 | Sustained, Belt, Legato | Straight Tone | 量の語とセット推奨 | **A(7)** |
| Minimal Vibrato | 揺れの幅(extent)を強く抑える | 素朴、澄んだ直線 | Straight Toneより「わずかに揺れは残る」 | Breathy, Intimate, Close-Mic | Melisma, Vocal Run | 清宮栞の固定に採用済み | **A(6)** |
| Straight Tone | ビブラートをほぼゼロまで抑えた声 | 硬質、少年的 | Minimal Vibratoとの違いは揺れの有無そのもの | Detached, Clean | Vibrato, Melisma | スタイル欄 | C |
| Wide Vibrato | 揺れの幅(extent)が大きい | 演歌/オペラ寄り | Fast/Slowは速さ(rate)の話で幅とは別変数 | Belt, Powerful | Intimate, Whispered | スタイル欄 | **A(3、自己参照のみ)** |
| Light Vibrato | 揺れの幅が浅い | 上品、控えめ | Minimal Vibratoとほぼ同義。うちはMinimalを採用 | Crooning, Gentle | Wide Vibrato | スタイル欄 | C |
| Vibrato Rate(速さ) | 揺れの周期の速さ(未分離のパラメータ) | 速いと緊張、遅いと落ち着き | 幅(extent)とは独立 | — | — | **うちは速さを単独指定した実績なし** | C |
| Scooping | 目標音より低い音から滑り上がって入る | 甘え、粘り | Portamentoは音と音の間、Scoopは音の入り方 | Crooning, Husky | Clear Articulation | ブラケット | C |
| Fall-off | 音の終わりを下方向に落とす | 投げやり、余韻 | Doitの対極(下に落ちる) | Conversational, Breathy | Crescendo | `breath catching...then falling into silence`に近い描写あり | **A(1、地の文での近似表現)** |
| Doit | 音の終わりを上方向に跳ね上げる | 軽い煽り | Fall-offの対極 | Playful, Teasing | Mournful | ブラケット | C |
| Blue Note | 半音下げた崩し | ブルース/ジャズ感 | Pitch Bendより特定の音程への意図的な崩し | Husky, Smoky | Clean, Bright | スタイル欄 | C |
| Pitch Bend | 音程を意図的に上下させる | たわむ、崩れる | **うちの実績はサックス。声では未使用** | Blue Note, Gritty | Clean, Straight Tone | — | C |
| Slight Human Pitch Wave | 微細で不規則な人間的な音程の揺らぎ | 補正されていない生々しさ | Vibratoより周期性が無く、より不規則 | Natural Vocal Grain, Audible Breath | Autotune系 | YuRa質感更新で採用済み | **A(1)** |

## ⑤ 装飾(メロディーの飾り方)

| 語 | 正確な意味 | 聴こえ方 | 近い語との違い | 併用しやすい | 衝突(同時最大化時) | 書き方 | 実証 |
|---|---|---|---|---|---|---|---|
| Melisma | 1音節に複数の音程を割り当てる装飾 | R&B/ゴスペル的な装飾 | Vocal Runより1語の中の装飾を指す | Vocal Run, Belt, Head Voice | Detached, Spoken, Rap | ブラケット | B |
| Vocal Run | 短い音程を高速で連続させる即興的な走句 | 技巧が前に出る | Melismaより複数語・複数拍にわたる傾向 | Melisma, Falsetto | Spoken, Minimal Vibrato | `Smooth Vocal Runs` | **A(1)** |
| Turn(装飾音) | 目標音の周りを短く回るように装飾する | 小さな回転、古典的な装飾 | Vocal Runより短く定型的 | Melisma | Straight Tone | **うちの実績は同名の別実験(セクション見出し)のみ。装飾としては未使用** | C |
| Riff (vocal) | 即興的な短い装飾フレーズ | 崩して歌う | Vocal Runとほぼ同義で使われることが多い | Melisma, Ad-lib | Straight Tone | **うちでは全部ギター用。混同注意** | C |
| Ad-lib | 定型の外で挟む即興の合いの手 | 隙間を埋める | Runより「メロディの一部」ではなく「挿入」 | Call And Response | Minimal | 実使用あり | **A(2)** |

## ⑥ リズム(拍に対する言葉の置き方)

| 語 | 正確な意味 | 聴こえ方 | 近い語との違い | 併用しやすい | 衝突(同時最大化時) | 書き方 | 実証 |
|---|---|---|---|---|---|---|---|
| On-The-Beat / Straight | 拍の正確な位置に言葉を置く | 規律的、機械的な安定感 | Behind/Aheadの基準点 | Rhythmic Delivery, Rap | Laid-back, Behind The Beat | スタイル欄 | C |
| Syncopated Delivery | 拍の裏・弱拍に言葉やアクセントを置く | 跳ねる、グルーヴが出る | On-the-beatの対極 | Rap, Groove | Straight, Marcato | **うちの実績は楽器側。声では未使用** | C |
| Behind The Beat | 拍よりわずかに後ろに言葉を置く | 余裕、粘り、ソウルフル | Laid-backより明確に「遅れ」を指す技術語 | Husky, Smoky, Soul | Ahead Of The Beat | スタイル欄 | C |
| Ahead Of The Beat | 拍よりわずかに前に言葉を置く | 焦り、疾走感 | Drivingより「配置」の話 | Desperate, Fast Flow | Behind The Beat, Laid-back | スタイル欄 | C |
| Laid-Back | 全体の乗り方がゆったり後ろに引いている | くつろいだ、余裕がある印象 | Behind The Beatより感覚的・全体的な表現 | Unhurried, Relaxed, Smoky | Driving, Urgent | スタイル欄 | C |
| Driving | 拍を前へ押し出すように歌う | 前進感、勢い | Ahead Of The Beatより「押す力」の質感の話 | Powerful, Fast Flow | Laid-back, Unhurried | `[Driving Vocal]` | **A(1)** |
| Rhythmic Delivery | リズムそのものを強く意識した発声 | 拍に乗る | Rapより広い(歌でも成立) | Rap, Syncopated | Legato, Rubato | `[Confident, rhythmic delivery]` | **A(1)** |

## ⑦ 発音・言葉の処理

| 語 | 正確な意味 | 聴こえ方 | 近い語との違い | 併用しやすい | 衝突(同時最大化時) | 書き方 | 実証 |
|---|---|---|---|---|---|---|---|
| Clear Articulation | 歌詞の音を明瞭に発音する | 輪郭が立つ | Sharp Consonantより母音・子音全体の明瞭さ | Sharp Consonant, Spoken | Slurred, Melisma | スタイル欄 | C |
| Sharp Consonant Articulation | 子音を鋭く強く立てる | 刻みが効く | Clear Articulationの子音側だけを強調 | Rap, Spoken Word | Breathy, Legato | `songs/05-told-you-so.md` | **A(1)** |
| Emphasized Consonants | 子音を強調する | 同上 | Sharp Consonantとほぼ同義 | Rhythmic Delivery | Drawn-out Vowel | スタイル欄 | C |
| Drawn-out Vowels | 母音を長く伸ばす | 引き伸ばす | Sustainedが音の持続、これは母音そのものの伸び | Sustained, Legato | Staccato, Rap | ブラケット | C |
| Conversational | 会話のような自然な発話に近い歌い方 | 自然な喋り | Spokenより「歌う」要素が残る | Spoken, Natural Pauses | Melisma, Belt | `Conversational Rhythm, Not Sing-Song` | **A(4)** |
| Speech-like | 話し声に近い発声そのもの | 歌と喋りの中間 | Conversationalより発声そのものの話 | Spoken, Murmured | Chorus系ラベル | スタイル欄 | C |
| Spoken | 旋律を伴わず話すように発する | 旋律が消える | **確実に効く階層** | Conversational, Natural Pauses | Melisma, Belt | **確実に効く階層** | **A(42)** |
| Spoken Word | 語り全体を通した表現形式 | 完全に喋り | Spokenより形式・ジャンル寄りの語 | Natural Pauses, Clear Articulation | Chorus系ラベル | **確実に効く階層** | **A(9)** |
| Rap | 韻とフローを持つ語りの様式 | 旋律より輪郭 | Rappingより名詞・ジャンル寄り | Sharp Consonant, Flow | Melisma, Belt | ジャンル語として実使用 | **A(11)** |
| Rapping | 韻律的な語り・詠唱の動作 | 同上 | 公式定義は動作としてのこちら | 同上 | 同上 | 公式用語 | B |
| Chanted | 定型句を詠唱するように繰り返す | 反復的で儀式的 | Rappingより律動が単純・反復的 | Ritual系, Unison | Conversational | ブラケット | C |
| Scat | 意味を持たない音節での即興 | ジャズ的 | Ad-libより体系化された技法 | Jazz, Vocal Run | Clear Articulation | **うちの3件は`Scattered`の誤検出。実使用ゼロ** | B |

## ⑧ 感情・表現(何を感じさせるか)

**単に「Emotional」と書くのは情報量が薄い。どの感情かを specificに書く方が反映されやすい
(既存記録「心理描写+技術指定をセットで書く」と同じ発想)。**

| 語 | 意味の輪郭 | 近い語との違い | 併用しやすい | 衝突しやすい | 実証 |
|---|---|---|---|---|---|
| Desperate | 切羽詰まった、余裕のない | Urgentより個人的な危機感 | Cracking, Shouted, Fast | Controlled, Unhurried | **A(5)** |
| Defiant | 反抗的、屈しない | Angryより意志的・能動的 | Powerful, Belt | Gentle, Tender | **A(3)** |
| Vulnerable | 弱さ・傷つきやすさをさらけ出す | Tenderは他者への感情、Vulnerableは自分の状態 | Breathy, Intimate, Bridge | Powerful, Defiant | **A(4)**(`[Intimate, vulnerable, close to a whisper]`) |
| Triumphant | 勝ち誇る、勝利の実感 | Defiantより「勝った後」の感情 | Powerful, Explosive | Aching, Vulnerable | **A(1)**(`Aching Not Triumphant`と否定形で使用実績あり) |
| Restrained | 感情を抑制する | Controlledより「出したいが出さない」含意 | Controlled, Verses | Explosive, Maximum Energy | **A(6)** |
| Controlled | 制御が行き届いている | Restrainedより単に「崩れない」の意 | Restrained, Clean | Desperate, Cracking | **A(8)** |
| Playful | 遊び心、軽さ | Teasingより無邪気寄り | Teasing, Bright | Mournful, Dark | **A(8)** |
| Teasing | 煽る、からかう | Playfulより対象への挑発を含む | Playful, Azato-Cute | Solemn | **A(6)** |
| Urgent | 時間的な切迫感 | Desperateより外的な急かされ感 | Fast Flow, Ahead Of The Beat | Unhurried, Laid-back | C(未使用) |
| Angry | 怒り | Defiantより制御を失っている含意 | Growl, Shouted | Gentle, Crooning | C(未使用) |
| Stoic | 感情を表に出さない | Restrainedより無表情寄り、抑圧感が薄い | Detached, Clean | Desperate, Cracking | C(未使用) |
| Detached (感情) | 距離を置いた、他人事のような態度 | Stoicより意図的な切断の含意 | Monotone, Spoken | Vulnerable, Desperate | **A(1、デリバリー欄と共通)** |
| Tender | 柔らかく慈愛的 | Vulnerableは自分の弱さ、Tenderは他者への優しさ | Warm, Gentle | Defiant, Growl | C(未使用) |
| Haunting | 不穏で残響のように残る | Mournfulより「怖さ」の含意がある | Dark, Reverb系 | Playful, Bright | C(未使用) |
| Mournful | 悲嘆、喪失の重さ | Haauntingより静的で内向き | Dark, Slow | Playful, Bright | C(未使用) |

## ⑨ 強弱・ダイナミクス(曲中でどう変化するか)

| 語 | 正確な意味 | 聴こえ方 | 近い語との違い | 併用しやすい | 衝突(同時最大化時) | 書き方 | 実証 |
|---|---|---|---|---|---|---|---|
| Powerful | 聴感上の強さ | 押し出しが強い | **Beltは発声技法、Powerfulは聴感。別軸で併用可** | Belt, Front And Center | Whispered, Breathy | **YuRa固定トリオの語** | **A(47)** |
| Soft | 音量・力を弱くする | 近い、優しい | Breathyは声質、Softは音量そのもの | Intimate, Breathy, Close-Mic | Explosive, Belt | 場所を限定 | **A(15)** |
| Gentle | 穏やか | 角が立たない | Softより「扱い方」全体のニュアンス | Unhurried, Warm | Forceful, Gritty | 場所を限定 | **A(16)** |
| Explosive | 爆発的に開く | 一気に開く | Powerfulより「変化の急さ」を含む | Maximum Energy, Belt | Restrained, Breathy | サビ/Final限定 | **A(8)** |
| Forceful | 力任せに押す | 力任せ寄り | Powerfulより粗さを含む | Marcato, Shouted | Crooning, Intimate | ブラケット | C |
| Crescendo | 徐々に強くする過程 | 盛り上がる | Building Intensityより演奏記号としての正式語 | Building Intensity | Flat Dynamics | ブラケット | B |
| Diminuendo / Decrescendo | 徐々に弱くする過程 | 引いていく | Fall-offは1音、これは区間全体 | Fall-off, Outro | Crescendo | ブラケット | B |
| Building Intensity | 段階的に強度を上げる | Pre-Chorus的 | Crescendoの口語的言い換え | Energy Lift, Crescendo | Flat Dynamics | ブラケット実績あり | **A(2)** |
| Energy Lift | 一段階持ち上げる | 持ち上がる | Building Intensityより単発の変化 | Building Intensity | Restrained | ブラケット実績あり | **A(4)** |
| Maximum Energy | 全力・全開 | 曲の頂点 | リポジトリ最多の叫び系タグ | Explosive, Final Shout | Intimate, Hushed | **リポジトリ最多の叫び系タグ** | **A(5)** |
| Final Shout | 最後の一声で叫ぶ | 締めの叫び | Maximum Energyより「最後」の位置を含意 | Maximum Energy | Gentle Outro | ブラケット実績あり | **A(3)** |
| Accent | 特定の音・語を強調 | 一点が立つ | Marcatoより単発 | Sharp Consonant, Marcato | Legato | ブラケット | B |
| Sforzando | 一瞬だけ強く突く | 突き刺す | Accentより急激・唐突 | Accent, Staccato | Legato, Sustained | ブラケット | C |
| Dynamic Contrast | 緩急そのものを設計に明記 | 起伏が付く | Building Intensityが一方向、これは緩急全体 | セクション別演出全般 | Flat Dynamics | スタイル欄の設計図として | **A(3)** |

---

## 質感・音色(9系統の外に置く独立軸)

**発声メカニズム(①②)でも強弱(⑨)でもなく、単純に「音色がどう聴こえるか」の語。
どの系統にも属しにくいので独立して置く。**

| 語 | 聴こえ方 | 実証 |
|---|---|---|
| Clean | 澄んで明瞭 | **A(17)** |
| Gritty | 砂っぽい | **A(2)** |
| Raspy | 擦れた芯(**四道壮琉の固定**) | **A(4)** |
| Husky | 低く掠れる(壮琉・栞で使用) | **A(3)** |
| Smoky | 煙ったような暗い色(壮琉の固定) | **A(3)** |
| Growl | 喉を使った歪んだ発声(**`Screaming`/`Death Growl`より適切**) | **A(7)** |
| Voice Cracking | 声が端で割れる(壮琉の固定) | **A(4)** |
| Whispered | ささやく(**確実に効く階層**) | **A(8)** |
| Murmured | 呟く(`songs/18-setsuya.md`) | **A(2)** |
| Hushed | 声をひそめる | **A(2)** |
| Shouted | 張り上げる(**単語で使う。造語化は不採用の前例あり**) | C |
| Screamed | 絶叫(**うちでは`Avoid Screamed Climax`と除外側のみ**) | C |
| Crooning | 柔らかく親密に歌う | B |
| Nasal | 鼻にかかる | C |
| Warm | 温かい音色 | **A(10)** |
| Bright | 明るい音色 | **A(7)** |
| Dark | 暗い音色 | **A(10)** |

## 距離・空間(独立軸)

| 語 | 聴こえ方 | 実証 |
|---|---|---|
| Intimate | 親密・耳元 | **A(27)** |
| Close Vocal / Close-Mic | 近接マイク | **A(7/13)** |
| Front And Center Vocal | ミックスの主役位置 | **A(YuRa固定)** |
| Distant / Vast Reverb | 遠い、広い残響 | C |

## ハーモニー・複数声部(独立軸)

| 語 | 正確な意味 | 実証 |
|---|---|---|
| Harmonization | 複数声部が別の音程を同時に歌う | B |
| Layered Harmonies | 重ねたハーモニー(厚みを作る目的) | **A(1)** |
| Unison | 全員が同じ音程を歌う | **A(2)**(`songs/09-goji-no-haietsu.md`) |
| Call And Response | 掛け合い(呼びかけと応答) | **A(2)**。**声部は標準語彙(Audience/Crowd)で書く** |

---

## 衝突の早見表(同時最大化した場合のみ)

| 片方 | もう片方 | なぜ |
|---|---|---|
| Whispered / Breathy / Murmured | Belt / Explosive / Maximum Energy | 息を混ぜる指示と張り上げる指示が正面衝突 |
| Relaxed / Restrained / Gentle / Soft | Maximum Energy / Final Shout | **`songs/24`で実際に叫びが死んだ組み合わせ** |
| Legato / Sustained | Staccato / Rhythmic Delivery | つなぐ指示と切る指示 |
| Straight Tone / Minimal Vibrato | Wide Vibrato / Melisma / Vocal Run | 揺らすなと装飾しろ |
| Clean / Pressed | Gritty / Raspy / Growl / Vocal Fry / Breathy | 締める指示と緩める・濁らせる指示 |
| Falsetto / Head Voice | Belt / Growl / Chest Voice | 声区が逆 |
| Clear Articulation | Slurred / Melisma | 輪郭を立てると崩せない |
| Laid-back / Behind The Beat | Driving / Ahead Of The Beat / Urgent | 拍に対する置き方が逆方向 |

**衝突するのは「同時に最大化」した時だけ。曲の中でセクションを分けて切り替えるなら
全部自然**(`Whispered Verse → Explosive Belt Chorus`のように)。

## セクション別の設計例(YuRa・全語A実証)

**土台(固定・触らない)**
```
Powerful Female Vocal, Front And Center Vocal, Strong Vocal Presence
```

| セクション | ブラケット側 |
|---|---|
| Verse | `[Controlled]` / `[Conversational]` / `[Restrained]` |
| Pre-Chorus | `[Building Intensity]` / `[Energy Lift]` |
| Chorus | `[Powerful Belt]` / `[Belted Delivery]` / `[Driving Vocal]` |
| Bridge | `[Intimate]` / `[Close Vocal]` / `[Vulnerable]` |
| Final Chorus | `[Maximum Energy]` / `[Final Shout]` |

**`Belt`は`Powerful`と二重指定にならない。** `Powerful`=聴感上の強さ、
`Belt`=胸声での高音持続という発声技法で、定義上も別物。
**`Chest-Dominant`のような声区指定を土台に足すのは別の話**(声質側の指定であり、
`Powerful Female Vocal`と役割が重なる可能性がある)。**採用していない。**

## 実証チェックで除外した誤検出(記録として残す)

**「うちで使用実績がある」と言う前に、その語がボーカルに使われているのか
楽器・ミックス・別の意味に使われているのかを必ず見ること。** 今回除外した実例:

| 語 | 誤検出の内容 |
|---|---|
| Scat | 実体は`Scattered Audience Laughter`(客席の笑い声) |
| Syncopated | 楽器(ドラム・ベースのグルーヴ) |
| Pitch Bend / Held Note | サックス(`songs/10-ame.md`) |
| Riff / Doubled | ギター |
| Strained | `Restrained`の部分一致 |
| Pressed | `Compressed`の部分一致 |
| Cold(ボーカル文脈) | `Cold Open`(構造ラベル)/`Cold Synth`(楽器)。ボーカル用途はゼロ |
| Turn(装飾技法として) | 別実験`experiments/02-kumo-chukei.md`のセクション見出し`[Turn — spoken]` |

## 出典と、確認できなかったこと

- **A欄はこのリポジトリを直接grepし、ボーカル文脈の行に限定して数えた実測値。**
- **B欄の根拠**: [Music Glossary for Suno](https://help.suno.com/en/articles/9010177)。
  **⚠️ このドメインはセッションのegressポリシーでブロックされており、一次情報を直接読めていない。**
  `usesuno.com` `hookgenius.app` `acetaggen.com`も同様にブロック。検索結果経由の二次情報。
- **声楽理論としての定義**(①〜④の「正確な意味」列)は一般的な声楽・音声学の説明に基づく。
  **これはSunoの内部理解を意味しない。** 意味の正確さと実証レベルは別軸(冒頭参照)。
- **v6について**: 公式表現として確認できたのは
  "faster, more expressive, and higher quality, with a better grasp of the
  language and building blocks musicians use"(2026-09-09発表)。
  「versatile」「stronger control and precision」という文言は確認できなかった。
- 関連する既存記録は`CLAUDE.md`の
  「Sunoのタグの効き方(実証された内容)」「抑制語を曲全体にかけると、1箇所の爆発が死ぬ」
  「Sunoでの声部の指定は標準語彙を使う」を参照。
