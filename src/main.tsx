import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App, { AppRoutes } from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;
const app = (
  <App>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </App>
);

// Prerendered routes ship with markup to hydrate; the SPA fallback shell is empty.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
