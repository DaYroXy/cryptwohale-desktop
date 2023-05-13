import React, { useState } from 'react'

import SidebarItem from './SidebarItem'

function Sidebar() {

    const [activeItem, setActiveItem] = useState('Defaults');
    const sideBarList = [
        {name: "Defaults", to:"/settings"},
        {name: "APIs", to:"/settings/apis"},
        {name: "Twitter", to:"/settings/twitter"}
    ]

    return (
        <div className='bg-[#222B3B] w-[258px] h-[calc(100vh-111px)] p-2'>
            <div className="mt-6 flex flex-col">
                {sideBarList.map((item, index) => (
                    <SidebarItem setActiveItem={setActiveItem} key={index} {...item} activeItem={activeItem} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar