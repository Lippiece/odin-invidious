interface ThumbnailObject {
  "quality": string,
  "url": string,
  "width": number, // Integer
  "height": number // Integer
}

export interface Video {
  "type": "video", // Constant

  "title": string,
  "videoId": string,

  "author": string,
  "authorId": string,
  "authorUrl": string,
  "authorVerified": boolean,

  "videoThumbnails": ThumbnailObject[],

  "description": string,
  "descriptionHtml": string,

  "viewCount": number, // Integer
  "lengthSeconds": number, // Integer

  "published": number, // Unix timestamp
  "publishedText": string,

  // Only available on premiered videos
  "premiereTimestamp": number, // Unix timestamp

  "liveNow": boolean,
  "premium": boolean,
  "isUpcoming": boolean
}

export type Comments = {
  [ videoId: string ]: {
    [ commenter: string ]: [ string, number ]
  }
}

export type UserData = {
  subscriptions: string[],
  comments: Comments,
  views: string[],
  time: number
}