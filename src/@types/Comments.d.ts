export default interface Comments {
  [ videoId: string ]: {
    [ commenter: string ]: [ string, number ]
  }
}
