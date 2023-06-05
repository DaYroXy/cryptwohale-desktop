const WebSocket = require('ws')
const fs = require('fs')
const path = require('path')

const newMessage = (mainWindow) => {
    console.log("LOADED")
    const files = fs.readdirSync(path.join(__dirname, "../sockets/"))
    files.forEach(file => {
        require(`../sockets/${file}`)(mainWindow, WebSocket)
    })
}

module.exports = newMessage