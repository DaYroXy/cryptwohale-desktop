import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faWindowMinimize, faWindowMaximize } from '@fortawesome/free-solid-svg-icons'


function Navbar() {

  return (
    <div className='w-full bg-slate-950 py-2 px-4 items-center flex justify-between h-[55px]'>
        <h1 className='tracking-widest text-white text-xs opacity-70'>CRYPTOWHALE</h1>
        <div className='h-full w-full draggable'></div>
        <ul className='flex text-slate-300 opacity-70 items-center gap-4'>
            <button onClick={() => {window.electron.minimize()}} className='hover:bg-red-300 outline-none hover:text-black rounded-md w-[35px] h-[35px] flex items-center justify-center'>
              <FontAwesomeIcon icon={faWindowMinimize} />
            </button>
            <button onClick={() => {window.electron.maximize()}} className='hover:bg-red-300 outline-none hover:text-black rounded-md w-[35px] h-[35px] flex items-center justify-center'>
              <FontAwesomeIcon icon={faWindowMaximize} />
            </button>
            <button onClick={() => {window.electron.exit()}} className='hover:bg-red-300 outline-none hover:text-black rounded-md w-[35px] h-[35px] flex items-center justify-center'>
              <FontAwesomeIcon className='text-xl' icon={faXmark} />
            </button>
        </ul>
    </div>
  )
}

export default Navbar