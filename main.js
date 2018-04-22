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

    logger.info("Windowを閉じた時に呼ばれる処理を設定。");
    win.on('closed', () => {
        logger.info("ウィンドウ窓の削除");
        win = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    logger.info("window-all-closed");
    logger.info("process.platform:" + process.platform);
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q

    // 本来Macなら全てのWindowを閉じたとしてもDockerに残るようにするが、ここでは終了するように変更
    app.quit()
    // if (process.platform !== 'darwin') {
    //     app.quit()
    // }
})

app.on('activate', () => {
    logger.info("activate");
    logger.info(win);
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
})

  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.