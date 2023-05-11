import { NonIdealState }         from "@blueprintjs/core"
import { Suspense }              from "react"
import ReactPlayer               from "react-player/youtube"
import { Outlet, useLoaderData } from "react-router-dom"
import { Video }                 from "../@types/types"

const Home = () => {
  const loaderData = useLoaderData() as Video[]
  return (
    <>
      <Suspense fallback={ <div>Loading...</div> }>
        <Outlet/>
      </Suspense>
      <h1>Popular videos</h1>
      <Suspense fallback={ <p>Loading...</p> }>
        { loaderData?.length > 0
          ? (
            <ul>
              { loaderData.map( ( { videoId } ) => (
                <li key={ videoId }>
                  <ReactPlayer
                    url={ `https://youtube.com/watch?v=${ videoId }` }
                    controls
                  />
                </li>
              ) ) }
            </ul>
          )
          : <NonIdealState
            icon="search"
            title="No results or the search failed."/>
        }
      </Suspense>
    </>
  )
}

export default Home
