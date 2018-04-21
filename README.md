# electron-basic-sample
elesctronの基本を試すためのレポジトリ

# 最初になにしたか？

[Quick-Start](https://github.com/electron/electron-quick-start)を参照しながらHellow World相当のコードを作成。
Cloneするのではなく、主要ファイルの`main.js`と`index.html`をcopyした。package.jsonは、`$npm init`と`$npm install electron --save-dev --save-exact`を実行して雛形を作成し、残りはquick startのpackage.jsonを見ながら修正した。
その後、`$npm install`して、`$npm start`で問題なく起動することを確認。

# 実行方法とどのように実現しているのか？

```
$ npm start
```
package.jsonで上記コマンドで`electron .`を実行するように記述されている。
なお、electronコマンドでは、”main”に設定している"main.js"を最初に読み込むファイルとしている。


# コミット時のルール

[このサイト](https://qiita.com/itosho/items/9565c6ad2ffc24c09364)を参考にルールでプレフィックスをつけることにする


## プレフィックス

複数のプレフィックスが混ざる場合は全ての該当するプレフィックスをつけることとする。可能な限りひとつしかプレフィックスがつかないようにするのを目標とする。

### High Priority - 限定的条件下でのコミット（目的が明確）
* upgrade：バージョンアップ(バージョン番号の変更など)
* doc: ドキュメントのアップデート

### Medium Priority - 一般的条件下でのコミット
* add：新規機能追加
* update：既存機能の修正（バグではない）
* change：仕様変更
* fix：バグ修正
* hotfix：クリティカルなバグ修正
* clean：整理（リファクタリング等）
* disable：無効化（コメントアウト等）
* remove：削除（機能の削除）
* revert：変更取り消し
