import React from "react"

const Yelling = ({ userInput, banana }) => {
  console.log(banana)
  const uppercasingUserInput = (input) => {
    return input.toUpperCase()
  }

  return (
    <>
      <h3>Yo!</h3>
      <p>{uppercasingUserInput(userInput)}</p>
    </>
  )
}

export default Yelling
