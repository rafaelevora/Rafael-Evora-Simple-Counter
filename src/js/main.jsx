import React from "react";
import { createRoot } from "react-dom/client";
import SecondsCounter from "./components/SecondsCounter.jsx";

let seconds = 0;

function renderCounter() {
  const root = createRoot(document.getElementById("root"));
  root.render(<SecondsCounter seconds={seconds} />);
}

// Update every second
setInterval(() => {
  seconds++;
  renderCounter();
}, 1000);

// Initial render
renderCounter();