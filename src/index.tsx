import { StrictMode }     from "react"
import ReactDOM           from "react-dom/client"
import { RouterProvider } from "react-router-dom"

import router from "./routes/router"

const root = ReactDOM.createRoot(
  document.querySelector( "#root" ) as HTMLElement
)

root.render(
  <StrictMode>
    <RouterProvider router={ router }/>
  </StrictMode>
)
