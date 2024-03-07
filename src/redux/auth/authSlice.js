import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { register, login, logOut } from "./authOperation";

const handlePending = (state) => {
    state.isLoading = true;
}

const handleRejected = (state,  { error, payload }) => {
    state.error = payload ?? error.message;
    state.isLoading = false;
}

const INITIAL_STATE = {
    user: { email: null },
    sid: null,
    refreshToken: null,
    accessToken: null,
    isLogin: false,
    error: null,
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
            
            })
        
            // LOGIN
            .addCase(login.fulfilled, (state, action) => {
                state.user.email = action.payload.userData.email;
                state.sid = action.payload.sid;
                state.refreshToken = action.payload.refreshToken;
                state.accessToken = action.payload.accessToken;
                state.isLogin = true;
            })
        
            // LogOut
            .addCase(logOut.fulfilled, (state) => {
                state.user = { email: null };
                state.sid = null;
                state.refreshToken = null;
                state.accessToken = null;
                state.isLogin = false;
            })
            .addMatcher(isAnyOf(
                register.pending,
                login.pending,
                logOut.pending,
              
              ), handlePending)

            .addMatcher(isAnyOf(
                register.rejected,
                login.rejected,
                logOut.rejected,
        ), handleRejected)
    }
})

export const authReducer = authSlice.reducer;