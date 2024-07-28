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
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todo = state.todo.filter(item => item.id !== action.payload);
        }
    }
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;