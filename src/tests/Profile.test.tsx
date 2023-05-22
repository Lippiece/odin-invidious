import { render, screen, waitFor } from "@testing-library/react"
import userEvent                   from "@testing-library/user-event"
import { atom }                    from "jotai"
import { expect }                  from "vitest"
import Profile                     from "../routes/Profile"

vi.mock( "../logic/fetchUserData.ts", () => ( {
    default: () => Promise.resolve( {
                                      name         : "test",
                                      subscriptions: [],
                                      comments     : [],
                                      views        : [],
                                      time         : 24900,
                                    } ),
  }
) )
vi.mock( "../state/atoms.ts", async () => {
  const actual = await vi.importActual( "../state/atoms.ts" )
  return {
    ...actual,
    userAtom: atom( {
                      name: "testName",
                    } ),
  }
} )

describe( "Profile", () => {
  it( "should show user's profile information", async () => {
    render( <Profile/> )

    await waitFor( () => {
      expect( screen.getByText( /testName/ui ) )
      expect( screen.getByText( /Views/ui ) )
      expect( screen.getByText( /Time/ui ) )
      expect( screen.getByText( /Subscriptions/ui ) )
      expect( screen.getByText( /Comments/ui ) )
    } )
  } )

  it( 'should allow updating profile information', async () => {
    vi.mock( "../logic/changeNameAtFirebase.ts", () => ( {
        default: () => Promise.resolve( "newTestName" ),
      }
    ) )
    render( <Profile/> )
    const user = userEvent.setup()
    expect( screen.getByText( /testName/ui ) )

    await user.click( screen.getByText( /change name/ui ) )
    await user.click( screen.getByText( /testName/ui ) )
    await user.type( screen.getByText( /testName/ui ), "newTestName" )
    await user.click( screen.getByText( /watching/ui ) )

    expect( screen.getByText( /newTestName/ui ) )
  } )

  it.skip( "should upload and display profile picture", async () => {
    render( <Profile/> )
    const user = userEvent.setup()

    await user.click( screen.getByText( /Change/ui ) )
    // TODO: change picture
  } )

  it.skip( "should display view history", async () => {
    render( <Profile/> )
    const user = userEvent.setup()

    await user.click( screen.getByText( /View/ui ) )

    expect( screen.getByText( /Watched/ui ) )
  } )

  it.skip( "should display liked videos", async () => {
    render( <Profile/> )
    const user = userEvent.setup()

    await user.click( screen.getByText( /Liked/ui ) )

    // TODO: liked videos
  } )

  it.skip( "should display watch later videos", async () => {
    render( <Profile/> )
    const user = userEvent.setup()

    await user.click( screen.getByText( /Liked/ui ) )

    // TODO: watch later videos
  } )

} )