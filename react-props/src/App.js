// imports
import React, {useState} from "react"
import Joke from "./components/Joke"

// component declaration
const App = () => {

  // variables, custom functions
  const jokes = [
    "How many Full Stack developers does it take to screw in a lightbulb? None, that's a hardware problem.",
    "What's the difference between a Hippo and a Zippo? One's pretty heavy, and the other's a little lighter.",
    "How do you cook an alligator? With a croc-pot.",
    "I don't like ice cream. Why? Because I like 'you' scream.",
    "Why did Microsoft PowerPoint cross the road? To get to the other slide!",
    "I just learn the word for constipation in German...Farfrompoopen",
    "What do computers snack on? Microchips, phish sticks, and cookies for a quick byte",
    "Why did the IT guy's mom yawn? Because the IT guy made his mother bored",
    "My buddy got a new singing computer - it's a Dell",
    "Did you know that in Hawaii it's actually illegal to laugh loudly? You have to keep it to a low Ha."
  ]

  const [standUp, setStandUp] = useState("Click the button for the next joke")

  const triggerTheJoke = () => {
    // use Math.random using the length of the array
    const ranJoke = Math.floor(Math.random() * jokes.length)
    setStandUp(jokes[ranJoke])
  }
  // what will be displayed on the user interface
  return(
    <>
      <h1>Check Out Charlie's Jokes</h1>
      <Joke 
        triggerTheJoke={triggerTheJoke}
        standUp={standUp}
      />
    </>
  )
}

// allow component to be seen across the application
export default App