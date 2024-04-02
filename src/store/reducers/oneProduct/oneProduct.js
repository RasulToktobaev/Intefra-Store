import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getOneProduct = createAsyncThunk(
    'get/product',
    async (arg, {rejectWithValue}) => {
        try {
            const response = await axios(`http://localhost:8080/clothes/${arg.id}`)

            if(response.status === 200) {
                return response.data
            }else {
                throw new Error('Ошибка при получение продукта')
            }



        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
)


const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: {},
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOneProduct.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = 'success'
            state.error = null
        })
        builder.addCase(getOneProduct.pending, (state) => {
            state.status = 'loading'
            state.error = null
        })
        builder.addCase(getOneProduct.rejected, (state, action) => {
            state.status = 'error'
            state.error = action.payload
        })
    }
})


export default productSlice.reducer