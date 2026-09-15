# Still Warm

ボーカル: YuRa
テーマ: 終わりが来ることを知っている夜、それでも今だけは確かに触れ合っている
ジャンル: グランドピアノ主体+フルオーケストラのストリングスによる感情バラード(76Bpm)。
  ジャンル名は使わず楽器・奏法のみで指定。呼吸音を静かな箇所に編み込み、サブベースが
  心臓の鼓動としてサビに向けて引き締まっていく
モチーフ: 手のひら(汗ばむ→冷える→強く握る→指を絡める)、握る力の強さの変化

## 制作メモ

- **チャッピー(他AI)に「教科書的なAI恋愛歌詞」と判定された箇所の修正**: 初稿はVerse 3
  「永遠なんて どこにも無いから」、Chorus「終わりがあるのを 知ってしまったから」という、
  テーマを直接言葉で説明する行を使っていた。この曲は内省的なラブバラードであり
  「具体描写と抽象的な啖呵、ジャンルで使い分ける」ルールに従えば、アンセム系の
  抽象啖呵の対象外。直接言明を削り、既存の「手のひら」モチーフの延長(握る力の変化)
  で同じ意味を語る形に書き直した:
  - Verse 3: 「永遠なんて どこにも無いから」→「その汗が 少しずつ冷えていく」
    (Verse 1の「汗ばんでる」を指示語「その汗」で受け、説明せず体感の変化だけで緊張を示す)
  - Chorus: 「終わりがあるのを 知ってしまったから」→「繋いだ指に 爪が食い込むほど」
    (Verse 1「少し強く握る」の延長として握る力を頂点まで強め、Outroの「痛いくらい、
    抱きしめて」への伏線にもなる)
  - この修正で副次的に、曲全体が終始口語体(「〜してる」「〜だけど」)で統一され、
    「永遠」「知ってしまったから」が作っていた文体の浮き(説明的・書き言葉寄りの
    レジスターの混入)も解消された。
  - 同日に別件で「文体を古語に格上げすると直接言明のAI臭さが消える」という技法を
    発見していたが、この曲(YuRaの現代的な口語ラブバラード)には不向きと判断し、
    不採用。古語技法ではなく具体描写への書き換えで対応した、という技法選択の実例として
    記録する。
- **スタイルプロンプートとブラケットの不整合を1件修正**: `[Instrumental Break]`に
  "strings and guitar"とギターが書かれていたが、スタイルプロンプト側の楽器指定
  (Swung Garage Beat, Soft Sub-Bass, Warm Analog Synth Pads, Strings)にギターは
  存在しなかった。ブラケット側からギターを削除し、Strings+Padのみに統一して解決。
- **スタイル全体への緩急設計の明記**(「古き盟約」リミックスで採用した技法)を今回も
  スタイルプロンプート本文に直接入れた: `Intimate And Restrained Verses, Tension
  Gradually Building Into The Chorus, Powerful Emotional Release In The Chorus,
  Strong Dynamic Contrast`。ブラケット側の緩急指定と二重に補強する運用。
- **スケルトンの使い回し回避の確認**: Pre-Chorusを使わず、Chorusは1回のみ(Final Chorus
  ではなくフックだけの`Chorus Tag`で再登場)、Verseを4回使用、という構成は、直近のYuRa曲
  (Verse→Pre-Chorus→Chorus→Verse→Bridge→Final Chorusの繰り返し)と種類・出現回数の
  両方が異なり、厳格化ルールに抵触しない。
- アウトロの「抱きしめて/もっと強く、抱きしめて/痛いくらい、抱きしめて」は、中島美嘉
  「祈り、終われば」から抽出した「三段階リフレイン」技法(同じ文型を繰り返し修飾語だけ
  変えて感情を積み上げる)の実践。
