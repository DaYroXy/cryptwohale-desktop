import React, { useEffect, useState } from 'react'
import Message from './Message';

function MessagsList() {

    const [messages, setMessages] = useState([]);

    console.log('MessagsList rendered');

    useEffect(() => {
        let isMounted = true; // add a flag to track whether the component is mounted
    
        window.electron.newMessage().then(msg => {
            if (isMounted) { // only update state if the component is mounted
                console.log(msg)
                setMessages((prevMessages) => [
                    msg,
                    ...prevMessages
                ]);
            }
        });
    
        return () => {
            isMounted = false; // update the flag when the component unmounts
        };
    }, []);



    return (
        <div className='p-2 flex flex-col gap-2'>
            {messages.map((message,index) => (
                <Message key={index} {...message} />
            ))}
        </div>
    )
}

export default MessagsList