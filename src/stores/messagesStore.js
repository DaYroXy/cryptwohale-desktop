import { create } from 'zustand'

const messageStore = create((set) => ({
    messages: [],
    fetchMessages: () => {
        if(messageStore.getState().messages.length > 0) {
            return
        }
        set({messages: [{
            id: 1,
            title: "hello world",
            msg:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
            time: "25 April, 2024 15:30",
          }]})
    },
    addMessage: (message) => {
        const msgs = messageStore.getState().messages
        set({messages: [message, ...msgs]})
    },
}))

export default messageStore;
