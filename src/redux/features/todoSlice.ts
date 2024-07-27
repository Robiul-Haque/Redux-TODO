import { createSlice } from "@reduxjs/toolkit";

type initialType = object[]

const initialState: initialType = [];

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {

    }
});

export default todoSlice.reducer;