import { compose } from "redux";

import { legacy_createStore as createStore, applyMiddleware } from "redux";
import TodoReducer from "./Reducer";
import mySaga from "./saga";
import createSagaMiddleware from "redux-saga";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  TodoReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(mySaga);
export default store;
