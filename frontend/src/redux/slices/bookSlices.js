import { createSlice } from "@reduxjs/toolkit";
import createBook from "../../utils/createBook";
import axios from 'axios'

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




export const thunkFunction = async (dispatch, getState) => {
          try {
             const {title, author} = await (await axios.get("http://localhost:4000/random-book")).data

            dispatch(addBook(createBook({title, author,  method: 'via API'})))
        } catch (error) {
            console.log("Something went wrong", error)
        }
    }

export const { addBook, deleteBook, bookmarkAction } = bookSlice.actions

export default bookSlice.reducer
