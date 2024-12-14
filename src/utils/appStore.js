import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice.js";
import feedReducer from "../utils/feedSlice.js";
import connectionReducer from "../utils/connections.js"
import requestReducer from '../utils/requestSlice.js'



const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer, 
        connections: connectionReducer,
        requests: requestReducer,
    },
})


export default appStore;