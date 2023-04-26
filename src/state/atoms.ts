import { atom } from "jotai"

const storageUser     = localStorage.getItem( "user" )
export const userAtom = atom( storageUser || "" )