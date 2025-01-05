import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../features/counter/counterSlice";

const Counter = () => {
  const [incrementValue, setIncrementValue] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div className="flex gap-1 mb-1">
          <button
            className="bg-gray-300 cursor-pointer outline-none"
            aria-label="Increment value"
            onClick={() => {
              dispatch(increment());
            }}
          >
            Increment
          </button>

          <span className="bg-gray-300 select-none">{count}</span>

          <button
            className="bg-gray-300 cursor-pointer outline-none"
            aria-label="Decrement value"
            onClick={() => {
              dispatch(decrement());
            }}
          >
            Decrement
          </button>
        </div>

        <div className="flex gap-1">
          <input
            className="bg-gray-300 outline-none pl-2"
            type="number"
            name=""
            id=""
            value={incrementValue}
            onChange={(e) => {
              setIncrementValue(Number(e.target.value));
            }}
          />
          <button
            className="bg-gray-300"
            onClick={() => dispatch(incrementByAmount(incrementValue))}
          >
            Add Amount
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
