// import software and additional components
import React from "react"
import Tea from "./components/Tea"
import Attendee from "./components/Attendee"
// component declaration
const App = () => {
  // sent to the user interface
  return (
    <>
      <h1>Charlie's Tea Time</h1>
      <Tea />
      <Attendee />
    </>
  )
}
// export
export default App