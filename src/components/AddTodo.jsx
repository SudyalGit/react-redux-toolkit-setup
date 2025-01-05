import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todosSlice";

const AddTodo = () => {
  const [input, setInput] = useState("learn react");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <div className="my-1">
        <form onSubmit={handleSubmit} className="flex gap-1" action="">
          <input
            className="bg-gray-300 outline-none pl-2"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="bg-gray-300" type="submit">
            Add Todo
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTodo;
