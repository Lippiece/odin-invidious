export type Comments = {
  [ videoId: string ]: {
    [ commenter: string ]: [ string, number ]
  }
}

