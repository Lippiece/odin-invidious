import { Button, Classes, H2, H3, H4, Text } from "@blueprintjs/core"
import { useAtom }                           from "jotai"
import { useEffect, useState }               from "react"
import ReactPlayer                           from "react-player/youtube"
import { useLocation }                       from "react-router-dom"
import { Comments }                          from "../@types/types"
import addCommentForVideo                    from "../logic/addCommentsForVideo"
import getComments                           from "../logic/getComments"
import handleError                           from "../logic/handleError"
import prettifyTimestamp                     from "../logic/prettifyTimestamp"
import { errorAtom, userAtom }               from "../state/atoms"

const VideoPage = () => {
  const separators = useLocation().pathname.split( "/" )

  const videoId  = separators[ separators.length - 1 ]
  const Comments = () => {
    const [ , setError ] = useAtom( errorAtom )
    const [ user ]       = useAtom( userAtom )

    useEffect( () => {
      fetchComments()
    }, [] )

    const fetchComments = () => {
      getComments( videoId )
        .then( setComments )
        .catch( error => handleError( error )( setError ) )
    }

    const handleAddComment = () => {
      const newComment = {
        [ user?.name
          || user?.mail
          || "Anonymous" ]: [ message, Date.now() ],
      }
      addCommentForVideo( videoId, newComment )
        .then( fetchComments )
        .catch( error => handleError( error )( setError ) )
      setMessage( "" )
    }

    const [ comments, setComments ] = useState<Comments>( {} )
    const [ message, setMessage ]   = useState( "" )

    return <>
      <H2>Comments</H2>
      <ul>
        { Object.keys( comments || {} ).length > 0
          && Object.keys( comments || {} )
                   .map( ( key, index ) =>
                           Object.entries( comments[ key ] || {} )
                                 .map( ( [ commenter, [ comment, timestamp ] ] ) =>
                                         <li key={ index }>
                                           <H3>{ commenter }</H3>
                                           <H4>{ prettifyTimestamp(
                                             timestamp ) }</H4>
                                           <Text>{ comment }</Text>
                                         </li>,
                                 ) ) }
      </ul>
      <input
        className={ Classes.INPUT }
        type="text"
        value={ message }
        placeholder="Add a comment..."
        onChange={ ( event ) => setMessage( event.target.value ) }/>
      <Button
        text="Add Comment"
        onClick={ handleAddComment }/>
    </>
  }
  return <>
    <ReactPlayer url={ `https://www.youtube.com/watch?v=${ videoId }` }/>
    <Comments/>
  </>
}
export default VideoPage