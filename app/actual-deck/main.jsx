import React from "react";
import { createRoot } from "react-dom/client";
import ActualDeckApp from "./ActualDeckApp.jsx";
import "./styles.css";

const m = document.getElementById("actual-deck");
if (m) createRoot(m).render(<ActualDeckApp />);
else console.error("Mount element #actual-deck not found.");
