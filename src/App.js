import React, { useReducer } from "react";
import "./style.css";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}
