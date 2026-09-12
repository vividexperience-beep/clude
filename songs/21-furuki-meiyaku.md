# 古き盟約

ボーカル: YuRa — SunoのVoice機能(声そのものをYuRaでクローン指定)を使う前提
テーマ: 時を超えた誓い(古いリュートの弦)を胸に、今再び立つ。戦闘系アニメOP方向
ジャンル: Future Garage × リュート(電子×生楽器)のハイブリッド、170Bpm
モチーフ: 古い木箱にしまわれたリュート、擦れた指跡、震える弦。「誰かの祈り・約束」を
楽器そのものに宿らせ、今それを継いで立ち上がる構図

## 制作メモ

- **タイトルは「古き盟約」に再確定(2026-09-12、ユーザー決定)**。当初案「約束(ちかい)の音」
  から変更。「盟約」は誓い・同盟の約束を指す実在の言葉で、ルビを使わずそのまま「古き盟約」で
  「時を超えた誓い」というテーマを直接言い当てている。歌詞本文中の`消えない約束`という
  フレーズ自体は変更していない(タイトルと歌詞本文で同じ概念を別の言葉で表す形)。
- **SunoのVoice機能を使う前提の曲**。CLAUDE.md「Sunoの『Voice』機能を使う場合のプロンプト
  条件」に従い、声そのものの特性フレーズ`Powerful Female Vocal`(性別+音圧の形容)のみ
  削除し、ミックス配置・存在感の指示(`Front And Center Vocal, Strong Vocal Presence,
  Crystal-Clear Lead Vocal, Lead Vocal Focus`)は残した。**2026-09-12訂正**: 初稿では
  `Front And Center Vocal, Strong Vocal Presence`も削除対象と誤解していたが、
  ユーザーから「削除するのは声の特性そのもの(パワフルな女性ボーカル等)であり、
  ミックス配置・歌い方の指示は除外」と明示され、この2フレーズを追加した。
- ジャンルはYuRaの中心ジャンル「Future Garage」と、新規に「リュート」という生楽器を
  組み合わせたハイブリッド実験。リュートを彩りでなく**主役の牽引楽器**に格上げし、
  電子的なガレージグルーヴと生々しい撥弦楽器を対比させた(技法引き出し「和楽器や
  実在する地域の祭礼リズムを主役の牽引楽器に格上げする」の応用)。
- テーマは当初「ヒューマンドラマアニメのOP」方向で複数案を検討したが、最終的に
  ユーザーの希望で「戦闘系アニメOP」に変更。さらに「時を超えた誓い(糸/楽器)を胸に、
  今再び立つ」という、リュート(古い楽器)をテーマそのものに組み込む案を選んだ
  (音とテーマが一致する技法の応用)。
- ルビ技法を2箇所使用: `約束(ちかい)`(タイトルと同じ)、`刻(とき)`(「瞬間→とき」とは
  別の漢字で同じ読みを当てる新例。「刻む」という字面から「刻まれた時間・誓い」の
  ニュアンスを持たせた)。
- アンセム系の技法を踏襲: サビは「立てよ、今」という一語的な掛け声で始める
  (Vis Fati「撃ち抜け！」、Asteríā「錆びた心臓を撃ち鳴らせ」と同系統)。英語の
  決め台詞"We rise again"を挟む英日ミックスも継続。「私」でなく「We」の一人称複数で
  宣言する技法も使用。
- Final Chorusでフック(「立てよ、今」「鳴らせ、この音を」)は残しつつ、「誰かの祈り/
  この手に継いで」→「誰かの祈り/もう一人じゃない」、「古い弦が胸で鳴る」→
  「古い弦よ吼えろ」と後半を書き換え、個人の継承から集団的な連帯への変化をつけた。
- 具体描写を徹底: 「埃をかぶった木箱」「触れた弦」「名前も知らない誰かの指跡」
  「切れた弦を張り替える夜」など、抽象的な感情語ではなくモノ・動作で心情を語った
  (AI構文回避ルールの実践)。
