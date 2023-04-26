import { useLoaderData } from "react-router-dom"

interface Video {
  "type": "video", // Constant

  "title": String,
  "videoId": String,

  "author": String,
  "authorId": String,
  "authorUrl": String,
  "authorVerified": Boolean,

  "videoThumbnails": [
    // One or more ThumbnailObject
  ],

  "description": String,
  "descriptionHtml": String,

  "viewCount": Number, // Integer
  "lengthSeconds": Number, // Integer

  "published": Number, // Unix timestamp
  "publishedText": String,

  // Only available on premiered videos
  "premiereTimestamp": Number, // Unix timestamp

  "liveNow": Boolean,
  "premium": Boolean,
  "isUpcoming": Boolean
}

const Home = () => {
  const loaderData = useLoaderData() as Video[]
  return (
    <>
      <h1>Popular videos</h1>
      <ul>
        { loaderData?.map( video => (
          <li key={ video.videoId }>
            <h1>{ video.title }</h1>
          </li>
        ) ) }
      </ul>
    </>
  )
}

export default Home
