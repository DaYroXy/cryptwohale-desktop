const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const isDev = !app.isPackaged;

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 954,
    height: 700,
    resizable: false,
    frame: false,
    icon: path.join(__dirname, 'electron-assets/Logo.ico'),
    webPreferences: {
      // nodeIntegration: true,
      preload: path.join(__dirname, 'lib/preload.js')
    },
  });

  if (isDev) {
    mainWindow.loadURL('http://localhost:5173');
  } else {
    mainWindow.loadFile(path.join(__dirname, './dist/index.html'));
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// IPC's
ipcMain.on("exit", (event) => {
  app.quit();
})

ipcMain.on("maximize", (event) => {
  const sender = event.sender;
  const targetWindow = BrowserWindow.fromWebContents(sender);
  if (targetWindow) {
    if (targetWindow.isMaximized()) {
      targetWindow.unmaximize();
    } else {
      targetWindow.maximize();
    }
  }
})

ipcMain.on("minimize", (event) => {
  const sender = event.sender;
  const targetWindow = BrowserWindow.fromWebContents(sender);
  if (targetWindow) {
    targetWindow.minimize();
  }
})
