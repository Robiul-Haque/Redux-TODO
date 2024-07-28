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
        },
        toggleComplete: (state, action: PayloadAction<string>) => {
            const task = state.todo?.find(item => item?.id === action.payload);
            if (task) {
                task.isCompleted = !task.isCompleted;
            }
        }
    }
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;