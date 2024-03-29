import {configureStore} from "@reduxjs/toolkit";
import clothesSlice from "./reducers/clothes/clothes";
import {rememberReducer, rememberEnhancer} from 'redux-remember';

const reducers = {
    clothes:clothesSlice
 };

const rememberedKeys = ['clothesSlice'];

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

