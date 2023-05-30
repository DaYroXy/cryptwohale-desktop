const WebSocket = require('ws')
const fs = require('fs')

const newMessage = (mainWindow) => {
    const files = fs.readdirSync("./sockets/")
    files.forEach(file => {
        require(`../sockets/${file}`)(mainWindow, WebSocket)
    })
}

module.exports = newMessage