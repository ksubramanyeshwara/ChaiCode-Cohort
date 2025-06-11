import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./features/todos/TodoList";

function App() {
  return (
    <>
      <AddTodoForm />
      <TodoList />
    </>
  );
}

export default App;
