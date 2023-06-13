import { fetchPopular } from "@invidjs/invid-js"

const homepageLoader = async () => {
  try {
    const invidJs = await import('@invidjs/invid-js')

    const instances = await invidJs
      .fetchInstances( {
                         limit      : 5,
                         api_allowed: true,
                       } )
    console.debug( "instances", instances )

    const result = await Promise.any( instances.map( async ( instance ) => {
      const videos = await fetchPopular( instance )
      return videos
    } ) )
    console.debug( "result", result )
    return result
  } catch ( error ) {
    console.error( error )
    return []
  }
}

export default homepageLoader