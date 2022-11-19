import { createSlice } from '@reduxjs/toolkit';

const productSlide = createSlice({
    name: 'productSlide',
    initialState: {
        listAfterSort: [],
        sortOption: '',
    },
    reducers: {
        sortPrice(state, action) {
            if (action.payload.optionNum === 1) {
                const copyListItems = [...action.payload.items].sort((a, b) => a.price - b.price);
                state.listAfterSort = copyListItems;
                state.sortOption = 'low to height';
            } else if (action.payload.optionNum === 2) {
                const copyListItems = [...action.payload.items].sort((a, b) => b.price - a.price);
                state.listAfterSort = copyListItems;
                state.sortOption = 'height to low';
            }
        },
        sortName(state, action) {
            if (action.payload.optionNum === 3) {
                const copyListItems = [...action.payload.items].sort((a, b) => a.name.localeCompare(b.name));
                state.listAfterSort = copyListItems;
                state.sortOption = 'a - z';
            } else if (action.payload.optionNum === 4) {
                const copyListItems = [...action.payload.items].sort((a, b) => b.name.localeCompare(a.name));
                state.listAfterSort = copyListItems;
                state.sortOption = 'z - a';
            }
        },
    },
});

export const { sortPrice, sortName } = productSlide.actions;
export const productReducer = productSlide.reducer;
export const selectSorted = (state) => state.productReducer.listAfterSort;
export const selectSortOption = (state) => state.productReducer.sortOption;
