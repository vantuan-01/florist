import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: {
        logged: localStorage.getItem('userUID') || '',
    },
    reducers: {
        loginStatus(state, action) {
            state.logged = action.payload;
            localStorage.setItem('userUID', action.payload.useruid);
            localStorage.setItem('userEmail', action.payload.useremail);
        },
        logOutStatus(state, action) {
            state.logged = action.payload;
            localStorage.clear();
        },
    },
});

export const { loginStatus, logOutStatus } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
export const selectLogged = (state) => state.loginReducer.logged;
