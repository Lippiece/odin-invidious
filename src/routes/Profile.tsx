import { Tabs } from "@blueprintjs/core"

const Profile = () => {
  return (
    <>
      <Tabs id = "tabs">
        <Tabs.Tab
          title = "Tab 1"
          id = "tab1"
        />
        <Tabs.Tab
          title = "Tab 1"
          id = "tab2"
        />
        <Tabs.Tab
          title = "Tab 1"
          id = "tab3"
        />
      </Tabs>
      <h1>Hello from Profile</h1>
    </>
  )
}

export default Profile
