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
