import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: {
        logged: '',
    },
    reducers: {
        loginStatus(state, action) {
            state.logged = action.payload;
            localStorage.setItem('userUID', action.payload);
        },
        logOutStatus(state, action) {
            state.logged = action.payload;
            localStorage.removeItem('userUID');
        },
    },
});

export const { loginStatus, logOutStatus } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
export const selectLogged = (state) => state.loginReducer.logged;
