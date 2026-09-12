# 古き盟約 — リミックス版(158Bpmダブルタイム)

元曲: `songs/21-furuki-meiyaku.md`「古き盟約」(170Bpm、Future Garage×リュート)
用途: ユーザーがSunoのVoice機能でYuRaを選択し、158Bpmのダブルタイム・ブレイクビートで
リミックスした最終版(2026-09-12、ユーザー「完成」確定)。

## 制作メモ

- スタイルプロンプートの書式がセミコロン区切りの句(それぞれの句の中はカンマ列挙)に
  変化。カンマ列挙・一文散文・セミコロン句切りと、このリミックスだけで3つの書式を
  経由した(技法引き出し「プロンプトの書式そのものも選択肢の一つ」の実践例)。
- **「ボーカルの声が小さい」問題への対応を、スタイルプロンプートだけでなく歌詞の
  全ブラケットに拡張**。`[Cold Open Chorus]``[Pre-Chorus]``[Chorus]``[Final Chorus]`
  すべてに「lead vocal front-and-center / loud / dominating」系の表現を個別に
  書き込み、曲全体を通してボーカル優先を多重に補強する形になった。
- オーケストラ層(`Taiko-Style Toms``Orchestral String Stabs``Cinematic Riser
  Synth`)を全て削除し、`Tight Punchy Kick, Focused Bassline, Sharp Snare Accents`
  というシンプルなリズム隊+リュートの編成に絞った。楽器を減らすほど音質が良かった、
  という以前の学びの延長。
- `[Bridge]`のブラケットを`Stripped back, only lute remains`から`Acoustic lute and
  raw exposed lead vocal only`に変更。歌詞本文にボーカルがある以上、「リュートだけが
  残る」より「アコースティックなリュート+剥き出しのボーカルだけ」の方が実際の構成を
  正確に言い当てている。
- **全セクションを一つずつスタイルとの整合性を確認(2026-09-12、標準プロセス)**。
  削除したオーケストラ楽器への参照がブラケット側に残っていないか、`Whispered
  Phrase`削除が`[Instrumental Break]`の「完全インスト」と一致しているか、
  `Crystal-Clear...Belt Vocal`等のボーカル表現が各ブラケットの`dominating`系
  表現と揺れなく対応しているかを確認し、修正不要と判断した。
- Outro末尾の「鳴り止まない」は、複数回確認した末にユーザーが追加しないまま
  「完成」と確定したため、**Outroは完全インスト(歌詞なし)で確定**と判断。

## スタイルプロンプト(Voice機能用)

```
Breakbeat; Crystal-Clear Intimate Belt Vocal, Front-And-Center And Extremely Loud,
Rhythmic And Confident; Driving 158 Bpm Double-Time Groove With Clear Dynamic Range
And Uncluttered Midrange; Tight Punchy Kick, Focused Bassline, Sharp Snare Accents;
Aggressive Lute Strumming And Riff-Led Instrumental Break; Cold-Open Chorus,
Half-Step Final-Chorus Lift, Hard-Stop Final Lute Strike
```

## 歌詞

```
[Cold Open Chorus]
[Lead vocal extremely front-and-center, loud mix, lute riff slams in]

立てよ、今
古い弦が胸で鳴る
誰かの祈り
この手に継いで
We rise again
刻(とき)を超えて
消えない約束
鳴らせ、この音を

[Verse 1]
[Intimate lead vocal upfront, minimal lute motif beneath voice]

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
[Building energy, sharp snare accents, lead vocal remains dominating]

震える弦に
指を重ねれば
かすれた声が
混ざって聞こえる

[Chorus]
[Full energy, loud lead vocal dominating the mix, driving rhythm]

立てよ、今
古い弦が胸で鳴る
誰かの祈り
この手に継いで
We rise again
刻(とき)を超えて
消えない約束
鳴らせ、この音を

[Verse 2]
[Confident, rhythmic vocal upfront, tight bass groove]

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
[Lute solo, driving breakbeat, fully instrumental, no vocal]

[Bridge]
[Acoustic lute and raw exposed lead vocal only, then band slams in]

声が届くかは わからない
けど この震えは嘘じゃない
弱さも怖さも
この音に乗せて
刻(とき)を継ぐ声が
今、重(かさな)る

[Final Chorus]
[Maximum energy, key change up a half-step, crystal-clear belt vocal dominating the mix]

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
```
