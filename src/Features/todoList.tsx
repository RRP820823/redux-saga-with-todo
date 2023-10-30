import React from "react";
import Todo from "./Todo";
// import Todo from "./Todo";

export default function TodoList({ todos }: { todos?: Array<any> }) {
  // const [input, setinput] = React.useState("");

  return (
    <ul>
      {todos &&
        todos.map((todo: any) => (
          <>
            <li>
              <Todo todo={todo}></Todo>
            </li>
          </>
        ))}
    </ul>
  );
}
