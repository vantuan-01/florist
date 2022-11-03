import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        orderList: [],
        presentQty: 1,
        totalPrice: 0,
        totalQty: 0,
    },
    reducers: {
        addProduct(state, action) {
            let findId = state.orderList.findIndex((item) => item.detailItems.id === action.payload.detailItems.id);

            if (findId === -1) {
                state.orderList = [...state.orderList, action.payload];
                // state.totalPrice += action.payload.detailItems.price * action.payload.presentQty;
                // state.totalQty += action.payload.presentQty;
            } else {
                state.orderList[findId].presentQty = action.payload.presentQty;
                // state.totalPrice = state.totalPrice;
                // state.totalQty = state.totalQty;
            }
        },
        increaseQty(state, action) {
            if (state.presentQty < action.payload.qty) {
                state.presentQty = state.presentQty + 1;
            } else if (state.presentQty === action.payload.qty) {
                return;
            } else {
                console.log('increaseAmount error');
            }
        },
        decreaseQty(state, action) {
            if (state.presentQty > 1) {
                state.presentQty = state.presentQty - 1;
            } else if (state.presentQty === 1) {
                return;
            } else {
                console.log('decreaseAmount error');
            }
        },
    },
});

export const { addProduct, increaseQty, decreaseQty } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
export const selectOrderList = (state) => state.cartReducer.orderList;
export const selectQty = (state) => state.cartReducer.presentQty;
export const selectTotalPrice = (state) => state.cartReducer.totalPrice;
export const selectTotalQty = (state) => state.cartReducer.totalQty;
