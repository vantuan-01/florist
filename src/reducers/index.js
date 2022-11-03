import { cartReducer } from './Cart';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    cart: cartReducer,
});

export default rootReducer;
