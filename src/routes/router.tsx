import { useAtom } from "jotai"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  useRouteError,
}                  from "react-router-dom"

import App                 from "../App"
import ChannelPage         from "../components/Videos/ChannelPage"
import VideoPage           from "../components/Videos/VideoPage"
import fetchChannel        from "../logic/API/fetchChannel"
import fetchInstances      from "../logic/API/fetchInstances"
import fetchTrendingVideos from "../logic/API/fetchTrendingVideos"
import { errorAtom }       from "../state/atoms"
import Home                from "./Home"
import Main                from "./Main"
import Profile             from "./Profile"

const ErrorElement = () => {
  const [ , setError ] = useAtom( errorAtom )
  const error          = useRouteError()
  setError( error )
  return <></>
}

const eitherInstances = await fetchInstances()

const loaders = {
  trending: () => eitherInstances
    .map( instances => fetchTrendingVideos( instances ) ),
  channel : async ( { params } ) => eitherInstances
    .map( async instances => await fetchChannel( instances,
                                                 params.channelId ) ),
}
const routes  = createRoutesFromElements(
  <Route
    path = "/odin-invidious/"
    element = { <App/> }
  >
    <Route
      loader = { loaders.trending }
      path = "/odin-invidious/"
      element = { <Home/> }
      errorElement = { <ErrorElement/> }
    />
    <Route
      path = "/odin-invidious/profile"
      element = { <Profile/> }
    />
    <Route
      path = "/odin-invidious/main"
      element = { <Main/> }
    >
      <Route
        path = "video/:videoId"
        element = { <VideoPage/> }
      />
      <Route
        path = "channel/:channelId"
        loader = { loaders.channel }
        element = { <ChannelPage/> }
        errorElement = { <ErrorElement/> }
      />
    </Route>
  </Route>,
)
const router  = createBrowserRouter( routes )

export default router
