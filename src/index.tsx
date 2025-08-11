import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Webdesign } from "./screens/Webdesign/Webdesign";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Webdesign />
  </StrictMode>,
);
