import { cartReducer } from '~/reducers/Cart';
import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from '~/reducers/Login';
import { paginateReducer } from '~/reducers/Pagination';
import { productReducer } from '~/reducers/Products';

export const store = configureStore({
    reducer: {
        cartReducer: cartReducer,
        productReducer: productReducer,
        paginateReducer: paginateReducer,
        loginReducer: loginReducer,
    },
});
