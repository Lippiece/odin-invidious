import {
  Button,
  H3,
  H4,
  InputGroup,
  Section,
  SectionCard,
  Text,
}                              from "@blueprintjs/core"
import { useAtom }             from "jotai"
import { useEffect, useState } from "react"
import ReactPlayer             from "react-player/youtube"
import Comments                from "../../@types/Comments"
import "../../css/VideoPage.scss"
import addCommentForVideo      from "../../logic/addCommentsForVideo"
import getComments             from "../../logic/getComments"
import handleError             from "../../logic/handleError"
import prettifyTimestamp       from "../../logic/prettifyTimestamp"
import { errorAtom, userAtom } from "../../state/atoms"

const VideoPage = ( { videoId }: { videoId: string } ) => {
  const Comments = () => {
    const [ , setError ]            = useAtom( errorAtom )
    const [ user ]                  = useAtom( userAtom )
    const [ comments, setComments ] = useState<Comments>( {} )
    const [ message, setMessage ]   = useState( "" )

    useEffect( () => {
      fetchComments()
    }, [] )

    const fetchComments    = () => {
      getComments( videoId )
        .then( setComments )
        .catch( error => handleError( setError )( error ) )
    }
    const handleAddComment = () => {
      const newComment = { [ user || "Anonymous" ]: [ message, Date.now() ] }
      addCommentForVideo( videoId, newComment )
        .then( fetchComments )
        .catch( handleError( setError ) )
      setMessage( "" )
    }

    return <Section title = "Comments">
      { Object.keys( comments || {} ).length > 0
        && <SectionCard>
          <ul>
            { Object.keys( comments || {} )
                    .map( ( key, index ) =>
                            Object.entries( comments[ key ] || {} )
                                  .map( ( [ commenter, [ comment, timestamp ] ] ) =>
                                          <li key = { index }>
                                            <H3>{ commenter }</H3>
                                            <H4>{ prettifyTimestamp(
                                              timestamp )
                                            }</H4>
                                            <Text>{ comment }</Text>
                                          </li>,
                                  ) ) }
          </ul>
        </SectionCard> }
      <SectionCard>
        <InputGroup
          leftIcon = "comment"
          type = "text"
          value = { message }
          placeholder = "Add a comment..."
          onChange = { ( event ) => setMessage( event.target.value ) }
          rightElement = { <Button
            icon = "add"
            text = "Add Comment"
            onClick = { handleAddComment }/> }
        />
      </SectionCard>
    </Section>
  }
  return <Section compact className = "video">
    <SectionCard>
      <ReactPlayer
        url = { `https://www.youtube.com/watch?v=${ videoId }` }
        controls
        width = { "100%" }
        height = { "50vh" }
      />
    </SectionCard>
    { <SectionCard className = "comments">
      <Comments/>
    </SectionCard> }
  </Section>
}
export default VideoPage
