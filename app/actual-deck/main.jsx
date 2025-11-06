import React from "react";
import { createRoot } from "react-dom/client";
import ActualDeckApp from "./ActualDeckApp.jsx";
import "./app.css"; // built by Tailwind CLI in the workflow

const m = document.getElementById("actual-deck");
if (m) createRoot(m).render(<ActualDeckApp />);
else console.error("Mount #actual-deck not found");
