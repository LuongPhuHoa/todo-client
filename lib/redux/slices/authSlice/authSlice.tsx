import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getCookie } from 'cookies-next';
import { loginUser, logoutUser } from "./thunks";

const initialState = getCookie('token') ? {
    isLoggedIn: true,
    user: {}
} : {
    isLoggedIn: false,
    user: {}
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
      deAuthenticate: (state) => {
        state.isLoggedIn = false;
      },
      authenticate: (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
      },
      restoreAuthState: (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(loginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
      });
      builder.addCase(logoutUser.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user = {};
      });
    },
});

export const { deAuthenticate, authenticate, restoreAuthState } = authSlice.actions;

export default authSlice.reducer;