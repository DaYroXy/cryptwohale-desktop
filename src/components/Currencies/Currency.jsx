import React from 'react'
import formatPrice from "../../utils/formatPrice.js"


function Currency({id, image, name, symbol, current_price}) {
  return (
    <div key={id} className="px-4 flex gap-2 h-[55px] items-center border-b shadow-2xl shadow-[#0057FF]/30 border-[#9C27B0]/30">
        <img className='w-[27px] h-[27px]' src={image} alt="" />
        <div className="flex gap-2">
            <p className="text-white font-semibold w-[100px]">{name}</p>
            <p className='text-white/70 w-[50px]'>{symbol}</p>
            <p className='text-white font-semibold w-[75px]'>{formatPrice(current_price)}</p>
        </div>
        <div className="flex gap-2 ml-auto">
            <input type="text" placeholder='3500' className='text-center border-orange-300 outline-none border-2 text-white px-2 bg-ndark  rounded-xl w-[100px]' />

            <button className='w-[88px] rounded-xl bg-green-400 py-2 px-4 font-semibold text-sm text-white'>LONG</button>
            <button className='w-[88px] rounded-xl bg-red-400 py-2 px-4 font-semibold text-sm text-white'>SHORT</button>
        </div>
    </div>
  )
}

export default Currency