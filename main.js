const { app, BrowserWindow } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

let serverProcess;

function createWindow() {
  // Express sunucusunu ayrı işlem olarak başlat
  serverProcess = spawn('nodemon', ['server.js'], {
    shell: true,
    env: process.env,
    stdio: 'inherit'
  });

  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Express sunucusunun ayağa kalkmasını bekleyip sayfayı yükle
  setTimeout(() => {
    win.loadURL('http://localhost:3000');
    win.once('ready-to-show', () => {
      win.show();
    });
    win.webContents.openDevTools();
  }, 3000);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (serverProcess) serverProcess.kill();
  if (process.platform !== 'darwin') app.quit();
});
