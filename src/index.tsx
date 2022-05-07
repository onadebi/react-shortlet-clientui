import React from "react";
import ReactDOM from "react-dom/client";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Provider } from "react-redux";
import storeKeeper from "./store/storeKeeper";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={storeKeeper}>
      <App />
    </Provider>
  </React.StrictMode>
);
