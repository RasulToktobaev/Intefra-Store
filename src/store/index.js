import {configureStore} from "@reduxjs/toolkit";
import clothesSlice from "./reducers/clothes/clothes";
import productSlice from './reducers/oneProduct/oneProduct'
import cartSlice from './reducers/cart/cart'
import {rememberReducer, rememberEnhancer} from 'redux-remember';

const reducers = {
    clothes:clothesSlice,
    product:productSlice,
    cart:cartSlice
 };

const rememberedKeys = ['clothes','product','cart'];

const store = configureStore({
    reducer : rememberReducer(reducers),
    enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(
       rememberEnhancer(
            window.localStorage,
            rememberedKeys
        )
    )
})

export default store

