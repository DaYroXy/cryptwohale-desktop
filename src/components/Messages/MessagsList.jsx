import React, { useEffect, useState, useRef  } from 'react'
import messageStore from '../../stores/messagesStore';
import Message from './Message';
import getMessageCoins from '../../utils/getMessageCoins';


function MessagsList() {
    const store = messageStore()
    const intervalRef = useRef(null);

     useEffect(() => {
        store.fetchMessages()
        window.electron.onMessage((data) => {
            store.addMessage(data)
        });
        intervalRef.current = setInterval(() => {
            store.updateTime()
          }, 60000);

        return () => {
            clearInterval(intervalRef.current);
            window.electron.removeMessageListener()
        }
    }, []);

    return (
        <div className='p-2 flex flex-col gap-2'>
            {store.messages.map((message,index) => {
                return <Message key={index} {...message} />
            })}
        </div>
    )
}

export default MessagsList