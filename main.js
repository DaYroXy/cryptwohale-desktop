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
  newMessageHandler(mainWindow)
}

app.whenReady().then(createWindow);

const createChildWindow = (customData) => {
  childWindow = new BrowserWindow({
    width: 350,
    height: 125,
    resizable: false,
    frame: false,
    icon: path.join(__dirname, 'electron-assets/Logo.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'lib/notificationPreload.js')
    },
  })
  
  

  childWindow.loadFile('./Notifications/Alert.html')

  childWindow.webContents.on('did-finish-load', () => {
    childWindow.webContents.send('message', customData)
  })

  childWindow.focus()
}


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

ipcMain.on("notification-exit", (event) => {
  const sender = event.sender;
  const targetWindow = BrowserWindow.fromWebContents(sender);
  if(targetWindow) {
    targetWindow.close()
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

  console.log("hi")
  const {name, amount, levrage, authentication, method} = orderData;
  const timestamp = new Date().getTime();

  const data = `${name}&${amount}&${levrage}&${authentication}&${method}&${timestamp}`
  const Signture = crypto.createHash('sha256').update(data).digest('hex')

  axios({
    url: 'http://136.244.84.251:3200/order',
    method: 'POST',
    headers: {
      'authorization': authentication,
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({...orderData, timestamp, Signture})
  }).then(res => {
    console.log(res.data)
    createChildWindow(res.data)
  }).catch(err => {
    // console.log(err.response.data)
    try{
      createChildWindow(err.response.data)
    } catch(e) {
      createChildWindow({error:1, msg: 'Unknown Error...'})
    }
  })
})
