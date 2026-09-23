# 枯れない言葉

**ボーカル**: YuRa(**SunoのVoice機能を使用**)
**ジャンル**: Japanese Pop + Subtle Uk Garage Beat Elements、98 Bpm
**テーマ**: 夏の終わりに、言えなかった言葉を抱えたまま季節に追い越されていく

## 成り立ち

**【本人】ユーザーが原案を持ち込み、こちらは整理・検査を担当した**(`songs/24-ten-no-ginshi.md`と同じ役割分担)。

経緯としては、2026-09-21に歌詞技法の資料を全削除した直後、
ユーザーが**「君に作詞とはどう言うものか教えてやってくれとGeminiに頼んで出来たものを貼る」**として
Geminiの歌詞+ChatGPTの改稿を教材として提示し、そこからユーザー自身が発展させたもの。
**こちらが書いた歌詞の行は1行も無い。**

## スタイルプロンプト

```
Front And Center Vocal, Strong Vocal Presence, Clear Natural Vocal Grain,
Edge Voice, With A Sigh,
Restrained Emotional Delivery, Delicate Verses, Gradual Emotional Build,
Warm Vocal Layers, Emotional Female Singer,

Japanese Pop, 98 Bpm,
Melancholic Atmospheric Pads, Gentle Acoustic Guitar,
Subtle Uk Garage Beat Elements
```

## 歌詞

```
[Intro]
[Atmospheric pads, gentle acoustic guitar strum, distant wind ambience, very sparse and intimate opening]

[Verse 1]
坂道の途中で 影が伸びていく
濡れた夏草の匂いが 遠ざかる
風の端っこに 冷たさが混じって
カレンダーの余白だけ 取り残されて

[Verse 2]
「涼しくなったら」と 言った横顔
その声の温度だけ まだ消えない
約束の場所へ向かう理由
あの日からずっと 決められないまま

[Pre-Chorus]
[Beat enters softly, crisp syncopated UK Garage hats, restrained vocal tension, gradual lift]
街灯がひとつ 点滅を始めて
季節が変わる 合図みたいに

[Chorus]
[Doubled Vocal Just Behind The Lead, subtle harmony layer, emotional intensity rises without shouting]
「またね」と言い切れなかったのは
明日を繋ぎ止めるため？
夕闇に溶けてゆく背中は
あなたの面影を 抱いている
言えなかった あの願いだけ
褪せないまま ここに咲く

[Verse 3]
[Pull the arrangement back slightly, intimate close vocal, natural phrasing]
半袖の裾を 少し引っ張って
すれ違う人の 足音を聞いている
通り過ぎる風の隙間から
知らない季節の匂いがした

[Bridge]
[Music drops, exposed vocal, quiet but emotionally firm]
忘れたいとは思わないし
戻りたいわけでもない
果たされなかった約束は
消えたんじゃなく 置いてきただけ
どこへ行っても 何を失っても
あの日差しの中に
まだ わたしはいる

[Chorus]
[Doubled Vocal Just Behind The Lead, fuller harmony, strongest emotional point, powerful but controlled female vocal]
「またね」と言わなかったのは
終わりをつくらないためだったの？
秋に追い越されていく背中は
あなたの温もりを 覚えている
言えなかった あの言葉だけ
枯れないまま ここに咲く

[Outro]
[Garage beat gradually fades, lingering acoustic guitar and atmospheric pads, intimate vocal delivery, long reverb tail, gentle fade out]
A cold wind
passes me by—
and the season turns
```

## 制作メモ

### Outroを英語にした経緯

**初期案の英語Outroは`The start of autumn— / amidst the cold wind, / it is still`だったが、
`it is still`は英文として閉じていない**(英語の`still`は後ろに補語が要る。
ネイティブには「静止している」か途中で切れた文に読める)。
日本語の「まだ」が言いさしで余韻になるのと同じことが英語ではできない。

ユーザーが日本語で`冷たい風が 私を 通り過ぎ / そして、季節が変わる`を出し直し、
**`通り過ぎ`が「体を突き抜ける(冷たさ)」と「私を追い越していく(置いていかれる)」の
両方に読めるので英語はどちらかを選ぶ必要がある**と整理して3案を提示した。

**【本人】ユーザーは「置いていかれる」側(案B)を選び、「狙い通り」と確認した。**

```
A cold wind
passes me by—
and the season turns
```

`pass someone by`は英語で「人生が自分を素通りしていく」を指す言い方で、
Verse 1の`取り残されて`とChorus 2の`追い越されていく`に直結する。
**日本語パートでは一度も「置いていかれた」と言っていないので、
言わなかった言葉が最後に英語で一度だけ出る構造になった。**

**【本人】Outroだけ英語になることについて、こちらが「日本語で言えなかったことを
英語で言い切って終わる読み方が生まれるが狙い通りか」と確認し、「狙い通り」と回答を得ている。**

### Voice機能の扱い

**【本人】「ゆらのvoice使うよ？」**を受けて、CLAUDE.md「Sunoの『Voice』機能を使う場合の
プロンプト条件」(2026-09-12訂正版)を適用した。

