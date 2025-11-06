import React from "react";
import { createRoot } from "react-dom/client";
import ActualDeckApp from "./ActualDeckApp.jsx";
import "./app.css";

const el = document.getElementById("actual-deck");
if (el) createRoot(el).render(<ActualDeckApp />);
else console.error("Mount #actual-deck not found");
