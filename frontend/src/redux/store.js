import { configureStore } from "@reduxjs/toolkit";
import bookSlices from "./slices/bookSlices";
import filterSlices from "./slices/filterSlices";
import errorSlice from "./slices/errorSlice";



const store = configureStore({
    reducer: {books: bookSlices, filter: filterSlices, error: errorSlice}
})


export default store