import React from "react";
import { createRoot } from "react-dom/client";
import ActualDeckApp from "./ActualDeckApp.jsx";
import "./app.css";   // <-- use the CLI output file

const m = document.getElementById("actual-deck");
if (m) createRoot(m).render(<ActualDeckApp />);
else console.error("Mount element #actual-deck not found.");
