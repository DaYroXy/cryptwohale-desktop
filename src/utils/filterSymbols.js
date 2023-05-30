function filterSymbols(array) {
    return array
        .filter(item => item.endsWith('_USDT')) // keep only items ending with '_data'
        .map(item => item.split('_USDT')[0]); // remove '_data' from each item
}

export default filterSymbols