const { createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        email: '',
        password: '',
        isValid: '',
        isRegist: false,
    },
    reducers: {
        setEmail(state, action) {
            state.email = action.payload;
        },
        setPassword(state, action) {
            state.password = action.payload;
        },
        setIsValid(state, action) {
            state.isValid = action.payload;
        },
        setIsRegist(state, action) {
            state.isRegist = action.payload;
        },
    },
});

export const { setEmail, setPassword, setIsValid, setIsRegist } = authSlice.actions;
export const authReducer = authSlice.reducer;
export const selectEmail = (state) => state.authReducer.email;
export const selectPassword = (state) => state.authReducer.password;
export const selectIsValid = (state) => state.authReducer.isValid;
export const selectIsRegist = (state) => state.authReducer.isRegist;
