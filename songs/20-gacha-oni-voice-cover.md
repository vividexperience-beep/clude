# 魂の10連 — Voice機能カバー版

元曲: `songs/20-gacha-oni.md`「魂の10連」(四道壮琉・5人目キャラ・がなり担当)
用途: SunoのVoice機能(声そのものをクローン指定)を使って再生成する際のスタイルプロンプト

## 制作メモ

Voice機能を使う場合の標準ルール(CLAUDE.md「Sunoの『Voice』機能を使う場合のプロンプト条件」参照)に
従い、四道壮琉の固定声質フレーズ(`Raspy Gravelly Male Vocal, Husky Mid-Low Range, Smoky Dark
Timbre, Powerful Growl, Voice Cracking At The Edges, Aggressive Yet Controlled, Natural Vocal
Grain, Audible Breath`)をあえて削除し、`Powerful Male Vocal, Front And Center Vocal, Strong Vocal
Presence`という汎用の存在感指定に差し替えた(ユーザー判断、2026-09-11)。Voice機能自体が声の質感・
キャラクターを規定するため、がなり固有の声質指定は二重指定になる。

ジャンルも`Wicked Hard Rock`から`Wicked`を外して`Hard Rock`に簡略化し、`Wall Of Sound Density,
Heavily Compressed Master`のマスタリング指定も外した。歌詞ブラケットの演出タグ([Full growl]
[Confident growl]等)も全て外し、構造タグのみのシンプルな形にした。

歌詞本文は、Chorus 1「出るまで回せばいい」→「出るまで回せば」の圧縮、Final Chorusの後半
「出るまで回せばいい/それで俺の勝ちぃッ！！！」→「これ迄の 課金(どりょく)を/無駄にさせねぇぇッ！！！」
への変更(「課金」という字に「どりょく」という読みを当てる、彼方→かなたと同系統の意味ずらしルビ技法の
新例。ガチャへの課金を"努力"と言い換える皮肉・開き直りのニュアンス)をユーザー自身が加えた最終稿。

**四道壮琉の固定ボーカル(がなり声)は変更しない**。これはVoice機能使用時限定の一回限りの対応であり、
CLAUDE.mdの四道壮琉の固定プロンプトは従来のまま(`songs/20-gacha-oni.md`が標準版)。

## スタイルプロンプト(Voice機能用)

```
Hard Rock,
Sinister Blues-Rock Edge,
140 Bpm,
Powerful Male Vocal,
Front And Center Vocal,
Strong Vocal Presence,
Heavy Distorted Guitar Riffs,
Grinding Palm-Muted Chug,
Doubled Rhythm Guitars,
Driving Rock Drums,
Punchy Snare,
Double-Kick Accents,
Dirty Growling Bass,
Menacing Yet Comedic,
Self-Aware Camp,
Decisive Ending,
No Fade Out
```

## 歌詞

```
[Cold Open Chorus]

回せ！ 回せ！
石が尽きるまで
星も願いも
全部賭けてやる！

[Verse 1]

深夜3時
充電20％
指が覚えた
連打のリズム
低残高の
通知は無視
今夜だけは
負けられないぃぃッ！！！

[Spoken Interlude]

……ここで S S R が出れば
すべてが報われる
出なければ…
さらに課金だぁッ！

[Chorus 1]

回せ！ 回せ！
石が尽きるまで
星も願いも
全部賭けてやる
明日の飯より
今はガチャだ
出るまで回せば
それで俺の勝ちッ！！！

[Verse 2]

攻略サイトも読み尽くした
天井まではあと三万円
財布の中身
軽くなるほど
魂だけが
重くなってく

[Chorus 2]

回せ！ 回せ！
石が尽きるまで
俺の生活費
全部賭けてやる
明日(あす)からの事は
気にするな！
今はガチャだ
出るまで回せッ！！！

[Bridge]

本当は分かってるんだ
搾取(さくしゅ)されてるって事も
それでも ここまで来たら
後には引けねぇ
引いちゃいけねぇぇぇぇッ！！！

[Final Chorus]

回せ！ 回せ！
石が尽きるまで
それでも明日(あす)も
きっと 回してる

これ迄の 課金(どりょく)を
無駄にさせねぇぇッ！！！

[Outro]

諦めるなッ！

課金しろッ！

出るまで回せッ！

俺の負けはないッ！

出るまで回せばッ！

俺の勝ちぃぃぃぃッ！！！！！
```
