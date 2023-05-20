import {
  Button,
  Classes,
  Dialog,
  DialogBody,
  InputGroup,
  Label,
  Tag,
}                                           from "@blueprintjs/core"
import { useAtom }                          from "jotai"
import { useCallback, useEffect, useState } from "react"
import handleError                          from "../logic/handleError"
import signIn                               from "../logic/signIn"
import { userAtom }                         from "../state/atoms"

const LoginBox = () => {
  const [ user, setUser ] = useAtom( userAtom )
  const [ , setError ]    = useState<string | null>( null )

  const [ username, setUsername ] = useState( "" )
  const [ password, setPassword ] = useState( "" )
  const [ status, setStatus ]     = useState( {
                                                text    : "",
                                                password: "",
                                              } )
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
    setUser( { name: result } )
    setStatus( "Signed in" )
  }
  const onInput  = event => {
    event.target.type === "password"
    ? setPassword( event.currentTarget.value )
    : setUsername( event.currentTarget.value )
    event.target.checkValidity()
    ? setStatus(
      {
        ...status,
        [ event.target.type ]: null,
      },
    )
    : setStatus( {
                   ...status,
                   [ event.target.type ]: event.target.validationMessage,
                 } )
  }

  useEffect( () => {
    localStorage.setItem( "user", user )
  }, [ user ] )

  return (
    <>
      <Button
        onClick={ handleButtonClick }
        text="Sign in"
      />
      <Dialog isOpen={ isOpen } onClose={ handleClose }>
        <DialogBody>
          <form
            onSubmit={ onSubmit }
            className={ Classes.FORM_GROUP }
          >
            <Label htmlFor="mailInput">E-Mail</Label>
            <InputGroup
              id="mailInput"
              onInput={ onInput }
              pattern="[^@]+@[^@]+\.[^@]+"
              minLength={ 10 }
              required
              placeholder="mail@domain.com"
            />
            { status.text &&
              <Tag intent="warning">{ status.text }</Tag> }
            <Label htmlFor="passwordInput">Password</Label>
            <InputGroup
              id="passwordInput"
              onInput={ onInput }
              type="password"
              minLength={ 6 }
              required
            />
            { status.password &&
              <Tag intent="warning">{ status.password }</Tag> }
            <Button type="submit">Login</Button>
          </form>
        </DialogBody>
      </Dialog>
    </>
  )
}

export default LoginBox
