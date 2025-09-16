import React from "react";
import ReactDOM from "react-dom/client";
// @ts-ignore: importing a JS module without TypeScript declarations
import App from "./App";
// @ts-ignore: importing a JS module without TypeScript declarations
import { AuthProvider } from "./context/AuthContext";
import "./index.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </React.StrictMode>
  );
}
