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
- **「歌詞(歌う行)を増やしてほしかった」と指摘を受け、インストブレイクでは解決にならない
  ことに気付き、Verse 1・Verse 2を8行→12行に拡張(2026-09-12)**。どちらも場面を飛ばさず、
  同じシーンの中でディテールを増やす形にした:
  1. Verse 1: 「古い蝶番/軋む音がする」(木箱を開ける動作の途中)、「木目に残る/小さな傷跡」
     (弦に触れた後)を追加。木箱を開ける、という1つの場面の中でディテールを増やした。
  2. Verse 2: 「指先が覚えた/結び方をなぞる」「巻き直すたび/合わせる音が変わる」を
     弦を張り替える描写の冒頭に追加。チューニングという具体的な動作を増やし、
     抽象的な感情語(迷い等)に飛ぶ前の実際の手の動きを描いた。

## スタイルプロンプト(Voice機能用)

```
Crystal-Clear Lead Vocal, Lead Vocal Focus, Front And Center Vocal,
Strong Vocal Presence, Powerful Belted Delivery,

Future Garage, Japanese Anime Anthem, Uk Garage Groove,
170 Bpm,

Lute, Driving Rhythmic Strumming, Lead Melodic Motif,
Lute Forward In The Mix, Cutting Through Alongside The Vocal,
Rolling Sub Bassline, Chopped Vocal Fragments, Shuffling Breakbeat Hi-Hats,
Soaring Synth Brass, Orchestral String Stabs, Powerful Taiko-Style Toms,

Ancient Yet Futuristic, Defiant Yet Hopeful,

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
木目に残る
小さな傷跡
それでも確かに
ここまで繋がる

[Pre-Chorus]
[Building energy, electronic drums creep in]

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
怖さは増えるけど
鳴らない理由には
ならないだろう

[Instrumental Break]
[Lute solo, driving rhythm returns, a single whispered phrase cuts through]

(誰かが、ここにいた)

[Bridge]
[Stripped back, only lute remains, then building as the full band slams back in]

声が届くかはわからない
けど この震えは嘘じゃない
弱さも怖さも
この音に乗せて
刻(とき)を継ぐ声が
今、重なっていく

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
