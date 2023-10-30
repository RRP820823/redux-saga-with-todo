function setLoading() {
  return {
    type: "setLoading", //turns the falkse to true
  };
}

function fetchTodos(todos: any) {
  return {
    type: "fetchTodos", //turns the falkse to true
    payload: todos,
  };
}

function editTodo(input?: any, todoId?: any) {
  return {
    type: "edit",
    payload: {
      todoId,
      input,
    },
  };
}

// removeTodo

function removeTodo(todoId: any) {
  return {
    type: "removeTodo",
    payload: {
      todoId,
    },
  };
}

function addTodo(todo: any) {
  return {
    type: "addTodo",
    payload: {
      todo,
    },
  };
}
export { fetchTodos, setLoading, editTodo, removeTodo, addTodo };
