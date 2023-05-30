import { Button, H1, NonIdealState, Text, UL } from "@blueprintjs/core"
import {
  INPUT,
}                                              from "@blueprintjs/core/lib/esnext/common/classes"
import { useAtom }                             from "jotai"
import { useEffect, useState }                 from "react"
import fetchUserData                           from "../logic/fetchUserData"
import handleError                             from "../logic/handleError"
import { errorAtom, userAtom }                 from "../state/atoms"

interface UserData {
  subscriptions: string[]
  comments: string[]
  views: string[]
  time: number
}

const Profile = () => {
  const [ , setError ]    = useAtom( errorAtom )
  const [ user, setUser ] = useAtom( userAtom )

  const [ isEditing, setIsEditing ] = useState( false )
  const [ newName, setNewName ]     = useState( "" )

  const changeName = async () => {
    // const resultName = await changeNameAtFirebase( newName )
    setUser( { ...user, name: newName } )
  }

  useEffect( () => {
    const fetchUser = async () => {
      try {
        const data    = await fetchUserData()
        const newUser = { ...user, data: { ...data } }
        setUser( newUser )
      } catch ( error ) {
        handleError( error )( setError )
      }
    }

    fetchUser()
  }, [] )
  return <section>
    { user?.mail ?
      <>
        <Text>{ user.mail }</Text>
        <H1>
            <span
              suppressContentEditableWarning={ true }
              contentEditable={ isEditing }
              onInput={ ( event ) => setNewName( event.target.textContent ) }
            >{ user?.name || user?.mail }</span>'s Profile
        </H1>
        <Button
          icon="edit"
          text="change name"
          onClick={ async () => {
            console.log( "Button clicked" )
            isEditing && await changeName()
            setIsEditing( !isEditing )
          } }/>
        { isEditing
          && <input
            placeholder="New name"
            className={ INPUT }
            type="text"
            value={ newName }
            onChange={ ( event ) => setNewName( event.target.value ) }/> }
        { Object.keys( user?.data || {} ).length > 0 &&
          <UL>
            { user.data?.comments &&
              <li key="user-data-comments">
                <b>Comments</b>
                <UL>
                  { user.data?.comments?.map( ( { videoId, comment } ) =>
                                                <li>{ `${ videoId }: ${ comment }` }</li> ) }
                </UL>
              </li>
            }
            { user.data?.subscriptions &&
              <li key="user-data-subscriptions">
                <b>Subscriptions</b>
                <UL>
                  { user.data?.subscriptions?.map( subscription =>
                                                     <li>{ subscription }</li> ) }
                </UL>
              </li>
            }
            { user.data?.views &&
              <li key="user-data-views">
                <b>{ user.data?.views.length } Views</b>
                <UL>
                  { user.data?.views.map( view => <li>{ view }</li> ) }
                </UL>
              </li>
            }
            { user.data?.time &&
              <li key="user-data-time">
                <b>Time spent watching: { user.data?.time }</b>
              </li>
            }
          </UL>
        }
      </>
                 :
      <NonIdealState title="Please login to see your data." icon="user"/>
    }
  </section>
}
export default Profile
