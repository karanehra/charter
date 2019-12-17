import { createStore, combineReducers, applyMiddleware } from "redux";
import nodeReducer from "../reducers/nodeReducer";
import connectorReducer from "../reducers/connectorReducer";
import { logger } from "redux-logger";
let persistedState = JSON.parse(localStorage.getItem("charterStore")) || {};

export default createStore(
  combineReducers({ nodeReducer, connectorReducer }),
  persistedState,
  applyMiddleware(logger)
);
