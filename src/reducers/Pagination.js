import { createSlice } from '@reduxjs/toolkit';

const paginateSlice = createSlice({
    name: 'paginateSlice',
    initialState: {
        _page: 1,
        _limit: 10,
        _productList: [],
    },
    reducer: {
        prevPage(state, action) {},
        nextPage(state, action) {},
    },
});

export const { prevPage, nextPage } = paginateSlice.actions;
export const paginateReducer = paginateSlice.reducer;
