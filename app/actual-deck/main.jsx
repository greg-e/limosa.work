import React from "react";
import { createRoot } from "react-dom/client";
import ActualDeckApp from "./ActualDeckApp.jsx";
import "./styles.css";

createRoot(document.getElementById("actual-deck")).render(<ActualDeckApp />);

