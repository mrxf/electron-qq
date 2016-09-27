const electron = require('electron');
// 控制应用生命周期的模块。
const app = electron.app
// 创建原生浏览器窗口的模块。
const BrowserWindow = electron.BrowserWindow

// 保持一个对于 window 对象的全局引用，如果你不这样做，
// 当 JavaScript 对象被垃圾回收， window 会被自动地关闭
let mainWindow

function createWindow() {
    // 创建浏览器窗口
    mainWindow = new BrowserWindow({
        width: 495,
        height: 470,
        frame: false,  // 没有默认框架
        transparent: true, // 背景透明
        alwaysOnTop: false, // 始终在最前方
        skipTaskbar: false,  // 在任务栏中创建图标
    });

    // // 加载应用的 index.html。
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    // 打开调试工具
    // mainWindow.webContents.openDevTools();

    // 窗口关闭时候触发的事件
    mainWindow.on('closed', function () {
        // 取消引用 window 对象，如果你的应用支持多窗口的话，
        // 通常会把多个 window 对象存放在一个数组里面，
        // 与此同时，你应该删除相应的元素。
        mainWindow = null
    });
}

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', createWindow)

// 当全部窗口关闭时退出。
app.on('window-all-closed', function () {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // 在 macOS 上，当点击 dock 图标并且该应用没有打开的窗口时，
    // 绝大部分应用会重新创建一个窗口。
    if (mainWindow === null) {
        createWindow()
    }
})

// 在这文件，你可以续写应用剩下主进程代码。
// 也可以拆分成几个文件，然后用 require 导入。
