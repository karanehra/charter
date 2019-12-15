import { createStore, combineReducers, applyMiddleware } from "redux";
import nodeReducer from "../reducers/nodeReducer";
import { logger } from "redux-logger";
let persistedState = JSON.parse(localStorage.getItem("charterStore")) || {};

export default createStore(
  combineReducers({ nodeReducer }),
  persistedState,
  applyMiddleware(logger)
);
