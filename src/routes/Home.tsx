import ReactPlayer       from "react-player/youtube"
import { useLoaderData } from "react-router-dom"
import { Video }         from "../@types/types"

const Home = () => {
  const loaderData = useLoaderData() as Video[]
  return (
    <>
      <h1>Popular videos</h1>
      <ul>
        { loaderData?.length > 0
          ? loaderData.map( ( { videoId } ) => (
            <li key={ videoId }>
              <ReactPlayer
                url={ `https://youtube.com/watch?v=${ videoId }` }
                controls
              />
            </li>
          ) )
          : <p>No videos loaded. It is a bug.</p> }
      </ul>
    </>
  )
}

export default Home
