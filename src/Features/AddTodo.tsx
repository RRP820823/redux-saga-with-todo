import React from "react";
import { addTodo } from "./TodoActions";
import { useDispatch } from "react-redux";
export default function AddTodo() {
  const [input, setinput] = React.useState<string>("");

  let dispatch = useDispatch();
  function handelAddTodo() {
    dispatch(addTodo(input));
    setinput("");
  }
  return (
    <div>
      <input
        onChange={(e) => setinput(e.target.value)}
        value={input}
        type="text"
      />

      <button onClick={handelAddTodo}>Add</button>
    </div>
  );
}
