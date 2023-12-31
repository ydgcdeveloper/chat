import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "react-auth-kit";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider
      authType={"cookie"}
      authName={"_auth"}
      cookieDomain={window.location.hostname}
      // cookieSecure={window.location.protocol === "https:"}
      cookieSecure={false}
    >
      <BrowserRouter>
          <App />
          <Toaster />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
