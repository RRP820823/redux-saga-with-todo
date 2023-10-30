import React from "react";
import { useDispatch } from "react-redux";
import { editTodo, removeTodo } from "./TodoActions";
function Todo({ todo }: { todo: any }) {
  const [editingMode, setEditingMode] = React.useState(false);
  let dispatch = useDispatch();

  function handelEditMode(todoID: number, todo?: any) {
    setEditingMode(!editingMode);
  }

  function handelTodoChange(
    e: React.ChangeEvent<HTMLInputElement>,
    todoID?: any
  ) {
    dispatch(editTodo(e.target.value, todoID));
  }

  function handelDeletetodo(todoID?: any) {
    dispatch(removeTodo(todoID));
  }
  return (
    <div
      style={{
        display: "inline-flex",
        padding: "10px",
        border: "1px solid black",
        width: "100%",
      }}
    >
      {!editingMode ? (
        <p>{todo?.title}</p>
      ) : (
        <input
          type="text"
          onChange={(e) => handelTodoChange(e, todo.id)}
          value={todo.title}
        />
      )}
      {!editingMode ? (
        <>
          <button onClick={() => handelEditMode(todo.id, todo)}>edit</button>
          <button onClick={() => handelDeletetodo(todo.id)}>Delete</button>
        </>
      ) : (
        <>
          <button onClick={() => handelEditMode(todo.id)}>save</button>
        </>
      )}
    </div>
  );
}

export default Todo;
