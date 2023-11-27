import { createSlice } from "@reduxjs/toolkit";
import { register, login, logOut, refreshUser } from "./authOperation";

const INITIAL_STATE = {
    user: { email: null },
    sid: null,
    refreshToken: null,
    accessToken: null,
    isLogin: false,
    isRefreshing: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    extraReducers: builder => {
        builder
            // REGISTER  
            .addCase(register.fulfilled, (state, action) => {
                state.user.email = action.payload.email;
                state.sid = action.payload.sid;
                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
                state.isLogin = true;
            })
        
            // LOGIN
            .addCase(login.fulfilled, (state, action) => {
                state.user.email = action.payload.userData.email;
                state.sid = action.payload.sid;
                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
                state.isLogin = true;
            })
        
            // LogOut
            .addCase(logOut.fulfilled, (state) => {
                state.user = { email: null };
                state.sid = null;
                state.accessToken = null;
                state.refreshToken = null;
                state.isLogin = false;
            })
        
            // RefreshUser
         
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                console.log(action.payload)
                state.sid = action.payload.newSid;
                state.accessToken = action.payload.newRefreshToken;
                state.refreshToken = action.payload.newRefreshToken;
                state.isLogin = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false;
            })
    }
})

export const authReducer = authSlice.reducer;