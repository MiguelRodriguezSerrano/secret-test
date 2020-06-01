import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {ScreenProvider} from './context/ScreenContext';
ReactDOM.render(
  <React.StrictMode>
    <ScreenProvider>
    <App />
    </ScreenProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
