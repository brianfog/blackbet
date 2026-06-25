import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterslice.ts";

// I'm gonna use it in my black Sign-up Component

export const store = configureStore({
    reducer:{
        counter: counterReducer
    }
});

export type treestate = ReturnType<typeof store.getState>;