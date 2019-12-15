import { createStore, combineReducers, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import { logger } from "redux-logger";
let persistedState = JSON.parse(localStorage.getItem("charterStore")) || {};

export default createStore(
  combineReducers({ rootReducer }),
  persistedState,
  applyMiddleware(logger)
);
