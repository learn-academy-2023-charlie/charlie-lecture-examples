import React, { useState } from "react"
import Yelling from "./components/Yelling"

const App = () => {
  const [userInput, setUserInput] = useState("")

  const handleChange = (event) => {
    // console.log(event)
    // console.log(event.target)
    // console.log(event.target.value)
    setUserInput(event.target.value)
  }

  return (
    <>
      <h3>Hello World!</h3>
      <input type="text" onChange={handleChange} />
      <Yelling userInput={userInput} banana="banana" />
    </>
  )
}

export default App
