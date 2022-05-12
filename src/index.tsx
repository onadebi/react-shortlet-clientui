import React from "react";
import ReactDOM from "react-dom/client";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Provider } from "react-redux";
import storeKeeper from "./store/storeKeeper";
import App from "./App";
import { AppContext, appStore } from "./store/contextapi/AppContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={storeKeeper}>
      <AppContext.Provider value={appStore}>
        <App />
      </AppContext.Provider>
    </Provider>
  </React.StrictMode>
);
