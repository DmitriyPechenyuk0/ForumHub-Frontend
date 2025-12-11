import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./base.css";

const rootContainer = document.getElementById("root") as HTMLElement;

const root = createRoot(rootContainer);

root.render(<App></App>);
