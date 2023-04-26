import { Navbar }              from "@blueprintjs/core"
import { useAtom }             from "jotai"
import { useEffect, useState } from "react"

import { userAtom } from "../state/atoms"
import LoginBox     from "./LoginBox"

const UserBox = () => {
  const [ user ]                  = useAtom( userAtom )
  const [ loggedIn, setLoggedIn ] = useState( false )

  useEffect( () => {
    user ? setLoggedIn( true ) : setLoggedIn( false )
  }, [ user ] )
  useEffect( () => {
    localStorage.setItem( "user", user )
  }, [ user ] )

  return <>
    <Navbar.Heading>{ `Hi, ${ loggedIn ?
                              user :
                              "Anonymous" }` }</Navbar.Heading>
    { !loggedIn && <LoginBox/> }
  </>
}

export default UserBox
