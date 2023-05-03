// import
import React from "react"

// functional component declaration
const Joke = ({standUp, triggerTheJoke}) => {
  // console.log(props)
  return(
    <>
      <button onClick={triggerTheJoke}>{standUp}</button>
    </>
  )
}

// export
export default Joke