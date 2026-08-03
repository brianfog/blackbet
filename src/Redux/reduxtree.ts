import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Data Slices/counterslice.ts";
import userReducer from "./Data Slices/userslice.ts";

// I'm gonna use it in my black Sign-up Component

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        user : userReducer
    }
});

export type TreeState = ReturnType<typeof store.getState>;