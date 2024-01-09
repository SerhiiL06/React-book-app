import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import setError from "./errorSlice"
import createBook from "../../utils/createBook";
import axios from 'axios'

const initialState = {
    books: [],
    isLoading: false
}

export const fetchBook = createAsyncThunk(
    'book/fetchBook', 
    async (url, thunkAPI) => {

        try {  
            const res = await axios.get(url)
            return res.data
        } catch (error) {
            thunkAPI.dispatch(setError(error.message))
            throw error
        }
    })


const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        deleteBook: (state, action) => {
            return {...state, books: state.books.filter((el) => el.bookId !== action.payload)}
        },

        bookmarkAction: (state, action) => {
            state.books.forEach((el) => {
                if (el.bookId === action.payload) {
                    el.isFavorite = !el.isFavorite
                }
            })
         }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBook.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchBook.fulfilled, (state, action) => {
            state.books.push(createBook({ ...action.payload, method: 'api' }))
            state.isLoading = false
        })
        builder.addCase(fetchBook.rejected, (state) => {
            state.isLoading = false
        })
    }
})





export const { addBook, deleteBook, bookmarkAction } = bookSlice.actions

export const selectIsLoading = (state) => state.books.isLoading

export default bookSlice.reducer
