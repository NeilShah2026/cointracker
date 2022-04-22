const electron = require('electron');
const url = require('url');
const path = require('path');


const {app, BrowserWindow, Menu, ipcMain} = electron;

let homeWindow;

app.on('ready', function(){
  homeWindow = new BrowserWindow({
    webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
    },
  });
  // Load home Page
  homeWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'pages', 'homeWindow.html'),
      protocol: 'file:',
      slashes: true
  }));
  // Garbage collection handle
  homeWindow.on('close', function(){
      homeWindow = null;
  });

  // Quit app when closed
  homeWindow.on('closed', function(){
      app.quit();
  });
})
