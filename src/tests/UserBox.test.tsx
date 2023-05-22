import { render, screen } from "@testing-library/react"
import userEvent          from "@testing-library/user-event"
import { expect }         from "vitest"
import UserBox            from "../components/UserBox"
import * as signInModule  from "../logic/signIn"

describe( "login", () => {
  const spy = vi
    .spyOn( signInModule, "default" )
    .mockImplementation( vi.fn() )
  it( 'should allow creating an account with valid credentials', async () => {
    render( <UserBox/> )
    const user = userEvent.setup()

    await user.click( screen.getByText( /sign/iu ) )
    await user.type( screen.getByLabelText( /mail/iu ), "test@test.test" )
    await user.type( screen.getByLabelText( /password/iu ), "test-test" )
    await user.click( screen.getByText( /login/iu ) )

    expect( spy ).toHaveBeenCalledWith( "test@test.test", "test-test" )
  } )

  it( 'should show an error message for invalid email', async () => {
    render( <UserBox/> )
    const user = userEvent.setup()

    await user.click( screen.getByText( /sign/iu ) )
    await user.type( screen.getByLabelText( /mail/iu ), "test" )
    await user.type( screen.getByLabelText( /password/iu ), "test-test" )
    await user.click( screen.getByText( /login/iu ) )

    expect( spy ).toHaveBeenCalledTimes( 0 )
  } )
  it( 'should show an error message for invalid password', async () => {
    render( <UserBox/> )
    const user = userEvent.setup()

    await user.click( screen.getByText( /sign/iu ) )
    await user.type( screen.getByLabelText( /mail/iu ), "test@test.test" )
    await user.type( screen.getByLabelText( /password/iu ), "1" )
    await user.click( screen.getByText( /login/iu ) )

    console.log( spy )
    expect( spy ).toHaveBeenCalledTimes( 0 )
  } )

} )