import React from 'react'
import { useNavigate } from "react-router-dom";

function SidebarItem({setActiveItem, name, to, activeItem}) {
  const navigate = useNavigate();

  const handleClick = () => {
    setActiveItem(name)
    navigate(to)
  }

  return (
    <button onClick={handleClick} className={`${name === activeItem ? 'bg-[#1762FF] text-white' : 'text-white/70'} p-2 text-center rounded-md`}>
        {name}
    </button>
  )
}

export default SidebarItem