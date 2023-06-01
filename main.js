const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const newMessageHandler = require('./events/newMessage.js');
const axios = require('axios')
const crypto = require('crypto')
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

  // let count = 0;
  // const d = {
  //   id: 5,
  //   title: "this is the new one",
  //   msg:
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  //   time: "25 April, 2024 15:30",
  // }
  // mainWindow.webContents.send("newMessage", d)

  newMessageHandler(mainWindow)


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

ipcMain.on("place-order", (event, orderData) => {

  const {name, amount, levrage, authentication, method} = orderData;
  const timestamp = new Date().getTime();

  const data = `${name}&${amount}&${levrage}&${authentication}&${method}&${timestamp}`
  const Signture = crypto.createHash('sha256').update(data).digest('hex')

  const res = axios({
    url: 'http://localhost:8200/order',
    method: 'POST',
    headers: {
      'authorization': authentication,
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({...orderData, timestamp, Signture})
  }).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err.response)
  })
  // console.log({...orderData, timestamp, Signture})
})

// var ws = new WebSocket('wss://news.treeofalpha.com/ws');

// ws.on('open', function() {
//   ws.send('something');
// });
// ws.on('message', function(data, flags) {
//   const strData = data.toString();
//   try {
//       const jsonData = JSON.parse(strData);
//     } catch (e) {
//       console.error('Could not parse data as JSON:', e);
//     }
// });
