const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let page;

function openApp() {
  page = new BrowserWindow({width: 800, height: 600});

  page.loadURL(url.format({ pathname: path.join(__dirname, 'index.html'),
                            protocol: 'file',
                            slashes: true }));

  page.webContents.openDevTools();
  page.on('closed', () => { page = null; });
}

app.on('ready', openApp);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit(); });

app.on('activate', () => { if (page === null) openApp(); });
