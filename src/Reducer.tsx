import { stat } from "fs";
import Todo from "./Features/Todo";

let id = 10;
const initialState = {
  isLoading: false,
  todos: [],
};

function TodoReducer(state = initialState, action: any) {
  if (action.type === "setLoading") {
    return { ...state, isLoading: true };
  }

  if (action.type === "fetchTodos") {
    return {
      ...state,
      todos: action.payload,
    };
  }

  if (action.type === "edit") {
    // id
    // new content

    // let todoToUpdate = state.todos.find(
    //   (t: any) => t.id === action.payload.todoId
    // );

    let newTodo = state.todos.map((t: any) =>
      t.id === action.payload.todoId
        ? {
            ...t,
            title: action.payload.input,
          }
        : t
    );
    // let newTodo = { ...todoToUpdate, name: action.payload.input };

    return {
      ...state,
      todos: newTodo,
    };
  }

  if (action.type === "removeTodo") {
    let newTodo = state.todos.filter(
      (t: any) => t.id !== action.payload.todoId
    );

    return {
      ...state,
      todos: newTodo,
    };
  }

  if (action.type === "addTodo") {
    let newtodo = [
      ...state.todos,
      {
        id: ++id,
        title: action.payload.todo,
      },
    ];
    return {
      ...state,
      todos: newtodo,
    };
  }
  return state;
}
export default TodoReducer;
