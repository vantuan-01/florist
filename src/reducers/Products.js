import { createSlice } from '@reduxjs/toolkit';

const productSlide = createSlice({
    name: 'productSlide',
    initialState: {
        listAfterSort: [],
        sortOption: '',
        listSearched: [],
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
        searchName(state, action) {
            const value = action.payload.searchValue.trim();
            if (value) {
                const filterItem = action.payload.listProduct.filter((item) => {
                    return item.name.includes(value) || item.category.includes(value);
                });
                state.listSearched = filterItem;
                console.log(state.listSearched);
            } else if (!value) {
                state.listSearched = [];
            }
        },
    },
});

export const { sortPrice, sortName, searchName } = productSlide.actions;
export const productReducer = productSlide.reducer;
export const selectSorted = (state) => state.productReducer.listAfterSort;
export const selectSortOption = (state) => state.productReducer.sortOption;
export const selectSearch = (state) => state.productReducer.listSearched;
