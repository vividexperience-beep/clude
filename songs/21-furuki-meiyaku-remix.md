# 古き盟約 — リミックス版(158Bpmダブルタイム)

元曲: `songs/21-furuki-meiyaku.md`「古き盟約」(170Bpm、Future Garage×リュート)
用途: ユーザーがSunoのVoice機能でYuRaを選択し、158Bpmのダブルタイム・ブレイクビートで
リミックスしたバージョン。スタイルプロンプートの書式も、カンマ列挙から一文の散文形式に
変更されている(技法引き出し「プロンプトの書式そのものも選択肢の一つ」の実例)。

## 制作メモ

- ユーザー自身が一文スタイルでリミックス用プロンプートを作成。テンポを170→158Bpmの
  ダブルタイム・ブレイクビートに変更し、楽器指定も圧縮した独自表現に書き直している。
- Voice機能でYuRaを選択する前提のため、当初案にあった`The User's Own Recorded Voice`
  (声の正体を説明する記述)は削除。CLAUDE.md「Sunoの『Voice』機能を使う場合のプロンプト
  条件」により、声の正体はVoice選択が規定するため、ミックス配置の指示(`Front And Center
  Vocal`等)だけを残した。
- **「ボーカルの声が小さい」という報告を受けて2箇所を追加**: `Never Buried Beneath The
  Instrumental, Mixed Loud And Forward`(音量確保の直接指示、「魂の10連」の教訓の応用)。
  また`Spacious Surgical Separation`の`Surgical`が標準語彙でない懸念があったため
  `Spacious Mix With Clean Instrument Separation`に差し替えた。
- **歌詞側で`[Instrumental Break]`を完全インスト(ささやき台詞なし)にする改稿が
  入ったため、スタイルプロンプート側の`Whispered Phrase In The Lute Solo`も
  `Instrumental Lute Solo Break`に修正**(2026-09-12)。スタイルとブラケット/歌詞本文の
  整合性を毎回確認する標準プロセスの実践。

## スタイルプロンプト(一文形式、Voice機能用)

```
Front And Center Vocal, Crystal-Clear Powerful Belt, Tight Rhythmic Phrasing,
Never Buried Beneath The Instrumental, Mixed Loud And Forward,
Driving Double-Time Breakbeat At 158 Bpm, Spacious Mix With Clean Instrument Separation,
Rolling Sub Bass, Lute-Led Driving Strumming And Melodic Motif,
Pounding Breakbeat Drums With Double-Kick Accents, Taiko-Style Toms, Orchestral String Stabs,
Cinematic Riser Synth, Instrumental Lute Solo Break,
Half-Step Lift Into The Explosive Final Chorus, Hard-Stopped Final Lute Strike
```

## 歌詞

`songs/21-furuki-meiyaku.md`の最新版と同じ(ブラケットは158Bpm版の編成に合わせて
解釈されるが、文面は共通)。

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
```

(Outro末尾の「鳴り止まない」を残すかは、元曲ファイルと合わせて未確定)
