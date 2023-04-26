import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

import App            from "../App"
import homepageLoader from "../logic/homepageLoader"
import Home           from "./Home"
import Profile        from "./Profile"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={ <App/> }
    >
      <Route
        loader={ homepageLoader }
        path="/"
        element={ <Home/> }
      />
      <Route
        path="/profile"
        element={ <Profile/> }
      />
    </Route>,
  ),
)

export default router
