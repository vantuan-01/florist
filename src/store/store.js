import { cartReducer } from '~/reducers/Cart';
import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from '~/reducers/Products';

export const store = configureStore({
    reducer: {
        cartReducer: cartReducer,
        productReducer: productReducer,
    },
});
