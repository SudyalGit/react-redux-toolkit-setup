import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todos/todosSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className="my-1 w-52">
        {todos.map((todo) => (
          <div
            className="flex items-center justify-between gap-1 mb-1"
            key={todo.id}
          >
            <div className="bg-gray-300 flex-1 pl-2">{todo.title}</div>
            <div
              className="cursor-pointer bg-gray-300"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              remove
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todos;
