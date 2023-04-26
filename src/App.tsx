// eslint-disable sort-keys-fix/sort-keys-fix
import "./css/App.scss"

import { initializeApp } from "firebase/app"
import { Outlet }        from "react-router-dom"

import Footer from "./components/Footer"
import Nav    from "./components/Nav"
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const app       = initializeApp( {
                                   apiKey           : process.env.TOKEN,
                                   appId            : "1:999810587608:web:3891f2572150f6634270ad",
                                   authDomain       : "waldo-693b9.firebaseapp.com",
                                   messagingSenderId: "999810587608",
                                   projectId        : "waldo-693b9",
                                   storageBucket    : "waldo-693b9.appspot.com",
                                 }, "waldo" )
window.firebase = app
const App       = () => {
  return ( <>
      <Nav/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default App
