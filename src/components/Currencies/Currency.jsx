import React, {useState} from 'react'
import formatPrice from "../../utils/formatPrice.js"
import formatLongName from '../../utils/formatLongName.js'
import settingsStore from '../../stores/settingsStore.js'

function Currency({id, name, symbol}) {
  const store = settingsStore();
  const [price, setPrice] = useState(store.price)

  const handleChange = (e) => {
    const value = e.target.value;
    if (!/^[0-9]+$/.test(value)) {
        console.log("not a number");
        return; // Don't proceed further if it's not a number
    }
    setPrice(e.target.value);
  }

  return (
    <div key={id} className="px-4 flex gap-2 h-[55px] items-center border-b shadow-2xl shadow-[#0057FF]/30 border-[#9C27B0]/30">
        <img className='w-[27px] h-[27px]' src={`https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/${symbol}.png`}
          onError={(e)=>{e.target.onerror = null; e.target.src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/btc.png"}}
        alt="" />
        <div className="flex gap-2">
            <p className="text-white font-semibold w-[100px]">{formatLongName(name)}</p>
            <p className='text-white/70 w-[100px]'>{formatLongName(symbol)}</p>
        </div>
        <div className="flex gap-2 ml-auto">
            <input type="text" onChange={handleChange} value={price} className='text-white/70 text-center border-orange-300 outline-none border-2 text-white px-2 bg-ndark  rounded-xl w-[100px]' />

            <button className='w-[88px] rounded-xl bg-green-400 py-2 px-4 font-semibold text-sm text-white'>LONG</button>
            <button className='w-[88px] rounded-xl bg-red-400 py-2 px-4 font-semibold text-sm text-white'>SHORT</button>
        </div>
    </div>
  )
}

export default Currency