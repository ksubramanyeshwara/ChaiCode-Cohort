import { Children, createContext, useContext } from "react";

// 1. create a context
const TodoContext = createContext({
  todos: [],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleTodo: () => {},
});

// 2. create a custom hook to use the context
const useTodo = () => {
  return useContext(TodoContext);
};

// export custom hook and provider
export { TodoContext, useTodo };
