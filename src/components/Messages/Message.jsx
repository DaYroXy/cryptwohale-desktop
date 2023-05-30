import React from 'react'
import timeFormat from "../../utils/timeFormat"
import SymbolsFound from './SymbolsFound'


function Message({ title, msg, time, suggestions}) {

    const symbols = suggestions

    return (
            <div className="bg-dark rounded-lg w-full p-4">
                <h1 className='text-white font-medium text-lg mb-2'>{title}</h1>
                <p className='text-white/70 font-normal  leading-5 mb-4'>{msg}</p>
                <small className='text-white/70 text-xs leading-5'>{timeFormat(new Date(time))}</small>
                {symbols && symbols.length > 0 && symbols.map((symbol,index) => {
                    return symbol.found.map((symbolFound,index) => {
                        return <SymbolsFound key={index} symbolFound={symbolFound} />

                        })

                    })

                }
            </div>
        )
}

export default Message