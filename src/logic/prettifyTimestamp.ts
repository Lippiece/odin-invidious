const prettifyTimestamp = ( timestamp: number ) => {
  const date = new Date( timestamp )

  const options = {
    weekday : 'long',
    year    : 'numeric',
    month   : 'long',
    day     : 'numeric',
    hour    : 'numeric',
    minute  : 'numeric',
    second  : 'numeric',
    timeZone: 'UTC',
  }

  return date.toLocaleDateString( 'en-US', options )

}

export default prettifyTimestamp