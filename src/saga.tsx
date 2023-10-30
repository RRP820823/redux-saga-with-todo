import { call, put, takeEvery } from "redux-saga/effects";
import { fetchTodos } from "./Features/TodoActions";
function* fetchTodo(): any {
  const Todo = yield call(() =>
    fetch("https://jsonplaceholder.typicode.com/todos")
  );
  const fromattedtodo = yield Todo.json();
  yield put(fetchTodos(fromattedtodo.slice(0, 10)));
}

function* mySaga() {
  yield takeEvery("setLoading", fetchTodo);
}

export default mySaga;
