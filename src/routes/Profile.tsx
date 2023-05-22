import { Button, UL }           from "@blueprintjs/core"
import { useAtom }              from "jotai"
import { useEffect, useState }  from "react"
import { changeNameAtFirebase } from "../logic/changeNameAtFirebase"
import fetchUserData            from "../logic/fetchUserData"
import handleError              from "../logic/handleError"
import { errorAtom, userAtom }  from "../state/atoms"

interface UserData {
  subscriptions: string[]
  comments: string[]
  views: string[]
  time: number
}

const Profile = () => {
  const [ , setError ]    = useAtom( errorAtom )
  const [ user, setUser ] = useAtom( userAtom )

  const [ userData, setUserData ]   = useState<UserData>( {} )
  const [ isEditing, setIsEditing ] = useState( false )

  const changeName = ( event ) => async () => {
    const newName = await changeNameAtFirebase( event.target.textContent )
    setUser( { ...user, name: newName } )
  }

  useEffect( () => {
    fetchUserData()
      .then( data => {
        setUserData( data )
      } )
      .catch( error => handleError( error )( setError ) )
  }, [ user ] )
  return (
    <>
      <h1>
        <span
          contentEditable={ isEditing }
          onBlur={ changeName }
        >{ user.name }</span>
        's Profile
        <span><Button
          text="change name"
          onClick={ () => setIsEditing( !isEditing ) }/> </span>
      </h1>
      { userData &&
        <UL>
          { userData.comments &&
            <li>
              <b>Comments</b>
              <UL>
                { userData.comments.map( comment => <li>{ comment }</li> ) }
              </UL>
            </li>
          }
          { userData.subscriptions &&
            <li>
              <b>Subscriptions</b>
              <UL>
                { userData.subscriptions.map( subscription =>
                                                <li>{ subscription }</li> ) }
              </UL>
            </li>
          }
          { userData.views &&
            <li>
              <b>Views</b>
              <UL>
                { userData.views.map( view => <li>{ view }</li> ) }
              </UL>
            </li>
          }
          { userData.time &&
            <li>
              <b>Time spent watching: { userData.time }</b>
            </li>
          }
        </UL>
      }
    </>
  )
}
export default Profile
