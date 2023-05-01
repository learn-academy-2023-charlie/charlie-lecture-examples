import React, { useState } from 'react'
// We need to import it from React first in order to use State

const Tracker = () => {
  const [miles, setMiles] = useState(0)
  // Miles is what I am keeping track of so we will name our state miles. useState is a way to initialize a value of our state. setMiles is a method used to update our state.
  const [color, setColor] = useState("blue")

  const addMiles = () => {
    setMiles(miles + 1)
  }
  return (
    <>
      <p>Miles: {miles}</p>
      {/* Calling on our state with curly brackets to access the JavaScript in JSX */}
      <button onClick={addMiles} style={{ backgroundColor: "purple", color: color }} >Add a mile</button>
    </>
  )
}

export default Tracker