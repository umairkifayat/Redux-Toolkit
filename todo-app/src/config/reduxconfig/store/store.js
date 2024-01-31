import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "../reducers/todoslice";



export const store = configureStore({
    reducer: todoreducer
})