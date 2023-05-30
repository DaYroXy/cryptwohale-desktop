export default (coins, msg) => {
    return []
    if (!msg || msg.length <= 10 || msg === undefined) {
        return []
    }
    const found = coins.filter(coin => {
        const { symbol, name } = { name: coin.name.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), symbol: coin.symbol.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&') };
        if(symbol && name) {
            const regex = new RegExp(`\\b(${symbol}|${name})\\b`, 'i');
            if(regex.test(msg)) {
                return symbol
            }
        }
    })
    return found
}