import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './index.css'

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* ✅ All routing must be inside this */}
    </BrowserRouter>
  </React.StrictMode>
);
