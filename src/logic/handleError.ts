const handleError = ( error ) => ( callback ) => {
  console.error( error )
  callback( error )
}

export default handleError