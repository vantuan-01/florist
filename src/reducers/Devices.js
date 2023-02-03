const { createSlice } = require('@reduxjs/toolkit');

const devicesSlice = createSlice({
    name: 'devicesSlice',
    initialState: {
        scale: 'web',
    },
    reducers: {
        setScale(state, action) {
            state.scale = action.payload;
        },
    },
});

export const { setScale } = devicesSlice.actions;
export const devicesReducer = devicesSlice.reducer;
export const selectScale = (state) => state.devicesReducer.scale;
