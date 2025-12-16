import { createRoot } from "react-dom/client";
import { App } from "./app/App";
import "./base.css";

const rootContainer = document.getElementById("root") as HTMLElement;

const root = createRoot(rootContainer);

root.render(<App></App>);
