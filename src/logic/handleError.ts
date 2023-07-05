const handleError = ( callback ) => ( error ) => {
  console.error( error )
  callback( error )
}

export default handleError
