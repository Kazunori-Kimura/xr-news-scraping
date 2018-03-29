# XR情報収集スクリプト

VR情報をあつめてTwitterにポストするbot (のデータを集める部分)

1. スクレイピングして
2. Redisにためる

```
// 重複登録しないようにチェックするためのset
type: set
key: xr-set
value: hash
```

```
// ツイートするデータのリスト
// RPUSH して LPOP する
type: list
key: xr-list
value: json { url, title, hash }
```

------

## 対象サイト

タグ「VR | AR | MR | XR」を検索 - はてなブックマーク
http://b.hatena.ne.jp/search/tag?q=VR+%7C+AR+%7C+MR+%7C+XR

Mogura VR - 国内外のVR/AR/MR最新情報
http://www.moguravr.com/

VR Watch - VR/ARの最新ニュース＆コラム
https://www.watch.impress.co.jp/vr/
