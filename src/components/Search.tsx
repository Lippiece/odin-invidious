import { Classes, Icon, Intent, Toaster, ToastProps }  from "@blueprintjs/core"
import { ContentTypes, fetchInstances, searchContent } from "@invidjs/invid-js"
import { useAtom }                                     from "jotai"
import { useRef, useState }                            from "react"
import { searchAtom }                                  from "../state/atoms"

const Search = () => {
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
      console.error( error )
      addToast( {
                  intent : Intent.DANGER,
                  message: `Error: ${ error.message }`,
                } )
      return []
    }
  }

  const toaster  = useRef<Toaster>( null )
  const addToast = ( toast: ToastProps ) => {
    toast.timeout = 5000
    toaster.current?.show( toast )
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
      <Toaster
        ref={ toaster }
      />
    </>
  )
}

export default Search