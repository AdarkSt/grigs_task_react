import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
          },
          removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
          },
    }
})

export const {
    addTodo,
    removeTodo
} = todosSlice.actions

export default todosSlice.reducer