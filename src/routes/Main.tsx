import { NonIdealState } from "@blueprintjs/core"
import { useAtom }       from "jotai"
import { Suspense }      from "react"
import { Link, Outlet }  from "react-router-dom"
import { searchAtom }    from "../state/atoms"

const Main = () => {
  const [ searchResults ] = useAtom( searchAtom )
  return ( <>
      <Suspense fallback={ <div>Loading...</div> }>
        <Outlet/>
      </Suspense>
      { searchResults?.length > 0
        ? (
          <ul>
            { searchResults.map( ( { id, title } ) => (
              <li key={ id }>
                <Link to={ id }>{ title }</Link>
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