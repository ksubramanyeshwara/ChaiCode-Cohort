import { useEffect, useState } from "react";
import { TodoContext } from "./TodoContext";

// 3.
const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((previousTodo) => [{ id: Date.now(), ...todo }, ...previousTodo]);
  };
  const updateTodo = (id, todo) => {
    setTodos((previousTodo) =>
      previousTodo.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };
  const deleteTodo = (id) => {
    setTodos((previousTodo) =>
      previousTodo.filter((prevTodo) => prevTodo.id !== id)
    );
  };
  const toggleTodo = (id) => {
    setTodos((previousTodo) =>
      previousTodo.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
