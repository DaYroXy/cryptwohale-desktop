const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    exit: (exit) => ipcRenderer.send("notification-exit", exit),
    getData: () => {
        return new Promise((resolve, reject) => {
          ipcRenderer.once('message', (event, data) => {
            resolve(data);
          });
        });
      }

});