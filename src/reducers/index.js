import { cartReducer } from './Cart';
import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from './Login';
import { paginateReducer } from './Pagination';
import { productReducer } from './Products';

const rootReducer = combineReducers({
    cart: cartReducer,
    product: productReducer,
    paginate: paginateReducer,
    login: loginReducer,
});

export default rootReducer;
