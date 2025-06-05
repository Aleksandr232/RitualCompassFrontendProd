import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import { Root } from "./root";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
