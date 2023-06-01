import { create } from 'zustand'
import axios from 'axios'
import replaceUrls from '../utils/replaceUrls'

const messageStore = create((set) => ({
    messages: [],
    fetchMessages: async () => {
        if(messageStore.getState().messages.length > 0) {
            return
        }

        const res = await axios.get('https://news.treeofalpha.com/api/news?limit=10')
        
        const msgs = res.data.map(msg => ({
            ...msg,
            msg:replaceUrls(msg.title, "<URL>").split(":").slice(1).join(":").trim(),
            title: replaceUrls(msg.title, "<URL>").split(":")[0],
        }))

        set({messages: msgs})
    },
    addMessage: (message) => {
        console.log(message)
        const msgs = messageStore.getState().messages
        set({messages: [message, ...msgs]})
    },

    updateTime: () => {
        set({messages: messageStore.getState().messages})
        console.log("updated")
    }
}))

export default messageStore;
