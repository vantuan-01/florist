import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        orderList: JSON.parse(localStorage.getItem('cart')) || [],
        presentQty: 1,
        totalPrice: JSON.parse(localStorage.getItem('totalPrice')) || 0,
        totalQty: JSON.parse(localStorage.getItem('totalQty')) || 0,
    },
    reducers: {
        addProduct(state, action) {
            let findId = state.orderList.findIndex((item) => item.detailItems.id === action.payload.detailItems.id);

            if (findId === -1) {
                state.orderList = [...state.orderList, action.payload];
                localStorage.setItem('cart', JSON.stringify(state.orderList));
            } else {
                state.orderList[findId].presentQty = action.payload.presentQty;
            }
            state.totalPrice = state.orderList.reduce((total, item) => {
                return total + item.presentQty * item.detailItems.price;
            }, 0);
            localStorage.setItem('totalPrice', state.totalPrice);
            state.totalQty = state.orderList.reduce((total, item) => {
                return total + item.presentQty;
            }, 0);
            localStorage.setItem('totalQty', state.totalQty);
        },
        removeProduct(state, action) {
            let index = state.orderList.findIndex((item) => item.detailItems.id === action.payload);
            state.orderList.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(state.orderList));
            state.totalPrice = state.orderList.reduce((total, item) => {
                return total + item.presentQty * item.detailItems.price;
            }, 0);
            localStorage.setItem('totalPrice', state.totalPrice);
            state.totalQty = state.orderList.reduce((total, item) => {
                return total + item.presentQty;
            }, 0);
            localStorage.setItem('totalQty', state.totalQty);
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

export const { addProduct, removeProduct, increaseQty, decreaseQty } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
export const selectOrderList = (state) => state.cartReducer.orderList;
export const selectQty = (state) => state.cartReducer.presentQty;
export const selectTotalPrice = (state) => state.cartReducer.totalPrice;
export const selectTotalQty = (state) => state.cartReducer.totalQty;