import { Button, Navbar } from "@blueprintjs/core"
import { Link }           from "react-router-dom"
import "../css/Nav.css"

import UserBox from "./UserBox"

const Nav = () => {
  return (
    <Navbar className="nav">
      <Navbar.Group>
        <Link to="/">
          <Navbar.Heading>Logo</Navbar.Heading>
        </Link>
      </Navbar.Group>
      <Navbar.Group>
        <Link to="/app">
          <Button text="Play" large className="bp4-minimal"/>
        </Link>
        <Link to="/profile">
          <Button text="Profile" large className="bp4-minimal"/>
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
