const electron = require('electron');
const url = require('url');
const path = require('path');
const { blockWindowAds, adBlocker } = require('electron-ad-blocker');
const windowPlus = require('electron-window-plus');
const {app, BrowserWindow, Menu, ipcMain} = electron;
const {EventEmitter} = require('events')
const {partition, fromPartition, Session, Cookies} = process.atomBinding('session')





// app.on('ready', function () {
//       if ( !windowPlus.restore() ) {
//       let win = new BrowserWindow({
//         width: 600,
//         height: 400,
//       });

//       windowPlus.loadURL(win, 'https://youtube.com')
//       windowPlus.manage(win);
//       blockWindowAds(windowPlus.BrowserWindow);

//     }
//   });
app.on('ready', function() {
   if ( !windowPlus.restore() ) {
      let win = new BrowserWindow({
      width: 300,
      height: 300,
    })
    mainWindow = new BrowserWindow();
    blockWindowAds(mainWindow);
    // mainWindow.loadURL(url.format({ß
    //     pathname: path.join(__dirname, 'index.html'),
    //     protocol: 'file',
    //     slashes: true
    // }))
    mainWindow.loadURL('https://youtube.com'); 
    const ses = win.webContents.session;
    console.log(ses.getUserAgent());
}});
