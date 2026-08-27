# 濡れないように

ボーカル: YuRa(この曲は「僕」視点の男性キャラクターをYuRaが演じるキャラクターソングとして確定)
テーマ: 守れなかったものへの後悔と前進(死別・泣きゲー風)
ジャンル: Japanese Alternative Electronic Rock(エレクトロニック+エモーショナルギター、ピアノは冒頭と
アウトロの断片のみ)
モチーフ: 傘(あの日持たずに走った→今は手放せない習慣→最後に、眠る場所へ持っていく)

## 制作メモ(教訓)

- 初稿はサビ・ブリッジが丸ごと抽象的なナレーション(「だからもう迷わない」「これが私にできるたったひとつの
  恩返しだから」等)になっており、AI構文そのものだった。傘というモチーフをAメロだけで使い、サビ以降で
  具体描写を放棄していたのが原因。→ 全セクションを通して傘の物理的な描写・行動だけで語るよう書き直した。
- 書き直し後も「傘を忘れないようにしている」だけでは泣ける強度が足りないという指摘を受けた。
  **喪失の重さ(取り返しがつかないこと)が曖昧だと、どれだけ具体描写が上手くても感情のピークが弱い。**
- 死別だと分からせる一言を最後に置く設計にしたが、最初に書いた「命日」は**直接的すぎて説明的**(これも
  一種のAI構文)。ユーザーの修正「君の眠る場所」は、直接的な単語を使わず、婉曲表現だけで同じ情報を伝える
  好例。**衝撃の事実を明かす場面でも、直接的な単語(命日、お墓、死んだ等)ではなく、婉曲的な言い回しを
  選ぶ**のが、ユーザーのセンス。
- ユーザーが「好きな他ユーザーのプロンプト」を参考として貼ってくれた際、そのタグをほぼそのまま
  流用してしまう事故が発生した(「丸パクリじゃねーか」と指摘された)。**参考プロンプトからは技法だけを
  抽出し、言葉は必ず自分たちで一から書き直す**こと。ジャンルもEmotional Piano Ballad/OrchestralからJapanese
  Alternative Electronic Rock系に差し替えている(オリジナル版はgit logで前のコミットから確認可能)。
- 「折りたたみ傘が かばんから消えない」(17音)のように、一行の音数が長すぎて歌えない行があった。
  セクション内で音数を8〜11音程度に揃えると歌いやすくなる。書き言葉的な名詞化構文(「〜ことのないままで」)
  も歌いにくいので、口語的な言い切りに直す。
- 「コンビニの軒先」は建築的に誤り(軒先/軒下は和風建築の言葉で、コンビニのような現代建築の庇には
  使わない)と指摘された。**歌詞に出す場所・モノの描写は、実在するかどうかを確認する。** 「コンビニの前」
  のようなシンプルな表現の方が正確かつ歌いやすい。
- グリッチ/ブロークンビート系の質感(Micro Glitch Percussion等)を入れすぎると「シャカシャカして
  感情移入できない」という指摘を受けた。**面白い音響的技法よりも感情の伝わりやすさを優先する。**
  ボーカルも全編「抑制」で統一するのではなく、**Aメロは親密に抑えめ、サビでは声を解放する**という
  明確な緩急をつけた方が感情が伝わる。
- ユーザー自身が歌詞を「あなた/私」から「君/僕」に書き換えた。YuRa(女性ボーカル)が男性視点の
  キャラクターソングとして歌う形で確定。加えて、チョラスを繰り返しごとに完全に同一にせず、
  一部の行を変えて情報を少しずつ足していく手法(1回目:習慣の理由、2回目:「君」自身の台詞の
  引用)や、Final Chorusで「いつか報われる」という希望を捨てて「もう来ないけど、それでも後悔では
  ない」という、より重いが穏やかな受容に着地させる技法が使われている。

## スタイルプロンプト

```
YuRa,
Powerful Female Vocal,
Front And Center Vocal,
Strong Vocal Presence,
Intimate And Vulnerable In The Verses,
Voice Breaking Open With Feeling In The Chorus,

Japanese Alternative Electronic Rock,
Melancholic Atmosphere,

108 Bpm,

Deep Heartbeat Kick,
Warm Sub Bass,
Steady Driving Pulse, Not Cluttered,
Clean Simple Groove, No Busy Percussion,

Lead Guitar Carrying The Unspoken Words,
Guitar Motif That Returns But Never Resolves,
Minor-Key Harmony, Never Fully Landing,

Felt Piano Fragment At The Start And End,
Piano Phrase Left Hanging, Never Finished,

Sparse And Quiet In The Verses,
Layers Building Slowly Into A Full Emotional Swell,
Chorus Sung With Full Aching Emotion, Not Held Back,

Wide Stereo Atmosphere,
Cold, Distant Warmth,
No Crowd Vocals,
Avoid Resolved Happy Ending,
Ending Without Closure
```

## 歌詞

```
[Intro]
[Piano fragment, left unfinished]
[Lead Vocal, hushed and distant]

傘を持たずに
濡れた
君の笑顔が
忘れられない

[Verse 1]
[Lead Vocal]
[Intimate, vulnerable, close to a whisper]

少し遅れた だけなのに
軒下は もう空っぽで
傘を強く 握りしめた
雨の中に ひとり立った

濡れた前髪で 笑ってた
「平気」って言う 声だけが
今もずっと 消えないまま
何も言えず うつむいた

[Pre-Chorus]
[Lead Vocal]
[Quiet tension rising, breath catching]

あの日から
傘が 手放せない

[Chorus]
[Lead Vocal]
[Powerful Female Vocal]
[Voice breaking open, full emotional swell]

晴れた日も
傘を持つ
天気予報
見なくても
君の濡れた姿が
見たくなくて
ニ本の傘が
玄関に 並んでる

[Verse 2]
[Lead Vocal]
[Intimate, vulnerable, close to a whisper]

校舎の前で
傘忘れた 君を見た
声をかけようとして
足が止まる

まだ 差し出せない
あの日のままの
僕がいる

[Pre-Chorus]
[Lead Vocal]
[Quiet tension rising, breath catching]

足を止める
その時間に
「よかったら」の
一言が出ない

[Chorus]
[Lead Vocal]
[Powerful Female Vocal]
[Voice breaking open, full emotional swell]

晴れた日も
傘を持つ
天気予報
見なくても
君が言う
「二本あれば
安心だね」って
今も一本は
開かれない ままで

[Instrumental Interlude]
[Guitar carries what the voice couldn't say, aching and unresolved]

[Bridge]
[Lead Vocal]
[Intimate Vocal, aching regret]

コンビニの 前へ走り出す
傘を持たない 君へ
「よかったら」って
言えたらよかったのに…

[Final Chorus]
[Lead Vocal]
[Powerful Female Vocal]
[Voice fully open, aching at its peak]
[Guitar answering the vocal line]

晴れた日も
傘を持つ
それは もう
後悔じゃない
君のために
差し出すはずの
片方の傘が
開かれる時は
もう来ないけど

[Outro]
[Piano fragment returns, still unfinished]
[Lead Vocal, quiet again, almost spoken]

明日は
君の眠る場所に
傘を持って
会いに行くよ

[end]
```
