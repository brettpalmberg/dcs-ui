import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "redux-bundler-react";
import { getNavHelper } from "internal-nav-helper";
import getStore from "./app-bundles";

const store = getStore();

ReactDOM.render(
  <Provider store={store}>
    <div onClick={getNavHelper(store.doUpdateUrl)}>
      <App />
    </div>
  </Provider>,
  document.getElementById("root")
);
