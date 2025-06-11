import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

/*
state: {
  todos: { // This 'todos' key is what you're defining now
    todos: [] // This comes from the initialState in your slice
  }
}
*/