- **ユーザーが歌詞を一部改稿(2026-09-12)**。「折れた弦」→「切れた弦」(語感の調整)。
  サビの`消えない約束(ちかい)`から**ルビを外し、意図的に「やくそく」で歌わせる**方針に
  変更(ユーザー確認済み)。タイトルの`約束(ちかい)`自体は変更せず、本文中だけ標準読みに
  戻した形。
- **転調を追加(ユーザー要望)**。Final Chorus直前で半音上げる`Key Change Up A Half-Step
  Into The Final Chorus`をスタイルプロンプトに追加し、歌詞ブラケットの`[Final Chorus]`にも
  `key change up a half-step`を明記。アンセム/アニメ主題歌で定番の、畳みかけの最後にもう一段
  持ち上げる技法。
- **歌詞の尺が短く、3分程度の曲になってしまうという指摘を受け、2箇所を拡張(2026-09-12)**。
  1. Verse 2とBridgeの間に`[Instrumental Break]`(リュートソロ+ささやき1行)を新設。
     `[Instrumental]`ブラケット内に台詞を1行だけ置く技法(技法引き出し参照)を、初めてリュートの
     ソロ回しに応用した。ささやき`(誰かが、ここにいた)`は、先祖・過去の誰かの存在を
     直接言葉にせず暗示する行。
  2. Bridgeを2行から6行に拡張。前半(「声が届くかはわからない/けど この震えは嘘じゃない」)の
     静かな告白はそのまま残し、後半に「弱さも怖さも/この音に乗せて/刻(とき)を継ぐ声が/
     今、重なっていく」という高まりの4行を追加。ブラケット`then building as the full band
     slams back in`とも整合させ、静→動の変化を歌詞本文でも実際に描くようにした。
- **ボーカルとリュートを両方最前列に(ユーザー要望、2026-09-12)**。ボーカルは既に
  `Front And Center Vocal, Strong Vocal Presence`で指定済みだったが、**リュート側には
  ミックス配置の指定が無かった**ため、`Lute Forward In The Mix, Cutting Through
  Alongside The Vocal`を追加。主役の牽引楽器に格上げしたリュートが、電子楽器群に
  埋もれずボーカルと並んで前に出るようにした。
- **「ボーカルがくぐもって聴こえる」というフィードバックを受けて調査(2026-09-12)**。
  原因として2つ考えた:
  1. `Chopped Vocal Fragments`というタグが、Future Garageの定番技法(バッキングサンプルを
     刻む)のつもりだったが、「ボーカル」としか書いていなかったため**リードボーカル自体に
     刻み・フィルター処理がかかってしまった可能性**がある。`Chopped Backing Vocal
     Samples`に書き換え、バッキング用途だと明示した。
  2. リードボーカルの明瞭さ自体(Bright/Crisp/Dry)を直接指定するタグが無かった。
     `Bright Vocal Tone, Crisp Clear Diction, Dry Vocal, Minimal Reverb On Lead Vocal`
     を追加した。
