import { Intent, Toaster, ToastProps } from "@blueprintjs/core"
import { initializeApp }               from "firebase/app"
import { useAtom }                     from "jotai"
import { Suspense, useEffect, useRef } from "react"
import { Outlet }                      from "react-router-dom"
import Footer                          from "./components/Footer"
import Nav                             from "./components/Nav"
import "./css/App.scss"
import { errorAtom }                   from "./state/atoms"

const firebaseConfig = {
// @ts-ignore
  apiKey           : import.meta.env.VITE_API_KEY,
  authDomain       : "invidious-530a1.firebaseapp.com",
  projectId        : "invidious-530a1",
  storageBucket    : "invidious-530a1.appspot.com",
  messagingSenderId: "1060599399250",
  appId            : "1:1060599399250:web:ad52deb2120f6671d5b08b",
}
// @ts-ignore
window.firebaseApp   = initializeApp( firebaseConfig )
const App            = () => {
  const [ error ] = useAtom( errorAtom )

  const toasterReference = useRef<Toaster>( null )
  const addToast         = ( toast: ToastProps ) => {
    toast.timeout = 5000
    toasterReference.current?.show( toast )
  }

  useEffect( () => {
    error
    && addToast( {
                   intent : Intent.DANGER,
                   message: `Error: ${ error?.message }`,
                 } )
  }, [ error ] )

  return ( <>
      <Nav/>
      <main>
        <Suspense fallback={ <div>Loading...</div> }>
          <Outlet/>
        </Suspense>
      </main>
      <Footer/>
      <Toaster ref={ toasterReference }/>
    </>
  )
}

export default App
