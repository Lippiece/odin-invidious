// eslint-disable sort-keys-fix/sort-keys-fix
import '@noshot/env'
import { initializeApp } from "firebase/app"
import { Suspense }      from "react"
import { Outlet }        from "react-router-dom"
import Footer            from "./components/Footer"
import Nav               from "./components/Nav"
import "./css/App.scss"

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
  return ( <>
      <Nav/>
      <main>
        <Suspense fallback={ <div>Loading...</div> }>
          <Outlet/>
        </Suspense>
      </main>
      <Footer/>
    </>
  )
}

export default App
