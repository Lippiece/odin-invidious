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
      path="/odin-invidious/"
      element={ <App/> }
    >
      <Route
        loader={ () => fetch( `https://invidious.baczek.me/api/v1/popular` ) }
        path="/odin-invidious/"
        element={ <Home/> }
      />
      <Route
        path="/odin-invidious/profile"
        element={ <Profile/> }
      />
      <Route
        path="/odin-invidious/main"
        element={ <Main/> }
      />
    </Route>,
  ),
)

export default router
