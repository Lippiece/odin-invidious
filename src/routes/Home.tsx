import { NonIdealState } from "@blueprintjs/core"
import { Suspense }      from "react"
import ReactPlayer       from "react-player/youtube"
import { useLoaderData } from "react-router-dom"
import { Video }         from "../@types/types"

const Home = () => {
  const loaderData = useLoaderData() as Video[]
  return (
    <>
      <h1>Popular videos</h1>
      <Suspense fallback={ <p>Loading...</p> }>
        <ul>
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
        </ul>
      </Suspense>
    </>
  )
}

export default Home
