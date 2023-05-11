import { Classes, Icon }                               from "@blueprintjs/core"
import { ContentTypes, fetchInstances, searchContent } from "@invidjs/invid-js"
import { useAtom }                                     from "jotai"
import { useState }                                    from "react"
import handleError
                                                       from "../logic/handleError"
import { errorAtom, searchAtom }                       from "../state/atoms"

const Search = () => {
  const [ , setError ] = useAtom( errorAtom )

  const [ query, setQuery ]    = useState( "" )
  const [ , setSearchResults ] = useAtom( searchAtom )

  const search = async ( _, tryNumber = 0 ) => {
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
      return response
    } catch ( error ) {
      handleError( error )( setError )
      return []
    }
  }

  return (
    <>
      <div className={ Classes.INPUT_GROUP }>
        <Icon
          icon="search"
          onClick={ search }
        />
        <input
          className={ Classes.INPUT }
          type="text"
          value={ query }
          placeholder="Search"
          onChange={ ( event ) => setQuery( event.target.value ) }
        >
        </input>
      </div>
    </>
  )
}

export default Search