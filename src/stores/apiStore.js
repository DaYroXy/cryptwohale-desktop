import { create } from 'zustand'
import axios from 'axios'
import settingsStore from './settingsStore';

const apiStore = create((set) => ({
   
    placeOrder: (method, symbol, price) => {

        const leverage = settingsStore.getState().leverage
        const authentication = settingsStore.getState().authentication
        
        window.electron.onOrderPlaced({
            name: `${symbol.toUpperCase()}USDT`,
            amount: price,
            levrage: leverage,
            authentication: authentication,
            method: method
        })
    }

}))

export default apiStore