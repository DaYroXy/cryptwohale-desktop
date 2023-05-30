import React from 'react'

import settingsStore from '../../stores/settingsStore'

import SettingsInput from '../../components/Layout/SettingsInput'
import SettingsCheckbox from '../../components/Layout/SettingsCheckbox'

function DefaultsPage() {

  const {
    leverage,
    price,
    authentication,
    newMessage,
    orderPlaced,
    orderFailed,
    orderSucceed,
  } = settingsStore();

  
  const defaults = [
    {
      text: "Leverage",
      value: leverage,
    },
    {
      text: "Price",
      value: price,
    },
  ]

  const AuthenticationValue = authentication

  const Notifications = [
    {
      id:"NewMessage",
      text: "New Message",
      isChecked: newMessage,
    },
    {
      id:"OrderPlaced",
      text: "Order Placed",
      isChecked: orderPlaced,
    },
    {
      id:"OrderFailed",
      text: "Order Failed",
      isChecked: orderFailed,
    },
    {
      id:"OrderSucceed",
      text: "Order Succeed",
      isChecked: orderSucceed,
    }
  ]

  const handleSettingsInput = (e) => {
    settingsStore.getState()[`set${e.id}`](e.newValue);
  }

  const handleSettingsCheckbox = (e) => {
    settingsStore.getState()[`set${e.id}`](e.newValue);
  }

  return (
    <div>
      <div className="border-b pb-8 border-[#FFFFFF]/30">
        <h4 className='text-white font-semibold'>Authentication</h4>
        <div className="flex mt-4 gap-5 items-center">
          <p className='text-white/70 '>Cryptowhale Api Key:</p>
          <div className="flex-1 ">
            <SettingsInput id='Authentication' handleInputChange={handleSettingsInput} value={AuthenticationValue}  placeholder={"XXXX-XXXX-XXXX-XXXX-XXXX-XXXX-XXXX-XXXX"} />
          </div>
        </div>
      </div>


      <div className="border-b py-8  border-[#FFFFFF]/30">
        <h4 className='text-white font-semibold'>Defaults</h4>
        <div className="flex mt-4 gap-48 items-center">
          {defaults.map((item, index) => (
            <div key={index} className="flex gap-5 items-center">
              <p className='text-white/70 '>Default {item.text}:</p>
              <div className="w-[115px]">
                <SettingsInput id={item.text} handleInputChange={handleSettingsInput} value={item.value} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-b py-8  border-[#FFFFFF]/30">
        <h4 className='text-white font-semibold'>Notifications</h4>
        <div className="flex mt-4 gap-4 items-center">
            {Notifications.map((item, index) => (
              <div key={index} className="flex gap-4 items-center">
                <div className="items-center flex">
                  <SettingsCheckbox id={item.id} handleInputChange={handleSettingsCheckbox} checked={item.isChecked} value={"10"} />
                </div>
                <p className='text-white/70 '>{item.text}</p>
              </div>
            ))}

        </div>
      </div>


    </div>
  )
}

export default DefaultsPage