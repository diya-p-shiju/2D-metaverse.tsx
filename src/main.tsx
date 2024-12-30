import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Auth0withRedirect from "./authentication/Auth0withRedirect.tsx";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Auth0withRedirect>
        <App />
      </Auth0withRedirect>
    </Router>
  </StrictMode>
);
