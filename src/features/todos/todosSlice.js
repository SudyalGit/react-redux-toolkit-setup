import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: nanoid(),
      title: "Todo 1",
      completed: false,
    },
  ],
};

export const counterSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        title: action.payload,
        completed: false,
      });
      console.log(action);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      console.log(action);
    },

    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, toggleTodo } = counterSlice.actions;
export default counterSlice.reducer;
