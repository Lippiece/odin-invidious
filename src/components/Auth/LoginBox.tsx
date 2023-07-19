import {
  Button,
  Classes,
  Dialog,
  DialogBody,
  InputGroup,
  Label,
}                                           from "@blueprintjs/core"
import { useAtom }                          from "jotai"
import { useCallback, useEffect, useState } from "react"
import signIn                               from "../../logic/API/signIn"
import handleError                          from "../../logic/handleError"
import { userAtom }                         from "../../state/atoms"

const LoginBox = () => {
  const [ user, setUser ] = useAtom( userAtom )
  const [ , setError ]    = useState<string | null>( null )

  const [ username, setUsername ] = useState( "" )
  const [ password, setPassword ] = useState( "" )
  const [ status, setStatus ]     = useState( "" )
  const [ isOpen, setIsOpen ]     = useState( false )

  const handleButtonClick = useCallback( () => setIsOpen( !isOpen ),
                                         [],
  )
  const handleClose       = useCallback( () => setIsOpen( false ),
                                         [],
  )

  const onSubmit = async event => {
    event.preventDefault()
    setStatus( "Signing in" )
    const result = await signIn( username, password )
    if ( result?.message ) {
      return handleError( result )( setError )
    }
    setStatus( "Remembering credentials" )
    setUser( result )
    setStatus( "Signed in" )
  }
  const onInput  = event => {
    event.target.type === "password"
    ? setPassword( event.currentTarget.value )
    : setUsername( event.currentTarget.value )
    event.target.checkValidity()
    ? setStatus( "" )
    : setStatus( event.target.validationMessage )
  }

  useEffect( () => {
    localStorage.setItem( "user", user )
  }, [ user ] )

  return (
    <>
      <Button
        onClick = { handleButtonClick }
        text = "Sign in"
        className = { Classes.MINIMAL }/>
      <Dialog isOpen = { isOpen } onClose = { handleClose }>
        <DialogBody>
          <form
            onSubmit = { onSubmit }
          >
            <p>{ status }</p>
            <Label htmlFor = "mailInput">E-Mail</Label>
            <InputGroup
              id = "mailInput"
              onInput = { onInput }
              pattern = "[^@]+@[^@]+\.[^@]+"
              minLength = { 10 }
              required
              placeholder = "mail@domain.com"
            />
            <Label htmlFor = "passwordInput">Password</Label>
            <InputGroup
              id = "passwordInput"
              onInput = { onInput }
              type = "password"
              minLength = { 6 }
              required
            />
            <Button type = "submit">Login</Button>
          </form>
        </DialogBody>
      </Dialog>
    </>
  )
}

export default LoginBox
