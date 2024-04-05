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
        }
    }
})

export const {addCart} = cartSlice.actions
export default cartSlice.reducer