- **サウンドが「聴いたことある」と指摘され、ジャンル名を全廃して楽器・奏法だけで再構築**
  (2026-09-15)。「Future Garage, Japanese Pop, Cinematic String Accents」はCLAUDE.md
  記載の通りYuRaの最頻出組み合わせ(既存5曲で使用済み)で、6曲目になると量産感が出る
  という指摘を受けた。「雨」「One Step Behind」の手法(ジャンル名を使わず楽器・奏法
  だけで組む)を採用し、テーマを直接音に翻訳する技法を実践:
  - Verse3の歌詞「呼吸の音を数える」というモチーフを、実際に**呼吸音をパーカッションの
    レイヤーとして編み込む**という音響指示に翻訳(`Sampled Breath Woven Into The
    Percussion Bed`)。歌詞の内容と音響指示が一致する形。
  - 握る力が強まっていく歌詞の展開を、**サブベースの心臓の鼓動がサビに向けて
    引き締まっていく**という指示(`Sub-Bass Heartbeat Pulse, Tightening Toward The
    Chorus`)に翻訳。
  - Instrumental Breakの楽器を「ストリングス+パッド」という曖昧な指定から、
    **チェロとヴァイオリンが同じフレーズを掛け合う=2人の声の比喩**という具体的な
    奏法指定に変更(`Solo Cello And Violin Trade The Same Phrase Like Two Voices`)。
    → **この案はユーザーに却下された**。独奏弦楽器のデュオはクラシック室内楽的で、
    YuRaというキャラクターの世界観から浮く、という指摘(後述の再々修正で解消)。
  - 文字数は965文字(圧縮前は1005文字で規定オーバーだったため、冗長な修飾を削って
    調整)。
- **最大の反省: 当初の「『祈り、終われば』のような曲を作る」という出発点を見失っていた**
  (2026-09-15)。ユーザーからの指摘:「最初は『祈り、終われば』みたいな曲って言ってたん
  だからスタイルも近いものにした方がいいんじゃない?」。中島美嘉のあの曲はピアノ主体の
  壮大なオーケストラバラードであり、**そもそも最初のFuture Garage版の時点で参照曲と
  合っていなかった**。「聴いたことある」という指摘への対処(ジャンル名の全廃)に
  気を取られ、"何に似せたかったのか"という一番上位の軸を確認せずに音作りを進めて
  しまったのが原因。
  - 教訓: **参照曲(「◯◯のような曲にしたい」)が最初に提示されている場合、
    スタイルプロンプトを作り直すたびに「その参照曲の方向に近づいているか」を
    毎回照合すること。** 個別の指摘(ジャンルが被る/音が古い等)への対処は、
    参照曲という上位の軸の中で行う。これは清宮栞の「爽秋」で「気持ちのいい歌に
    したい」という温度の要望をジャンル変更の許可と誤解した事故と、同じ構造の
    ミス(上位の枠を保ったまま下位を調整すべきところで、枠自体を外してしまう)。
  - 最終形: グランドピアノを冒頭から主役に据え、サビでフルオーケストラの
    ストリングスが押し寄せる編成に変更。電子系の要素(Off-Grid Hi-Hats、
    アナログパッド、テープサチュレーション)と却下されたチェロ&ヴァイオリンの
    デュオを全て削除。呼吸音のレイヤーと心臓の鼓動のサブベースという、
    テーマを音に翻訳した2つの技法だけはバラード編成の中でも機能するため継承した。
  - BPMも124→76に変更。124はFuture Garage前提の速さでバラードには不適切だった。
    76は安静時心拍(60前後)よりわずかに速い値で、`Sub-Bass Heartbeat Pulse`
    という指定と数字の意味が繋がる(清宮栞「心音」の60Bpm=安静時心拍そのもの、
    とは意図的に別の値にしている)。
- **スタイルプロンプトを983文字→675文字に圧縮**(2026-09-15)。ユーザーからの指摘:
  「千文字ギリギリまで使えって言ってるわけじゃないのよ、少なければ少ない方が良い、
  その中でどの場所のどのタイミングでこの楽器もしくはボーカルが、歌い方や演奏方法の
  指示がされてる事が重要なんだよ」。削ったのは、(1)ボーカルが埋もれない指示の3重複、
  (2)Verseの近接ボーカル指示の2重複、(3)`Cinematic Emotional Arc, Strong Dynamic
  Contrast`という情報量ゼロのムード語。**圧縮の過程で、「Verseではストリングスを
  鳴らすな」という最も重要なタイミング指示が抜けていたことが発覚し、
  `No Strings Until The Chorus`を追加した。** 詳細はCLAUDE.mdの該当章に記録。
