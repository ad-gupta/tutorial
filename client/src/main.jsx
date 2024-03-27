import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./store.js";
import { ToastContainer} from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import "react-toastify/dist/ReactToastify.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <Router>
        <App />
        <ToastContainer/>
      </Router>
    </Provider>
  </PersistGate>
);
