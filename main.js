const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

const logger = require('alibrary/jlog')("main");

logger.info("*********************");
logger.info("                     ");
logger.info("                     ");
logger.info("    main.js start    ");
logger.info("                     ");
logger.info("                     ");
logger.info("*********************");

// winをglobalに定義している理由としては、ローカル変数だと
// ガーベシゴレクションの機能によってJavascript Objectが自動で回収されてしまい、自動で閉じてしまうため
let win

logger.info("main.jsの読み込み");
function createWindow() {
    logger.info("ブラウザ窓の作成");
    win = new BrowserWindow({ width: 800, height: 600 })

    logger.info("index.htmlの読み込む");
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    logger.info("Devツールを開く");
    win.webContents.openDevTools()

    logger.info("[win/closed]Windowを閉じた時に呼ばれる処理を設定。");
    win.on('closed', () => {
        logger.info("ウィンドウ窓の削除");
        win = null
    })
}

logger.info("[app/ready]初期化終了時に呼ばれるcreateWindowを登録する。");
app.on('ready', createWindow);

logger.info("[app/window-all-closed]すべてのウインドウが閉じた時の処理をwindow-all-closedとして登録する。");
// Quit when all windows are closed.
app.on('window-all-closed', () => {
    logger.info("すべてのウインドウが閉じられたあとに実行する処理を開始する(window-all-closed)");
    logger.info("process.platform:" + process.platform);

    logger.info("本来Macなら全てのWindowを閉じたとしてもDockerに残るようにするが、ここでは終了するように変更している");
    app.quit()
    // if (process.platform !== 'darwin') {
    //     app.quit()
    // }
})

logger.info("[app/activate]アクディブ時に実行する処理をactivateとして登録する。");
logger.info("=> アクディブ時とは？...最小化してから元に戻した時")
app.on('activate', () => {
    logger.info("アクディブ時に実行する処理を開始する(activate)");
    logger.info(win);

    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
})

  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.