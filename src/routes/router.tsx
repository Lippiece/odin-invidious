import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

import App     from "../App"
import Home    from "./Home"
import Main    from "./Main"
import Profile from "./Profile"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={ <App/> }
    >
      <Route
        loader={ () => fetch( `https://invidious.baczek.me/api/v1/popular` ) }
        path="/"
        element={ <Home/> }
      />
      <Route
        path="/profile"
        element={ <Profile/> }
      />
      <Route
        path="/main"
        element={ <Main/> }
      />
    </Route>,
  ),
)

export default router
