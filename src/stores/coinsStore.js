import { create } from 'zustand'
import axios from 'axios'
import StorageBoolean from '../utils/StorageBoolean'
import debounce from '../utils/debounce'

const coinsStore = create((set) => ({
    coinsList: [],
    coinsShowList: [],
    coinsPage: 1,
    pageSize: 50,
    query: "",

    fetchCoins: async () => {
        if(localStorage.getItem('coins') && localStorage.getItem('coins').length > 0) {
            set({coinsList: JSON.parse(localStorage.getItem('coins'))})
        } else {
            const res = await axios.get('https://api.coingecko.com/api/v3/coins/list')
            const coinsList = res.data.map((coin) => {
                return {
                    id: coin.id,
                    symbol: coin.symbol,
                    name: coin.name,
                }
            })
            localStorage.setItem('coins', JSON.stringify(coinsList))
            set({coinsList})
            await coinsStore.getState().fetchCoinsPage()

        }
    },

    fetchCoinsPage: async () => {
        set(state => {
            const start = 0;
            const end = state.coinsPage * state.pageSize;
            const pageOfCoins = state.coinsList.slice(start, end);
            return { coinsShowList: pageOfCoins }
        });

    },
    
    setPage: async (page) => {
        set({coinsPage: page});
        await coinsStore.getState().fetchCoinsPage()
    },

    setQuery: (e) => {
        set({query: e.target.value});
        coinsStore.getState().searchCoins()
    },
    
    searchCoins: debounce(async () => {
        if(coinsStore.getState().query.length > 2) {
            let res = coinsStore.getState().coinsList.filter(coin => {
                return coin.name.toLowerCase().startsWith(coinsStore.getState().query.toLowerCase())
            })
            
            set({coinsShowList: res})
        } else {
            await coinsStore.getState().fetchCoinsPage()
        }
    }, 500)
}))

export default coinsStore