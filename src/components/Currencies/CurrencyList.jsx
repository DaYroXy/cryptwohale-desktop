import React, { useEffect, useRef  } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import Currency from './Currency'
import coinsStore from '../../stores/coinsStore'

function CurrencyList() {

  const store = coinsStore()

  useEffect(() => {
    store.fetchCoins()
    store.fetchCoinsPage()
  }, [])


  return (
    <div className=''>
      <div className="px-4 py-2 flex gap-4 items-center">
        <FontAwesomeIcon className='text-white w-[22px] h-[22px]' icon={faMagnifyingGlass} />
        <input type="text" onChange={store.setQuery} value={store.query} placeholder='Search Currency...' className='border-orange-300 outline-none border-2 text-white bg-ndark py-5 px-3.5 w-full rounded-xl h-[30px]' />
      </div>

      <div className="flex flex-col mt-2 bg-ndark">
        {store.coinsShowList.map((currency, index) => (
          <Currency key={index} {...currency} />
        ))}
      </div>
    </div>
  )
}

export default CurrencyList