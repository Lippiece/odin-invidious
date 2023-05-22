import { getFirestore } from "firebase/firestore"

const changeNameAtFirebase = async ( textContent ) => {
  const database = getFirestore( window.firebase )
  const cityRef  = database.collection( "users" ).reference( "name" )
  await cityRef.set( textContent )
  return textContent
}
export default changeNameAtFirebase