import { createRoot } from "react-dom/client"
import { App } from "./App"
import './css/base.css';

const rootContainer = document.getElementById('root') as HTMLElement

const root = createRoot(rootContainer)

root.render(<App></App>)