const replaceUrls = require('../lib/replaceUrls')

module.exports = function (mainWindow, WebSocket) {
    const connect = () => {
        var ws = new WebSocket('wss://news.treeofalpha.com/ws');
    
        ws.on('open', function() {
            ws.send('something');
        });
    
        ws.on('message', function(data, flags) {
            const strData = data.toString();
    
            try {
                const jsonData = JSON.parse(strData);
                console.log(jsonData)
                const message = {
                    id: jsonData._id,
                    title:replaceUrls(jsonData.title, "<URL>").split(":")[0],
                    msg: jsonData.body ? replaceUrls(jsonData.body, "<URL>").trim() : replaceUrls(jsonData.title, "<URL>"),
                    time:jsonData.time,
                    suggestions: jsonData.suggestions,
                    symbols: jsonData.suggestions.length > 0 ? jsonData.suggestions.filter(sug =>  sug.found).map(sug => sug.found).flat() : []
                }
                console.log(message)
                mainWindow.webContents.send("newMessage", message)
            } catch (e) {
                console.error('Could not parse data as JSON:', e);
            }
        });
    
        ws.onclose = function(e) {
            console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
            setTimeout(function() {
              connect();
            }, 1000);
          };
    
        ws.on('error', function(err) {
            console.error('WebSocket error:', err);
            ws.close(); 
        });
    }
    connect()
}