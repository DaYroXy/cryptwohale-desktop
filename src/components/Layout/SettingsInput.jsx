import React from 'react'

function SettingsInput({id, handleInputChange, placeholder, value}) {


    const handleChange = (e) => {
        handleInputChange({
            id: id,
            newValue: e.target.value
        })
    }

    return (
        <input type="text" onChange={handleChange} placeholder={placeholder} value={value} className='border-2 outline-none py-2 px-4 text-center text-white bg-[#141414]/40 rounded-md w-full h-[35px] border-[#1762FF]' />
    )
}

export default SettingsInput