- **削除**: `Intimate Female Vocal`(**【本人】ユーザー判断**)
- **残した**: `Front And Center Vocal` `Strong Vocal Presence`(ミックス配置指示)、
  `Restrained Emotional Delivery` `Delicate Verses`(歌い方)

**なお`Emotional Female Singer`は性別+質感の語なので、ルール上は削除対象の側**だが、
`songs/20-gacha-oni-voice-cover.md`で**ユーザー自身が声質を消して
`Powerful Male Vocal`に差し替えた前例がある**ため、残す判断にも前例がある。

### Bridgeのブラケットから楽器名を削除した

**【本人】「Bridgeのピアノとサブベースがスタイルに無いのなら削除しよう」**

`[Music drops, sparse piano and deep sub bass, exposed vocal, quiet but emotionally firm]`
→ `[Music drops, exposed vocal, quiet but emotionally firm]`

**スタイル欄に無い楽器をブラケットだけが要求していた**ので、スタイルに足すのではなく
ブラケットから削る方を選んだ(「短ければ短いほど良い」の適用)。

**【解釈】結果としてBridgeで鳴る楽器の名前が1つも無くなったので、
7行まるごとアカペラに寄る可能性がある。**スタイルにある`Gentle Acoustic Guitar`を
ブラケットに入れる案も提示したが、**ユーザーは入れない方を選んだ。**

### 指摘したが、そのまま残した箇所(ユーザー判断)

**こちらから挙げて、ユーザーが変更しないと決めたもの。「ルール違反だから直す」と
今後のセッションで判断しないこと。**

**1. ルール3(サビはフック以外同じ言葉を使わない)に未達**

**【実測】2つのサビを突き合わせ、2文字以上の連続一致を全部拾った**(空白と改行を除去して
最長一致から順に、包含されるものを除外)。**16箇所が共有されていた。**

| 共有語 | Chorus 1 | Chorus 2 |
|---|---|---|
| 「またね」と言…なかったのは | 言い切れなかったのは | 言わなかったのは |
| ため | 繋ぎ止める**ため**？ | つくらない**ため**だったの？ |
| 背中は | 夕闇に溶けてゆく**背中は** | 秋に追い越されていく**背中は** |
| あなたの | **あなたの**面影を | **あなたの**温もりを |
| 〜ている | 抱い**ている** | 覚え**ている** |
| 言えなかった あの…だけ | あの願い**だけ** | あの言葉**だけ** |
| 〜ないまま ここに咲く | 褪せ**ないまま ここに咲く** | 枯れ**ないまま ここに咲く** |

最終行をフックと見ても、**残り5行のうち4行に共通語が残っている。**

**【実測】文字数も揃っていない**(空白を除いた文字数):
C1=16/11/11/12/12/11(計73)、C2=14/16/13/13/12/11(計79)。**2行目が5文字差。**

**2. スタイル欄に実証の裏付けが無い語が3つ**

**【実測】`songs/`と`reference/`を全文検索して、いずれも0件。**

- **`Edge Voice`** — うちの実績ゼロ。**しかも意味が2つに割れる**:
  日本語の「エッジボイス」は声を軋ませる最低音域(辞典の`Vocal Fry`、実証C)だが、
  **英語の`Edge`はComplete Vocal Techniqueの4モードの1つで、最も金属的に張り上げる発声。**
  **正反対の語。**Sunoがどちらを取るかは分からない。
  **なお公式グロッサリーは12語しか原文確認が取れていない**(`Vocal Techniques`の章が
  あることは分かっているが中身は未入手)ので、**「公式に載っていない」とは言えない。**
- **`With A Sigh`** — 実績ゼロ、外部の裏付けも取っていない。
- **`Emotional Female Singer`** — 実績ゼロ。**うちは全曲`Vocal`で`Singer`は一度も使っていない。**

**3. スタイルとブラケットで対応する語が無い箇所が3つ**

- Introの`distant wind ambience` — **環境音を形容詞で書く形**。`songs/16-shinkan.md`で
  雨をこの書き方にして**ノイズ化した**のと同じ形。実在の楽器名への置き換えは提案したが不採用。
- Chorus 2の`powerful but controlled female vocal` — **スタイル欄に`Powerful`が無い。**
  ブラケットだけが力強さを要求している。
- Outroの`long reverb tail` — スタイル欄に残響の語が無い。

**4. `98 Bpm`とGarageのテンポ帯**

Uk Garageの常用域は130前後なので、**98はハーフタイム寄り。**意図かどうかを確認し、
**そのままで確定した。**

### 確認して問題が無かったもの

- **【実測】半角チェック** — 全角スペース0件・全角括弧0件。`「」`と`？`は規約通り全角。
- **【実測】Verse行数** — 3本とも4行。
- **【実測】タイトル`枯れない言葉`** — `枯れない`も`言葉`もChorus 2に既出。
  `songs/24-ten-no-ginshi.md`の「散らばった語を集めて題にする」と同じ作り。
- **【実測】Verse文字数(ルール2)** — V1=56 / V2=56 / V3=49。
  **V1とV2はぴったり一致、V3だけ7文字短い**(4行目が16/16に対して12)。報告済み・変更なし。
- **全7ブラケットを1つずつスタイルと照合**(Bridgeの削除後にもう一度実施)。
