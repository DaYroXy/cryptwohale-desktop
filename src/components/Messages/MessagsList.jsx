import React, { useEffect, useState } from 'react'
import messageStore from '../../stores/messagesStore';
import Message from './Message';

function MessagsList() {
    const store = messageStore()


     useEffect(() => {
        store.fetchMessages()
        window.electron.onMessage((data) => {
            store.addMessage(data)
        });

        return () => {
            window.electron.removeMessageListener()
        }
    }, []);

    return (
        <div className='p-2 flex flex-col gap-2'>
            {store.messages.map((message,index) => (
                <Message key={index} {...message} />
            ))}
        </div>
    )
}

export default MessagsList