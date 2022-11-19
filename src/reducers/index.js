import { cartReducer } from './Cart';
import { combineReducers } from '@reduxjs/toolkit';
import { productReducer } from './Products';

const rootReducer = combineReducers({
    cart: cartReducer,
    product: productReducer,
});

export default rootReducer;
