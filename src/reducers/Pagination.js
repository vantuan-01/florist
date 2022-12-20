import { createSlice } from '@reduxjs/toolkit';

const paginateSlice = createSlice({
    name: 'paginateSlice',
    initialState: {
        pagination: {
            _page: 1,
            _limit: 10,
        },
        filter: {},
        scale: false,
    },
    reducers: {
        setPaginatePath(state, action) {
            state.pagination = action.payload;
        },
        setFilter(state, action) {
            state.filter = action.payload;
        },
    },
});

export const { setPaginatePath, setFilter } = paginateSlice.actions;
export const paginateReducer = paginateSlice.reducer;
export const selectPagination = (state) => state.paginateReducer.pagination;
export const selectFilter = (state) => state.paginateReducer.filter;
