import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getCollection = createAsyncThunk(
    'get/clothes',
    async (arg, {rejectWithValue}) => {
        try {
            const response = await axios(`http://localhost:8080/clothes?${arg?.category ? `category=${arg?.category}`: ''}`)

            if(response.status === 200) {
                return response.data
            }else {
                throw new Error('Ошибка при получение данных')
            }



        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
)


const clothesSlice = createSlice({
    name: 'clothes',
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCollection.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = 'success'
            state.error = null
        })
        builder.addCase(getCollection.pending, (state) => {
            state.status = 'loading'
            state.error = null
        })
        builder.addCase(getCollection.rejected, (state, action) => {
            state.status = 'error'
            state.error = action.payload
        })
    }
})


export default clothesSlice.reducer