- **ユーザー改稿(2026-09-15、最新)**: Verse 1を「強く握る」に簡略化(こちらが提案した
  「そっと強く」の矛盾語ペアは不採用)、Verse 2の締めを「今は、まだ平気」に変更(強がりの
  ニュアンスを追加)、`明日(あす)`のルビ技法を追加。Chorusは5行に拡張され、最終行が
  「貴方を 感じていたい」という**曲中で初めて二人称を明示する行**になった。Chorus Tagは
  「声に出せなくても……」と言い切らずに途切れる形に変更(既存技法「未解決のまま終わらせる」
  の実践)。Outroは5段階のリフレインに拡張され、最後が「そして忘れないで…」という、
  抱擁から記憶へと願いの対象が変わる新しい一行で締められる形になった。
- **ユーザー改稿でOutroを2行→4行に拡張**(2026-09-15)。「抱きしめて もっと強く、抱きしめて」
  「痛いくらい、抱きしめて」という2行から、「抱きしめて もっと強く」「抱きしめて、痛いくらい」
  「今のうちに...」「抱きしめて…」の4行に変更。動詞(抱きしめて)を先に置き修飾語を
  後に続ける倒置に変わり、「今のうちに...」という新しい行で"時間切れが迫っている"
  切迫感を、抽象的な説明language(「終わりがあるから」等、初稿で問題になった言い回し)
  ではなく口語の呼びかけとして追加。三段階リフレイン(抱きしめて→もっと強く→痛いくらい)
  の技法自体は維持しつつ、フェードアウトの最後の一言（抱きしめて…）に向けて余韻を
  より長く引き伸ばす形になった。

## スタイルプロンプト

```
YuRa,
Powerful Female Vocal, Front And Center Vocal, Strong Vocal Presence,
Whispered Close-Mic In The Verses, Full Aching Belt In The Chorus, Back To A Whisper In The Outro,
Audible Breath Between Phrases, Natural Grain, Slight Pitch Wave,

76 Bpm,

Solo Grand Piano In The Intro, Then Sustained Chords Under Every Verse,
No Strings Until The Chorus, Then A Full Orchestral Swell Beneath The Vocal,
Sub-Bass Heartbeat Under The Verses, Tightening Into The Chorus,
Sampled Breath In The Quiet Sections Only,
Piano Alone At The Top Of The Instrumental Break, Strings Rising In Behind It,

Vocal Always Louder Than The Strings,

Fade Out On Breath, No Choir, No Backing Vocals
```

## 歌詞

```
[Intro]
[Solo grand piano opening alone in a warm room, no vocal, distant]

[Verse 1]
[Hushed, intimate, close-mic]
触れた手のひら 少しだけ汗ばんでる
離さないように 強く握る

[Verse 2]
[Still intimate, quiet warmth]
隣で笑う 声が掠れてる
明日(あす)のことは まだ分からないけど
今は、まだ平気

[Verse 3]
[Breath catching, tension quietly rising]
その汗が 徐々に冷えていく
呼吸の音を、数える

[Chorus]
[Vocal opens, full emotional release, lead vocal stays dominant as strings swell beneath]
世界が全部 消えてしまっても
この手の 熱だけは覚えていて
繋いだ手に 爪が食い込むほど
声に出せなくても
貴方を 感じていたい

[Instrumental Break]
[Extended instrumental, piano leads alone then the full string section rises beneath it, no vocal for a full extended passage before returning]

[Verse 4]
[Pulled back, quiet, the afterglow]
指を絡めて もう何も言わずに
肩に寄りかかる 重さだけが本当
窓の外が 少しずつ白(しら)んでいく
朝が来るのが 今だけは怖くない

[Chorus Tag]
[Brief hushed return, just the hook, not a full repeat]
声に出せなくても……

[Outro]
[Vocal fading to a whisper, gentle]
抱きしめて、もっと強く
抱きしめて、痛いくらい
抱きしめて、私の全てを感じて
抱きしめて、今のうちに
抱きしめて…
そして忘れないで…
```
