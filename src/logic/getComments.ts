import { doc, getDoc, getFirestore } from "firebase/firestore"

const getComments = async ( videoId ) => {
  const database  = getFirestore( window.firebaseApp )
  const reference = doc( database, "comments", videoId )
  const snapshot  = await getDoc( reference )
  return snapshot.data()
}

export default getComments
