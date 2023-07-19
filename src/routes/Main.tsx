import { NonIdealState, Tab, Tabs } from "@blueprintjs/core"
import { useAtom }                  from "jotai"
import { Outlet }                   from "react-router-dom"
import VideoPage                    from "../components/Videos/VideoPage"
import VideoPreview                 from "../components/Videos/VideoPreview"
import { searchAtom }               from "../state/atoms"

const urlToId = ( url: string ) => url.substring( url.lastIndexOf( "=" ) + 1 )

const Main = () => {
  const [ searchResults ] = useAtom( searchAtom )
  return ( <>
      <Outlet/>
      { searchResults?.length > 0
        ? <Tabs vertical renderActiveTabPanelOnly>
          { searchResults
            .map( ( result, index ) =>
                    <Tab
                      key = { index }
                      id = { index }
                      panel = {
                        <VideoPage videoId = { urlToId( result.url ) }/> }
                    >
                      <VideoPreview video = { result }/>
                    </Tab>,
            )
          }
        </Tabs>
        // (
        //   <ul>
        //     { searchResults.map( ( result ) => (
        //       <li key = { result.url }>
        //         <VideoPreview video = { result }/>
        //       </li>
        //     ) ) }
        //   </ul>
        // )
        : <NonIdealState
          icon = "info-sign"
          title = "No results or the search has failed."/>
      }
    </>
  )
}
export default Main
