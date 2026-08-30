# ゆずっとマジック☆

ボーカル: 一ノ瀬柚葉(いちのせ ゆずは)
テーマ: 合い言葉・元気の呪文歌(アイドルソングというジャンルそのものとしての機能を重視)
ジャンル: Cute Denpa Pop(10曲目「最推しにして♡」の系統を継続)
モチーフ: 「しゅわっと」「ゆずっと」という、この曲だけの合い言葉(柚葉の名前とかけている)

## 制作メモ(教訓)

- 「アイドルソング」というお題に対し、最初は「本番前の緊張」「可愛さの裏の努力」等、
  **アイドルの内面を歌う曲**を提案してしまったが、ユーザーが求めていたのは
  **ライブで機能する、ファンとの掛け合い・合言葉としてのアイドルソングそのもの**だった。
  「アイドルソング」というお題は、内容のジャンルではなく形式のジャンルとして捉えること。
- Call And Responseのカッコ内(応答部分)を、最初は「誰が歌うか」を明示しないまま書いてしまった。
  スタイルプロンプトの「Call And Response」と「No Crowd Vocals」も矛盾していた。
  → ファンのコール&レスポンスを望んでいたため、「No Crowd Vocals」を外し、
  `[Crowd Chant Response]`のようにブラケットで明示する形に修正。
- ハイテンポ(170Bpm)のアイドルソングなのに、1行14〜17音の長いフレーズのまま書いてしまい、
  歌いやすさを無視していた。「最推しにして♡」本家の「推して！推して！私を推して！」のような
  **短い断片の連打**が正解だったので、全行を短く割り直した。
- アウトロの「呪文 唱えような」は文法的に不自然(伝聞・推量のニュアンスが混ざる)。
  「唱えようね」の方が自然な誘いかけになる。

## スタイルプロンプト

```
Cute Denpa Pop,
Azato-Cute Female Vocal,
Playful And Teasing Vocal Delivery,
Hyper Energetic,
Fast Tempo,

Bouncy Electronic Bass,
Bright Synth Leads,
Sparkly Arpeggios,
Playful Arcade Synths,

Catchy Vocal Hooks,
Lead Call And Fan Chant Response,
Crowd Response Vocals On Key Phrases,
Sudden Breaks,
Addictive Repetition,

Punchy Modern Mix,
Vocal Forward,
Front And Center Vocals,

170 Bpm,

Clear Defined Sound,
Competitive Loudness
```

## 歌詞

```
[Intro]
ねえねえ
元気ない顔
してるでしょ
バレてないと
思った?

[Verse 1]
欠伸 隠しても
目の下のクマは
隠せてないよ
「大丈夫」って
何回目?
そのセリフ
もう聞き飽きたよ

制服のシワも
今日は多めじゃない?
気づいてるよ
ちゃんとね
だから今から
呪文 かけちゃう

[Pre-Chorus]
指先で
天使の輪っか
描いて
準備はいい?
3、2、1

[Chorus]
[Lead Vocal]
しゅわっと魔法で
元気になあれ
ゆずっと弾けて
笑顔になあれ
ほら 声出して
一緒に言って
しゅわっと魔法で
元気になあれ

[Verse 2]
布団の中で
こっそり
呪文の練習
してたでしょ
バレてるよ
その動画
ちゃんと見てるから
大丈夫

[Pre-Chorus]
今度は
ちゃんと声
合わせて
準備はいい?
3、2、1

[Chorus]
[Lead Vocal]
しゅわっと魔法で
元気になあれ
ゆずっと弾けて
笑顔になあれ
ほら 声出して
一緒に言って
しゅわっと魔法で
元気になあれ

[Call And Response]
[Lead Vocal]
しゅわっと！
[Crowd Chant Response]
(しゅわっと！)
[Lead Vocal]
ゆずっと！
[Crowd Chant Response]
(ゆずっと！)
[Lead Vocal]
元気になあれ！
[Crowd Chant Response]
(なあれ！)

[Break]
[Sudden Silence]
せーの…

[Bridge]
本当は
魔法なんて
存在しないけど
ちょっとだけ
顔上げて
くれたら
それでもう
十分魔法だよ

[Final Chorus]
[Lead Vocal]
しゅわっと魔法で
元気になあれ
ゆずっと弾けて
笑顔になあれ
今日も一緒に
言えたね
しゅわっと魔法で
元気になった?

[Outro]
また明日も
呪文 唱えようね
ばいばーい♡
```
