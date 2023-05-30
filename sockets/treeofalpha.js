const replaceUrls = require('../lib/replaceUrls')

module.exports = function (mainWindow, WebSocket) {
    var ws = new WebSocket('wss://news.treeofalpha.com/ws');

    ws.on('open', function() {
        ws.send('something');
    });

    ws.on('message', function(data, flags) {
    const strData = data.toString();

    try {
            const jsonData = JSON.parse(strData);
            const message = {
                id: jsonData._id,
                title:replaceUrls(jsonData.title, "<URL>").split(":")[0],
                msg:replaceUrls(jsonData.body, "<URL>").trim(),
                time:jsonData.time,
                symbols: jsonData.suggestions.length > 0 ? jsonData.suggestions.filter(sug =>  sug.found).map(sug => sug.found).flat() : []
            }
            mainWindow.webContents.send("newMessage", message)
        } catch (e) {
            console.error('Could not parse data as JSON:', e);
        }
    });
}