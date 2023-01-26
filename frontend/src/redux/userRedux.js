import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiCalls from "./apiCalls";

const user = JSON.parse(localStorage.getItem('user'))

export const logout = createAsyncThunk('user/logout', async () => {
    await apiCalls.logout()
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: user ? user : null || {},
        isFetching: false,
        error: false,
    },
    reducers: {
        // Login
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.error = false;
            state.currentUser = action.payload;;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        // Register
        registerStart: (state) => {
            state.isFetching = true;
        },
        registerSuccess: (state, action) => {
            state.isFetching = false;
            state.error = false;
            state.currentUser = action.payload;;
        },
        registerFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        reset: (state) => {
            state.user.currentUser = null
        }

        // // Logout
        // logoutStart: (state) => {
        //     state.isFetching = true;
        // },
        // logoutSuccess: (state, action) => {
        //     state.isFetching = false;
        //     state.currentUser = action.payload;;
        // },
        // logoutFailure: (state) => {
        //     state.isFetching = false;
        //     state.error = true;
        // }

        
    },
    extraReducers: (builder) => {
        builder
        .addCase(logout.fulfilled, (state) => {
            state.currentUser.user = null

          })
    },
})

export const { reset, loginStart, loginSuccess, loginFailure, logoutStart, logoutSuccess, logoutFailure, registerStart, registerSuccess, registerFailure } = userSlice.actions;
export default userSlice.reducer;