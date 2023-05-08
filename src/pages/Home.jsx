

import MessagesList from "../components/Home/MessagsList"
import CurrencyList from "../components/Home/CurrencyList"

function Home() {
  return (
    <div className='flex w-full h-[calc(100vh-111px)] overflow-hidden'>
      <div className='w-[65%] overflow-y-scroll'>
        <CurrencyList />
      </div>
      
      <div className='bg-[#253860] w w-[35%] overflow-y-scroll'>
        <MessagesList />
      </div>
    </div>
  )
}

export default Home