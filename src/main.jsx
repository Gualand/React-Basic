import React from "react";
import ReactDOM from "react-dom/client";
import "./input.css";
import "./output.css";
import NoteApp from "./component/NoteApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>
);
