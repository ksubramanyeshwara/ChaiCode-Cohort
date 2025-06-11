import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleComplete } from "./todoSlice"; // Added this import

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="text-xl font-bold text-center mb-4 mt-2">Your Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`mt-4 flex justify-between items-center px-4 py-2 rounded ${
              todo.completed ? "bg-green-700" : "bg-zinc-800"
            }`}
          >
            <div className="text-white">
              <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={() => dispatch(toggleComplete(todo.id))}
              />
              <div
                // 3. Conditionally add a line-through style
                className={`text-white ${todo.completed ? "line-through" : ""}`}
              >
                {todo.text}
              </div>
            </div>{" "}
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
