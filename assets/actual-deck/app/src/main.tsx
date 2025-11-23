import React from "react";
import ReactDOM from "react-dom/client";
import ActualDeckApp from "./ActualDeckApp";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ActualDeckApp />
  </React.StrictMode>
);
