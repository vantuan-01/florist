import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: {
        logged: localStorage.getItem('userUID') || '',
        openPanel: false,
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
        IsOpenPanel(state, action) {
            state.openPanel = action.payload;
            document.body.style.overflow = '';
        },
    },
});

export const { loginStatus, logOutStatus, IsOpenPanel } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
export const selectLogged = (state) => state.loginReducer.logged;
export const selectOpenPanel = (state) => state.loginReducer.openPanel;
