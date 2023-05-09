import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore"

const addCommentForVideo = async ( videoId, comment ) => {

  const database = getFirestore( window.firebaseApp )
  try {
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
    console.log( "Document written" )
  } catch ( error ) {
    console.error( "Error adding document: ", error )
  }
}

export default addCommentForVideo