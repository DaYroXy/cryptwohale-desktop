import React, {useState} from 'react'
import settingsStore from '../../stores/settingsStore';

function MessagsList() {

    const store = settingsStore();
    const [price, setPrice] = useState(store.price)

    let List = [
        {
            id:1,
            title:"Binance Twitter",
            msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
            time: "25 April, 2024 15:30"
        },
        {
            id:2,
            title:"Binance Twitter",
            msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
            time: "25 April, 2024 15:30"
        }
    ]

    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }

    return (
        <div className='p-2 flex flex-col gap-2'>
            {List.map(list => (
                <div key={list.id} className="bg-dark rounded-lg w-full p-4">
                    <h1 className='text-white font-medium text-lg mb-2'>{list.title}</h1>
                    <p className='text-white/70 font-normal  leading-5 mb-4'>{list.msg}</p>
                    <small className='text-white/70 text-xs leading-5'>{list.time}</small>
                    <div className="mt-4">
                        <div className="flex items-center">
                            <img className='w-[27px] h-[27px] bg-[#687EE3]  rounded-full' src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880" alt="" />
                            <h1 className='text-white font-medium ml-2'>BTC</h1>
                            <p className='text-white/70 text-sm ml-2'>Bitcoin</p>
                            <h1 className='text-white font-medium ml-auto'>$28.30k</h1>
                        </div>
                        <div className="my-4">
                            <input type="text" value={price} onChange={handlePriceChange} className='w-full rounded-xl h-[35px] p-2 text-center text-white/70 outline-none bg-ndark border-orange-300 border' />
                        </div>
                        <div className="flex gap-1 justify-between">
                            <button className='w-full rounded-xl bg-green-400 py-2 px-4 font-semibold text-sm text-white'>LONG</button>
                            <button className='w-full rounded-xl bg-red-400 py-2 px-4 font-semibold text-sm text-white'>SHORT</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MessagsList