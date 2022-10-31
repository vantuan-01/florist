import { cartReducer } from '~/reducers/Cart';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        cartReducer: cartReducer,
    },
});
