import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeContextProvider } from "./context/themeContext.jsx";
import { CounterContextProvider } from "./context/counterContext.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";
import { DarkModeProvider } from "./context/darkModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <CounterContextProvider>
          <DarkModeProvider>
            <App />
          </DarkModeProvider>
        </CounterContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);