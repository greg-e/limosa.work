import React from "react";
import { createRoot } from "react-dom/client";
import ActualDeckApp from "./ActualDeckApp.jsx";
import "./styles.css";

// Mount React app safely
const mount = document.getElementById("actual-deck");

if (mount) {
  createRoot(mount).render(<ActualDeckApp />);
} else {
  console.error("Mount element #actual-deck not found.");
}
