import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth"

const signIn = async (email: string, password: string) => {
  const auth = getAuth(window.firebase)

  try {
    const login = await signInWithEmailAndPassword(auth, email, password)
    return auth.currentUser.email
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      try {
        const {user} = await createUserWithEmailAndPassword(auth, email, password)
        return auth.currentUser.email
      } catch (registerError) {
        return registerError
      }
    } else {
      return error
    }
  }
}

export default signIn
