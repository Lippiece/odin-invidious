import { NonIdealState, Text } from "@blueprintjs/core"
import { useAtom }             from "jotai"
import { Suspense }            from "react"
import { Link, Outlet }        from "react-router-dom"
import { searchAtom }          from "../state/atoms"

const convertUrlToId = ( url: string ) => url
  .substring( url.lastIndexOf( "=" ) + 1 )

const Main = () => {
  const [ searchResults ] = useAtom( searchAtom )
  console.debug( searchResults )
  return ( <>
      <Suspense fallback = { <div>Loading...</div> }>
        <Outlet/>
      </Suspense>
      { searchResults?.length > 0
        ? (
          <ul>
            { searchResults.map( ( {
                                     url,
                                     title,
                                     uploaderName,
                                     uploaded,
                                     thumbnail,
                                     uploaderAvatar,
                                   } ) => (
              <li key = { convertUrlToId( url ) }>
                <div>
                  <Link to = { convertUrlToId( url ) }>
                    <img src = { thumbnail } alt = "Video thumbnail"/>
                  </Link>
                  <img src = { uploaderAvatar }
                       alt = "Uploader avatar"
                       style = { {
                         position: "absolute",
                         left    : "50%",
                       } }/>
                </div>
                <div>
                  <Link to = { convertUrlToId( url ) }>{ title }</Link>
                  <span>
                  <Text>by { uploaderName } on { new Date( uploaded ).toLocaleDateString() }</Text>
                  </span>
                </div>
              </li>
            ) ) }
          </ul>
        )
        : <NonIdealState
          icon = "info-sign"
          title = "No results or the search has failed."/>
      }
    </>
  )
}

export default Main
