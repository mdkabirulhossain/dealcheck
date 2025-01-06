import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../Freatures/Counters/CountersSlice"
import postReducer from '../Freatures/Posts/PostsSlice'
const store = configureStore({
    reducer:{
        counters: countersReducer,
        posts: postReducer,
    }
})

export default store;