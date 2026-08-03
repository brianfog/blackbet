import { createSlice } from "@reduxjs/toolkit";


export interface UserType {

    username : string;
    Remaining : number;
    LoggedIN : boolean

};


const initialState : UserType = {
    username : null,
    Remaining : null,
    LoggedIN : false
};


export const UserSlice = createSlice({
    name : 'user',
    initialState,
    reducers: {
        increaseuserRem : (state: UserType ,amount) => state.Remaining += amount.payload,
        setUserName : (state : UserType, Name) => state.username = Name.payload,
        setLogIn : (state : UserType, LogBool) => state.LoggedIN = LogBool.payload
    }
})


export const {increaseuserRem} = UserSlice.actions;

export default UserSlice.reducer;
