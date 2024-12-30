import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-b1c3fjcmk7o7r0qg.us.auth0.com"
      clientId="lvAh4BLGdd6cn64D4oE48ou0OQgPvxDm"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
