import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from '../components/Sidebar/Sidebar'

function Settings() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className="w-full p-8 ">
        <Outlet />
      </div>
    </div>
  )
}

export default Settings