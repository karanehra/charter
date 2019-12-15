import ReactDOM from "react-dom";
import React from "react";
import Charter from "./components/app";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./styles/index.scss";

store.subscribe(() => {
  localStorage.setItem("charterStore", JSON.stringify(store.getState()));
});

ReactDOM.render(
  <Provider store={store}>
    <Charter />
  </Provider>,
  document.getElementById("root")
);
