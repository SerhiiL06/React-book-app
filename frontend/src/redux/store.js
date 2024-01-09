import { configureStore } from "@reduxjs/toolkit";
import bookSlices from "./slices/bookSlices";
import filterSlices from "./slices/filterSlices";



const store = configureStore({
    reducer: {books: bookSlices, filter: filterSlices}
})


export default store