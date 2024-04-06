import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
        totalPrice: 0
    },
    reducers: {
        addCart: (state, action) => {
            let check = state.data.some((item) => item.id === action.payload.id)

            if (check) {
                state.data = state.data.map((item) => {
                    if (item.id === action.payload.id) {
                        return {...item, count: item.count + 1}
                    }
                    return item
                })
            } else {
                state.data = [...state.data, {...action.payload, count: 1}]
            }
        },
        removeCart : (state, action) => {
            let count = state.data.find(item => item.id === action.payload.id)?.count

            if(count > 1){
                state.data = state.data.map((item) => {
                    if (item.id === action.payload.id) {
                        return {...item, count: item.count - 1}
                    }
                    return item
                })
            }else {
                state.data = state.data.filter(item => item.id !== action.payload.id)
            }
        }
    }
})

export const {addCart, removeCart} = cartSlice.actions
export default cartSlice.reducer