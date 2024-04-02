import {configureStore} from "@reduxjs/toolkit";
import clothesSlice from "./reducers/clothes/clothes";
import productSlice from './reducers/oneProduct/oneProduct'
import {rememberReducer, rememberEnhancer} from 'redux-remember';

const reducers = {
    clothes:clothesSlice,
    product:productSlice
 };

const rememberedKeys = ['clothesSlice','productSlice'];

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

