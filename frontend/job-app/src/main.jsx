import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NotesProvider } from "../components/noteContext/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <NotesProvider>
            <App />
        </NotesProvider>
    </React.StrictMode>
);
