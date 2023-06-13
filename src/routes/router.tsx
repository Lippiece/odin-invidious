import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

import App            from "../App"
import VideoPage      from "../components/VideoPage"
import homepageLoader from "../logic/homepageLoader"
import Home           from "./Home"
import Main           from "./Main"
import Profile        from "./Profile"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/odin-invidious/"
      element={ <App/> }
    >
      <Route
        loader={ homepageLoader }
        path="/odin-invidious/"
        element={ <Home/> }
        errorElement={ <h1>Error</h1> }
      >
        <Route
          path=":videoId"
          element={ <VideoPage/> }
        />
      </Route>
      <Route
        path="/odin-invidious/profile"
        element={ <Profile/> }
      />
      <Route
        path="/odin-invidious/main"
        element={ <Main/> }
      >
        <Route
          path=":videoId"
          element={ <VideoPage/> }
        />
      </Route>
    </Route>,
  ),
)

export default router
