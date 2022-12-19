import { createSlice } from '@reduxjs/toolkit';

const paginateSlice = createSlice({
    name: 'paginateSlice',
    initialState: {
        paginatePath: {
            _page: 1,
            _limit: 10,
            _totalRows: 1,
        },
        scale: false,
    },
    reducer: {
        prevPage(state, action) {},
        nextPage(state, action) {
            console.log(action.payload);
        },
        numberPage(state, action) {},
    },
});

export const { prevPage, nextPage, numberPage } = paginateSlice.actions;
export const paginateReducer = paginateSlice.reducer;
export const selectPaginatePath = (state) => state.paginateReducer.paginatePath;
