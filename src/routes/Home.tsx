import { NonIdealState, Text }           from "@blueprintjs/core"
import { useAtom }                       from "jotai"
import { Either }                        from "purify-ts"
import { Suspense, useEffect, useState } from "react"
import ReactPlayer                       from "react-player/youtube"
import { Outlet, useLoaderData }         from "react-router-dom"
import { TrendingVideos }                from "../@types/trendingVideos"
import handleError                       from "../logic/handleError"
import { errorAtom }                     from "../state/atoms"

const Home = () => {
  const [ , setError ]        = useAtom( errorAtom )
  const [ videos, setVideos ] = useState<TrendingVideos>( [] )

  const loaderData = useLoaderData() as Either<Error, Promise<TrendingVideos>>

  console.debug( "loaderData", loaderData )

  useEffect( () => {
    loaderData
      .bimap( handleError( setError ),
              async trendingVideos => setVideos( await trendingVideos ) )

  }, [ loaderData ] )

  return (
    <>
      <Suspense fallback = { <Text>Loading...</Text> }>
        <Outlet/>
      </Suspense>
      <h1>Popular videos</h1>
      <Suspense fallback = { <Text>Loading...</Text> }>
        { videos?.length > 0
          ? ( <ul>
            { videos.map( ( { url } ) => (
              <li key = { url }>
                <ReactPlayer
                  url = { `https://youtube.com${ url }` }
                  controls
                />
              </li>
            ) ) }
          </ul> )
          : <NonIdealState
            icon = "search"
            title = "No results or the search failed."/>
        }
      </Suspense>
    </>
  )
}

export default Home
