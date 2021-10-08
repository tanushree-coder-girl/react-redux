import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import store from "./services/Store";
import { Provider } from "react-redux";

//store.subscribe(()=> console.log(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
