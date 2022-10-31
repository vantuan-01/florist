import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        orderList: [],
    },
    reducers: {
        addProduct(state, action) {
            const newList = [...state.orderList, action.payload];
            state.orderList = [...newList];
        },
    },
});

export const { addProduct, getQty } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
export const selectOrderList = (state) => state.cartReducer.orderList;
