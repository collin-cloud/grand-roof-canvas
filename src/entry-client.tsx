import { hydrateRoot, createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";

const container = document.getElementById("root")!;

const tree = (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

// Hydrate only if real pre-rendered DOM exists (production build).
// In dev, #root contains only the unprocessed `<!--app-html-->` comment, so mount fresh.
const hasPrerenderedContent = Array.from(container.childNodes).some(
  (node) => node.nodeType === Node.ELEMENT_NODE
);

if (hasPrerenderedContent) {
  hydrateRoot(container, tree);
} else {
  container.innerHTML = "";
  createRoot(container).render(tree);
}
