import { Button, Classes, Navbar } from "@blueprintjs/core"
import { Link }                    from "react-router-dom"
import "../../css/Nav.css"

import UserBox from "../Auth/UserBox"
import Search  from "../Videos/Search"

const Nav = () => {
  return (
    <Navbar className = "nav">
      <Navbar.Group>
        <Link to = "/odin-invidious/">
          <Navbar.Heading>Logos</Navbar.Heading>
        </Link>
        <Search/>
      </Navbar.Group>
      <Navbar.Group>
        <Link to = "/odin-invidious/main">
          <Button
            text = "Main" large className = { Classes.MINIMAL }/>
        </Link>
        <Link to = "/odin-invidious/profile">
          <Button
            text = "Profile" large className = { Classes.MINIMAL }/>
        </Link>
        <Navbar.Divider/>
      </Navbar.Group>
      <Navbar.Group>
        <UserBox/>
      </Navbar.Group>
    </Navbar>
  )
}

export default Nav
