import React from "react";
import { DndProvider } from "react-dnd";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppStateProvider } from "./state/AppStateContext";
import { HTML5Backend } from "react-dnd-html5-backend";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </DndProvider>
  </React.StrictMode>
);
