import { create } from 'zustand'
import StorageBoolean from '../utils/StorageBoolean'

const settingsStore = create((set) => ({

    // Defaults 
    leverage: localStorage.getItem("leverage") || 10,
    price: localStorage.getItem("price") || 1500,
    authentication: localStorage.getItem("authentication") || '',

    setAuthentication: value => {
        localStorage.setItem("authentication", value);
        set({authentication: value});
    },

    setLeverage: value => {
      localStorage.setItem("leverage", value);
      set({ leverage: value });
    },

    setPrice: value => {
      localStorage.setItem("price", value);
      set({ price: value });
    },

    // Notifications
    newMessage: StorageBoolean("newMessage", false),
    orderPlaced: StorageBoolean("orderPlaced", true),
    orderFailed: StorageBoolean("orderFailed", true),
    orderSucceed: StorageBoolean("orderSucceed", false),


    setNewMessage: value => {
        localStorage.setItem("newMessage", value);
        set({ newMessage: value });
    },
    setOrderPlaced: value => {
        localStorage.setItem("orderPlaced", value);
        set({ orderPlaced: value });
    },
    setOrderFailed: value => {
        localStorage.setItem("orderFailed", value);
        set({ orderFailed: value });
    },
    setOrderSucceed: value => {
        localStorage.setItem("orderSucceed", value);
        set({ orderSucceed: value });
    }

}))

export default settingsStore