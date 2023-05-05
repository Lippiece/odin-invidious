import { NonIdealState } from "@blueprintjs/core"
import { useAtom }       from "jotai"
import ReactPlayer       from "react-player/youtube"
import { searchAtom }    from "../state/atoms"

const Main = () => {
  const [ searchResults ] = useAtom( searchAtom )
  return ( <>
      { searchResults?.length > 0
        ? (
          <ul>
            { searchResults.map( ( { id } ) => (
              <li key={ id }>
                <ReactPlayer
                  url={ `https://youtube.com/watch?v=${ id }` }
                  controls
                />
              </li>
            ) ) }
          </ul>
        )
        : <NonIdealState
          icon="info-sign"
          title="No results or the search has failed."/>
      }
    </>
  )
}

export default Main