/*
 const fetchTrendingVideos = async ( instances: Instance[] ) => {
 const fetchSingular = async ( instance: Instance ) => fetch( `${ instance.api_url }/trending?region=US` )
 .then( async response => await response.json() )
 .catch( error => Left( error as Error ) )

 try {
 const videos: Video[] = await Promise.any( instances
 .map( fetchSingular ) )
 return Right( videos )
 } catch ( error ) {
 return Left( error as Error )
 }
 }
 */
import { Left, Right } from "purify-ts"
import Instance        from "../../@types/Instance"

const fetchTrendingVideos = async ( instances: Instance[] ) => {
  const fetchTrending = async ( instance ) => ( await fetch( `${ instance.api_url }/trending?region=US` ) )
    .json()

  try {
    const videos = await Promise.any( instances.map( await fetchTrending ) )
    return Right( videos )
  } catch ( error ) {
    return Left( error as Error )
  }
}
export default fetchTrendingVideos
