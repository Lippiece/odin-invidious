import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore"

const addCommentForVideo = async ( videoId, comment ) => {

  const database     = getFirestore( window.firebaseApp )
  const reference    = doc( database, "comments", videoId )
  const snapshot     = await getDoc( reference )
  const snapshotData = snapshot.data()
  const commentCount = Object.keys( snapshotData || {} ).length
  await setDoc(
    doc( database, "comments", videoId ),
    {
      ...snapshotData,
      [ commentCount ]: comment,
    },
  )
}

export default addCommentForVideo