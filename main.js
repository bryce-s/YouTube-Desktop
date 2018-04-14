const electron = require('electron');
const url = require('url');
const path = require('path');
const { blockWindowAds, adBlocker } = require('electron-ad-blocker');
const windowPlus = require('electron-window-plus');
const {app, BrowserWindow, Menu, ipcMain} = electron;
const {EventEmitter} = require('events')
const {partition, fromPartition, Session, Cookies} = process.atomBinding('session')



app.on('ready', function() {
    mainWindow = new BrowserWindow({width: 1000, height: 1000});
    blockWindowAds(mainWindow)
    
    mainWindow.loadURL('https://youtube.com'); 
});
