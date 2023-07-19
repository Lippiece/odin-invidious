import { InputGroup }            from "@blueprintjs/core"
import { useAtom }               from "jotai"
import { useState }              from "react"
import { useNavigate }           from "react-router-dom"
import Instance                  from "../../@types/Instance"
import Video                     from "../../@types/Video"
import fetchInstances            from "../../logic/API/fetchInstances"
import handleError               from "../../logic/handleError"
import { errorAtom, searchAtom } from "../../state/atoms"

const Search = () => {
  const [ , setError ]         = useAtom( errorAtom )
  const [ , setSearchResults ] = useAtom( searchAtom )
  const navigate               = useNavigate()

  const [ query, setQuery ]   =
          useState( "" )
  const [ status, setStatus ] = useState( "" )

  const search = async () => {
    if ( Boolean( status ) || !query ) return
    setStatus( "fetching" )

    const fetchVideos = async ( instance: Instance ): Promise<Video[]> =>
      fetch( `${ instance.api_url }/search?q=${ query }&filter=all` )
        .then( async response => {
          return await response.json()
        } )

    const eitherInstances = await fetchInstances()

    const eitherVideos = eitherInstances
      .map( async instances => {
        const videos = await Promise
          .any( instances.map( fetchVideos ) )
        return videos
      } )
    eitherVideos
      .bimap( handleError( setError ),
              async videosPromise => {
                const searchResult = await videosPromise
                setSearchResults( searchResult.items )
                return searchResult.items
              } )
    setStatus( "" )
    navigate( "/odin-invidious/main" )
  }

  return ( <InputGroup
    type = "text"
    value = { query }
    placeholder = "Search"
    onChange = { ( event ) => setQuery( event.target.value ) }
    onKeyDown = { ( event ) => event.key === "Enter" && search() }
    disabled = { Boolean( status ) }
    leftIcon = { status === "fetching" ? "dot" : "search" }
  /> )
}

export default Search
