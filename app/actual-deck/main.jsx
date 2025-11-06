import React from "react";
import { createRoot } from "react-dom/client";

const el = document.getElementById("actual-deck");
if (el) {
  createRoot(el).render(<div style={{padding:16}}>App boot OK</div>);
} else {
  console.error("No #actual-deck");
}
