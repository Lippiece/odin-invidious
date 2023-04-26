const homepageLoader = async () => {
  try {
    const response = await fetch( `https://invidious.baczek.me/api/v1/popular`,
                                  {
                                    method: 'GET',
                                  },
    )
    console.log( "response", response )
    const json = await response.json()
    console.log( "json", json )
    const result = response.ok ? json : []
    console.log( "result", result )
    return result
  } catch ( error ) {
    console.error( error )
  }
}

export default homepageLoader