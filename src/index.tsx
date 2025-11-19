import { createRoot } from "react-dom/client"
import { App } from "./App"

const rootContainer = document.getElementById('root') as HTMLElement


// 2. Создаем "корень" React-приложения.
// С помощью createRoot() мы говорим React, что rootContainer
// будет контейнером для нашего приложения.
const root = createRoot(rootContainer)

root.render(<App></App>)