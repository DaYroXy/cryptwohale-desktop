import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faGear } from '@fortawesome/free-solid-svg-icons'
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='bg-slate-800 flex'>
        <Link to="/"> 
          <div className="flex border-r-2 border-white/40 items-center justify-center w-fit py-4 px-5 gap-3 text-white opacity-70">
              <FontAwesomeIcon icon={faHouse} />
              <p>HOME</p>
          </div>
        </Link>
        <Link to="/Settings"> 
          <div className="flex border-r-2 border-white/40 items-center justify-center w-fit py-4 px-5 gap-3 text-white opacity-70">
              <FontAwesomeIcon icon={faGear} />
              <p>SETTINGS</p>
          </div>
        </Link>
    </div>
  )
}

export default Navbar