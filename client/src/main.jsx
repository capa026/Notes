import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { NotesProvider } from "./context/Tasks.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NotesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NotesProvider>
);
