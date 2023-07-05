import { Left, Right } from "purify-ts"
import { Instance }    from "../../@types/Instance"
import { Video }       from "../../@types/Video"

const fetchTrendingVideos = async ( instances: Instance[] ) => {
  const fetchSingular = async ( instance: Instance ) => fetch( `${ instance.api_url }/trending?region=US` )
    .then( async response => await response.json() )

  try {
    const videos: Video[] = await Promise.any( instances
                                                 .map( fetchSingular ) )
    return Right( videos )
  } catch ( error ) {
    return Left( error as Error )
  }
}
export default fetchTrendingVideos
