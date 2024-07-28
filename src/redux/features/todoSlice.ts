import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AryType = {
    id: string
    title: string,
    description: string,
    isCompleted?: boolean
}

type InitialStateType = {
    todo: AryType[]
}

const initialState: InitialStateType = {
    todo: []
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<AryType>) => {
            state.todo.push({ ...action.payload, isCompleted: false });
        },
        
    }
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;