- **Suno向けプロンプトのリサーチを実施(2026-09-12)**。外部記事([Medium: Ultimate Suno
  AI Prompt Guide](https://medium.com/@abhisheksd2003/the-ultimate-suno-ai-prompt-guide-with-clear-tested-examples-2d827ffe8b3a)、
  [HookGenius: Fix Suno Mumbling](https://hookgenius.app/learn/fix-suno-mumbling/)、
  [HookGenius: Fix Muddy Suno Audio](https://hookgenius.app/learn/fix-suno-low-quality/))から
  技法のみ抽出(語句は流用せず独自に書き直し)。**最大の発見: タグが20個を超えると
  タグ同士が打ち消し合ってミックスが濁る**、という既存の「短いプロンプトの方が効く」
  知見と一致する情報。この曲のボーカル欄は9個まで肥大していたため、重複するタグを
  削って6個に圧縮した(`Lead Vocal Focus`→`Front And Center Vocal`と重複、
  `Strong Vocal Presence`→同様、`Crisp Clear Diction`→`Bright Vocal Tone`と重複、
  として削除)。
- **「全部の楽器の輪郭がはっきりしない」という追加フィードバックを受け(2026-09-12)**、
  ボーカルだけでなく楽器全体のミックス分離を明示する`Polished Professional Mix,
  Clean Separation Between Every Instrument`を追加。同時にリュート関連のタグも
  5個(`Lute, Driving Rhythmic Strumming, Lead Melodic Motif, Lute Forward In The
  Mix, Cutting Through Alongside The Vocal`)→4個(`Lute, Driving Rhythmic
  Strumming, Lead Melodic Motif, Forward In The Mix`)に圧縮し、タグ追加と同時に
  重複を削ることで総量を増やさないようにした。
- **「歌詞(歌う行)を増やしてほしかった」と指摘を受け、インストブレイクでは解決にならない
  ことに気付き、Verse 1・Verse 2を8行→12行に拡張(2026-09-12)**。どちらも場面を飛ばさず、
  同じシーンの中でディテールを増やす形にした:
  1. Verse 1: 「古い蝶番/軋む音がする」(木箱を開ける動作の途中)、「木目に残る/小さな傷跡」
     (弦に触れた後)を追加。木箱を開ける、という1つの場面の中でディテールを増やした。
  2. Verse 2: 「指先が覚えた/結び方をなぞる」「巻き直すたび/合わせる音が変わる」を
     弦を張り替える描写の冒頭に追加。チューニングという具体的な動作を増やし、
     抽象的な感情語(迷い等)に飛ぶ前の実際の手の動きを描いた。
- **「楽器を減らせないか、以前楽器が少ない時の方が音が良かった」という指摘を受け、英語圏を
  含めてリサーチ(2026-09-12)**。ソース:
  [Medium: How to Improve Suno AI Sound Quality](https://james-palm.medium.com/how-to-improve-suno-ai-sound-quality-without-losing-vocals-7-proven-methods-for-2026-691e1c2a4558)、
  [NeuralAnalog: Improve Suno AI Audio Quality](https://neuralanalog.com/docs/improve-suno-ai-audio-quality)。
  技法のみ抽出(語句は流用せず書き直し): **「楽器を増やすほど良い演奏になる」は誤解で、
  増やしすぎると各楽器が互いをマスキングし合い、ステレオの場が混雑し、音の破綻が増える**。
  `Spacious`(余白のある)という単語が、Sunoに周波数の空間を空けさせる効果的なキーワード
  として紹介されていた。
  これに基づき2箇所を削除:
  1. `Soaring Synth Brass`を削除。残った盛り上がり系2つ(Orchestral String Stabs、
     Taiko-Style Toms)より、創和楽器とオーパヴント(古い誓い・和太鼓)とのテーマ的な
     相性が一番薄かったため(ユーザー確認済み)。
  2. `Chopped Backing Vocal Samples`を削除。Future Garageのジャンル特徴として追加した
     タグだったが、バッキングでも"ボーカル"の帯域を使うため、「ボーカルがくぐもる」
     問題の原因調査で名前が出たタグでもあり、リードボーカルの明瞭さを優先して削除
     (ユーザー確認済み)。
  また`Spacious Mix`を新規タグとして追加した。
- **「戦闘系アニメOPになり得るか」と聞かれ、正直に課題を伝えたところ「攻撃的でいこう」と
  決定(2026-09-12)**。指摘した課題は、土台のFuture Garageが元々ムーディな電子ジャンルで、
  ドラムも`Shuffling Breakbeat Hi-Hats`(揺れるグルーヴ系)止まりだったこと。これを
  `Pounding Breakbeat Drums, Double-Kick Accents`に差し替え、殴りつけるような推進力を
  追加。ジャンル欄も`Japanese Anime Anthem`→`Aggressive Japanese Anime Anthem`に修飾語を
  足し(新規タグを増やさず既存タグに形容詞を足す形)、ムードタグも`Defiant Yet Hopeful`→
  `Ferocious Yet Reverent`(攻撃性と、古い誓いへの敬意という相反するムードを組み合わせる
  既存技法)に変更。
  **スタイル変更後のブラケット確認で1箇所見落とし(2026-09-12)**。最初に`[Cold Open
  Chorus]``[Instrumental Break]``[Bridge]``[Final Chorus]`の「強く入る」系の表現だけを
  見て「矛盾なし」と判断したが、`[Pre-Chorus]`の`electronic drums creep in`
  (そっと入ってくる)を見落としていた。`Pounding Breakbeat Drums, Double-Kick Accents`
  (殴りつける・アクセントの強いドラム)とは温度が合っていなかったため、`pounding drums
  punch in`に修正。**ブラケット確認は全セクションを一つずつ見ること**、「強い変更がある
  部分だけ」を見て済ませると見落とすという実例として記録。

## スタイルプロンプト(Voice機能用)

```
Crystal-Clear Lead Vocal, Front And Center Vocal, Bright Vocal Tone,
Dry Vocal, Minimal Reverb, Powerful Belted Delivery,

Future Garage, Aggressive Japanese Anime Anthem, Uk Garage Groove,
170 Bpm,

Lute, Driving Rhythmic Strumming, Lead Melodic Motif, Forward In The Mix,
Rolling Sub Bassline, Pounding Breakbeat Drums, Double-Kick Accents,
Orchestral String Stabs, Powerful Taiko-Style Toms,

Spacious Mix, Polished Professional Mix, Clean Separation Between Every Instrument,

Ancient Yet Futuristic, Ferocious Yet Reverent,

Key Change Up A Half-Step Into The Final Chorus,
Explosive Final Chorus, Hard Stop Ending, No Fade Out
```

## 歌詞

```
[Cold Open Chorus]
[Full powerful belt, hits immediately, lute riff slams in with the beat]

立てよ、今
古い弦が胸で鳴る
誰かの祈り
この手に継いで
We rise again
刻(とき)を超えて
消えない約束
鳴らせ、この音を

[Verse 1]
[Close, lute motif alone beneath the voice]

埃をかぶった
木箱を開けて
古い蝶番
軋む音がする
触れた弦が
微かに応える
名前も知らない
誰かの指跡
木目(もくめ)に残る
小さな傷跡
それでも確かに
ここまで繋がる

[Pre-Chorus]
[Building energy, pounding drums punch in]

震える弦に
指を重ねれば
かすれた声が
混ざって聞こえる

[Chorus]

立てよ、今
古い弦が胸で鳴る
誰かの祈り
この手に継いで
We rise again
刻(とき)を超えて
消えない約束
鳴らせ、この音を

[Verse 2]
[Confident, rhythmic delivery]

切れた弦を
張り替える夜に
指先が覚えた
結び方をなぞる
巻き直すたび
合わせる音が変わる
迷いも全部
音に変えていく
前に立つほど
怖(こわ)さは 増えるけど
弾(ひ)かない理由には
ならないだろう

[Instrumental Break]
[Lute solo, driving rhythm returns, fully instrumental, no vocal]

[Bridge]
[Stripped back, only lute remains, then building as the full band slams back in]

声が届くかは わからない
けど この震えは嘘じゃない
弱さも怖さも
この音に乗せて
刻(とき)を継ぐ声が
今、重(かさな)る

[Final Chorus]
[Maximum energy, key change up a half-step, full band, crystal-clear lead vocal]

立てよ、今
古い弦よ吼えろ
誰かの祈り
もう一人じゃない
We rise again
刻(とき)を超えて
消えない約束
鳴らせ、この音を

[Outro]
[Final lute strike rings out alone, hard stop]

鳴り止まない
```
