import { createSlice } from "@reduxjs/toolkit";
import createBook from "../../utils/createBook";

const initialState = []

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state, action) => {
            console.log(action)
            const newBook = createBook(action.payload)
            return [...state, newBook]
        },
        deleteBook: (state, action) => {
            return state.filter((el) => el.bookId !== action.payload)
        },

        bookmarkAction: (state, action) => {
            state.forEach((el) => {
                if (el.bookId === action.payload) {
                    el.isFavorite = !el.isFavorite
                }
            })
         }
    }
})



export const { addBook, deleteBook, bookmarkAction } = bookSlice.actions

export default bookSlice.reducer
