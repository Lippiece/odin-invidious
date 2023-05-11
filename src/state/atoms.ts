import { atom }  from "jotai"
import { Video } from "../@types/types"

const storageUser     = localStorage.getItem( "user" )
export const userAtom = atom( storageUser || "" )

const storageSearchResults       = localStorage.getItem( "searchResults" )
const storageSearchResultsParsed = storageSearchResults
                                   ? JSON.parse( storageSearchResults )
                                   : []
export const searchAtom          = atom<Video[]>(
  storageSearchResultsParsed )

export const errorAtom = atom<Error>( null )