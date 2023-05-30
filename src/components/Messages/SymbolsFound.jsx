import React, {useState} from 'react'
import filterSymbols from '../../utils/filterSymbols';
import settingsStore from '../../stores/settingsStore';
import err from '../../assets/Err.jpg'
import axios from 'axios'

function SymbolsFound({symbolFound}) {

    const store = settingsStore();
    const [price, setPrice] = useState(store.price)

    const handlePriceChange = (e) => {
        const value = e.target.value;
        if (!/^[0-9]+$/.test(value)) {
            return; // Don't proceed further if it's not a number
        }
        setPrice(e.target.value);
    };


    const handleBuyClick = (method) => {
        console.log("BOUGHT")
        window.electron.onOrderPlaced({
            name: `${symbolFound.toUpperCase()}USDT`,
            amount: price,
            levrage: store.leverage,
            authentication: store.authentication,
            method: method
        })
        // axios.post('https://eo9m6qo44qn0m9p.m.pipedream.net', {
        //     body: JSON.stringify({
        //         name: `${symbolFound.toUpperCase()}USDT`,
        //         amount: price,
        //         levrage: store.leverage,
        //         method: method
        //     })
        // })
    }

    return (
        <div className="mt-4">
            <div className="flex items-center">
                <img className='w-[27px] h-[27px] bg-[#687EE3]  rounded-full' src={`https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/${symbolFound.toLowerCase()}.png`}
                onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = err
                    }}
                alt="" />
                <h1 className='text-white font-medium ml-2'>{symbolFound}</h1>
                <p className='text-white/70 text-sm ml-2'>{symbolFound}</p>
                <h1 className='text-white font-medium ml-auto'>FOUND</h1>
            </div>
            <div className="my-4">
                <input type="text" value={price} onChange={handlePriceChange} className='w-full rounded-xl h-[35px] p-2 text-center text-white/70 outline-none bg-ndark border-orange-300 border' />
            </div>
            <div className="flex gap-1 justify-between">
                <button onClick={() => handleBuyClick("LONG")} className='w-full rounded-xl bg-green-400 py-2 px-4 font-semibold text-sm text-white'>LONG</button>
                <button onClick={() => handleBuyClick("SHORT")} className='w-full rounded-xl bg-red-400 py-2 px-4 font-semibold text-sm text-white'>SHORT</button>
            </div>
        </div>
    )
}

export default SymbolsFound