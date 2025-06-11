import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice.js";

const AddTodoForm = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    // don't add empty todo
    if (input.trim() === "") return;

    // Dispatch the action!
    // This is the most important part.
    // We call the addTodo action creator with the input text as the payload.
    // dispatch() sends the resulting action object to the Redux store.
    dispatch(addTodo(input));

    // clear the input field after todo added
    setInput("");
  };

  return (
    <>
      <form onSubmit={submit} className="flex mt-4">
        <input
          type="text"
          placeholder="Enter Todo..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        >
          Add Todo
        </button>
      </form>
    </>
  );
};

export default AddTodoForm;
