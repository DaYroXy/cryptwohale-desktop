
import React, { useEffect, useState } from 'react';
import MessagesList from "../components/Messages/MessagsList"
import CurrencyList from "../components/Currencies/CurrencyList"
import settingsStore from '../stores/settingsStore'
import coinsStore from "../stores/coinsStore"

function Home() {
  const store = coinsStore()
  let [page, setPage] = useState(store.coinsPage)

  const handleCoinsScroll = (e) => {
    if(store.query === "") {
      const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
      if (bottom) { 
        setPage(++page)
        store.setPage(page)
      }

    }
  }


  return (
    <div className='flex w-full h-[calc(100vh-111px)] overflow-hidden'>
      <div onScroll={handleCoinsScroll} className='w-[65%] overflow-y-scroll'>
        <CurrencyList />
      </div>
      
      <div className='bg-[#253860] w-[35%] overflow-y-scroll'>
        <MessagesList />
      </div>
    </div>
  )
}

export default Home