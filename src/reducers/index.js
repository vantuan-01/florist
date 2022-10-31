import { cartReducer } from '~/reducers/Cart';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    cart: cartReducer,
});

export default rootReducer;
