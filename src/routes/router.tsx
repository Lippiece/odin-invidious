import { Text } from "@blueprintjs/core"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  useRouteError,
}               from "react-router-dom"

import App                    from "../App"
import VideoPage              from "../components/VideoPage"
import homepageTrendingLoader from "../logic/homepageTrendingLoader"
import Home                   from "./Home"
import Main                   from "./Main"
import Profile                from "./Profile"

const errorElement = () => {
  const error = useRouteError()
  return <Text>Error: { error.message }</Text>
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path = "/odin-invidious/"
      element = { <App/> }
    >
      <Route
        loader = { homepageTrendingLoader }
        path = "/odin-invidious/"
        element = { <Home/> }
        errorElement = { errorElement }
      >
        <Route
          path = ":videoId"
          element = { <VideoPage/> }
        />
      </Route>
      <Route
        path = "/odin-invidious/profile"
        element = { <Profile/> }
      />
      <Route
        path = "/odin-invidious/main"
        element = { <Main/> }
      >
        <Route
          path = ":videoId"
          element = { <VideoPage/> }
        />
      </Route>
    </Route>,
  ),
)

export default router
