import { Section }       from "@blueprintjs/core"
import { useAtom }       from "jotai"
import { useLoaderData } from "react-router-dom"
import Channel           from "../../@types/Channel"
import "../../css/ChannelPage.css"
import handleError       from "../../logic/handleError"
import { errorAtom }     from "../../state/atoms"

const ChannelPage = () => {
  const [ , setError ]   = useAtom( errorAtom )
  const channel: Channel = useLoaderData()
    .bimap( handleError( setError ), ( channel: Channel ) => channel )
    .join()
  const {
          name,
          description,
          bannerUrl,
          verified,
          subscriberCount,
          avatarUrl,
        }                = channel
  return (
    <Section compact title = "Channel" className = "channel">
      <img src = { bannerUrl } alt = { name }/>
      <div className = "info">
        <img src = { avatarUrl } alt = { name } className = "avatar"/>
        <div>
          <h2>{ name } { verified && <span>✓</span> }</h2>
          <p>{ description }</p>
          <p>{ subscriberCount } subscribers</p>
        </div>
      </div>
    </Section>

  )
}

export default ChannelPage
