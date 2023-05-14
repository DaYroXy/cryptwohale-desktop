const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const WebSocket = require('ws')
const isDev = !app.isPackaged;

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 954,
    height: 700,
    resizable: false,
    frame: false,
    icon: path.join(__dirname, 'electron-assets/Logo.ico'),
    webPreferences: {
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

// var ws = new WebSocket('wss://news.treeofalpha.com/ws');

// ws.on('open', function() {
//   ws.send('something');
// });
// ws.on('message', function(data, flags) {
//   const strData = data.toString();
//   console.log(strData);
//   try {
//       const jsonData = JSON.parse(strData);
//       console.log(jsonData);
//     } catch (e) {
//       console.error('Could not parse data as JSON:', e);
//     }
// });
ipcMain.handle("newMessage", async (event, args) => {
  return {
      id: 5,
      title: "this is the new one",
      msg:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      time: "25 April, 2024 15:30",
    }
})
