import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slice/useSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
    }
})