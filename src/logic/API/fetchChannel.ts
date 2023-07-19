import { Left, Right } from "purify-ts"
import Channel         from "../../@types/Channel"
import Instance        from "../../@types/Instance"

const fetchChannel = async ( instances, channelId ) => {

  try {
    const fetchSingular = async ( instance: Instance ) => fetch( `${ instance.api_url }/channel/${ channelId }` )
      .then( async response => await response.json() )
      .catch( error => Left( error as Error ) )

    const channel: Channel = await Promise.any( instances
                                                  .map( fetchSingular ) )
    return Right( channel )
  } catch ( error ) {
    return Left( error as Error )
  }

}

export default fetchChannel
