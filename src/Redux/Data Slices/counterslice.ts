import { createSlice } from "@reduxjs/toolkit";


interface usertype {

    username : string;
    score : number

};


const initialState : usertype = {
    username : "mehdi shiraali",
    score : 10
};


export const simpleuserslice = createSlice({
    name : 'user',
    initialState,
    reducers: {
        increaseuserScore : (state: usertype ,amount) => state.score += amount.payload
    }
})


export const {increaseuserScore} = simpleuserslice.actions;

export default simpleuserslice.reducer;
