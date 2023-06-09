const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    exit: (exit) => ipcRenderer.send("exit", exit),
    minimize: (minimize) => ipcRenderer.send("minimize", minimize),
    maximize: (maximize) => ipcRenderer.send("maximize", maximize),
    onOrderPlaced: (data) => ipcRenderer.send("place-order", data),
    onMessage: (callback) => ipcRenderer.on("newMessage", (event, args)=> {
        callback(args)
    }),
    removeMessageListener: () => ipcRenderer.removeAllListeners('newMessage')

});