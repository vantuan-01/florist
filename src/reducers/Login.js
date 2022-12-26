import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: {
        logged: '',
    },
    reducers: {
        updateStatus(state, action) {
            state.logged = action.payload;
            console.log(state.logged);
        },
    },
});

export const { updateStatus } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
export const selectLogged = (state) => state.loginReducer.logged;
