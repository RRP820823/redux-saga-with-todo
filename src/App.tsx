import { useSelector, useDispatch } from "react-redux";
import "./App.css";

// import TodoList from "./Features/todoList";
import React, { useEffect } from "react";
import { setLoading } from "./Features/TodoActions";
import TodoList from "./Features/todoList";
import AddTodo from "./Features/AddTodo";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());
  }, []);

  const todos = useSelector((state: any) => state.todos);

  console.log("todos ", todos);

  // function handelGetUsers() {
  //   dispatch(isLoading());
  // }
  return (
    <div className="App">
      TODO LIST
      <AddTodo></AddTodo>
      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;
