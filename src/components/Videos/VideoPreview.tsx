import { Text } from "@blueprintjs/core"
import { Link } from "react-router-dom"
import Video    from "../../@types/Video"
import "../../css/VideoPreview.scss"

const urlToLink = ( url: string ) => {
  const start  = url.lastIndexOf( "=" ) + 1
  const prefix = "video/"
  return prefix + url.substring( start )
}

const VideoPreview = ( { video }: { video: Video } ) => {
  const {
          title,
          thumbnail,
          uploaderName,
          uploaderUrl,
          uploaderAvatar,
          uploaded,
        } = video
  return (
    <div className = "video-preview">
      <img src = { thumbnail } alt = { title }/>

      <div className = "info">
        <Text>{ title }</Text>
        <p className = "uploader">
          <Link to = { uploaderUrl?.slice( 1 ) }>
            <img className = "avatar"
                 src = { uploaderAvatar }
                 alt = { uploaderName }/>
            <span>{ uploaderName }</span>
          </Link>
        </p>
        <p className = "uploaded">{ new Date( uploaded ).toLocaleDateString() }</p>
      </div>
    </div>
  )
}

export default VideoPreview
