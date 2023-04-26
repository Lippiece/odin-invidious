import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

import App           from "../App"
import Home          from "./Home"
import Profile       from "./Profile"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/odin-waldo/"
      element={ <App/> }
    >
      <Route
        path="/odin-waldo/"
        element={ <Home/> }
      />
      <Route
        path="/odin-waldo/profile"
        element={ <Profile/> }
      />
    </Route>
  )
)

export default router
