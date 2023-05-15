import { Classes, Icon }                               from "@blueprintjs/core"
import { ContentTypes, fetchInstances, searchContent } from "@invidjs/invid-js"
import { useAtom }                                     from "jotai"
import { useState }                                    from "react"
import { useNavigate }                                 from "react-router-dom"
import handleError
                                                       from "../logic/handleError"
import { errorAtom, searchAtom }                       from "../state/atoms"

const Search = () => {
  const [ , setError ]         = useAtom( errorAtom )
  const [ , setSearchResults ] = useAtom( searchAtom )
  const navigate               = useNavigate()

  const [ query, setQuery ]   = useState( "" )
  const [ status, setStatus ] = useState( "" )

  const search = async ( _ = {}, tryNumber = 0 ) => {
    if ( Boolean( status ) ) return

    setStatus( "fetching" )
    const instances = await fetchInstances()
    const instance  = instances.find( ( { api_allowed } ) => api_allowed )
    try {
      const response = await searchContent(
        instance,
        query,
        { type: ContentTypes.Video },
      )
      // @ts-ignore
      setSearchResults( response )
      setStatus( "" )
      navigate( "/odin-invidious/main" )
      return response
    } catch ( error ) {
      handleError( error )( setError )
      setStatus( "" )
      return []
    }
  }

  return (
    <>
      <div
        className={ Classes.INPUT_GROUP }
      >
        <Icon
          icon={ status === "fetching" ? "dot" : "search" }
          onClick={ search }
        />
        <input
          className={ Classes.INPUT }
          type="text"
          value={ query }
          placeholder="Search"
          onChange={ ( event ) => setQuery( event.target.value ) }
          onKeyDown={ ( event ) => event.key === "Enter" && search() }
          disabled={ Boolean( status ) }
        >
        </input>
      </div>
    </>
  )
}

export default Search