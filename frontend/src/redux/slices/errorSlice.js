// errorSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = '';

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (_, action) => {
      return action.payload;
    },
    clearError: (state, action) => {
      return state;
    },
  },
});

export const { setError, clearError } = errorSlice.actions;

export const selectErrorMessage = (el) => el.error
export default errorSlice.reducer;
