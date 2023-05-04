## React Props - 5/3/23 Charlie

## Process
- $ cd <github-repo>
- $ git checkout -b <branch-name>
- $ yarn create react-app <project-directory>
- $ cd <project-directory>
- $ yarn start
- $ code .


## Props
- props (properties) are added to the JSX tags. 
- They help us share data from the parent component to the child component.
- immutable, cannot be changed. It is read only.


## Steps
- create main functional component: App.js
- plan outline for the joke application
- goal is for App.js to be the logic component
- child components will be the display components
- create an array to contain a list of jokes
- create a state variable to allow one joke to be displayed at a time using react hook useState()
- create a custom function to trigger the setter function for the state variable
- create a button to trigger the function


## Basic functional react component
```js
  // imports
import React from "react"

// component declaration
const App = () => {
  // what will be displayed on the user interface
  return(
    <>
      <h1>Check Out Charlie's Jokes</h1>
    </>
  )
}

// allow component to be seen across the application
export default App
```


## Outline
- App.js: jokes array, react state, import and call child components, heading
- Joke.js: styling for the individual jokes


## useState()
- import the react hook useState()
- destructure state variable and setter function
```js
  // update import section
  import React, {useState} from "react"
  
  // add to data section
  // array to store list of jokes
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

  // react state
  const [ standUp, setStandUp ] = useState("Click the button for the next joke")

  // custom function to trigger setter function
  const triggerThejoke = () => {
    setStandUp(jokes[0])
  }
```


## Passing props to the child component
Step 1: Pass props to the child component
```js
  // App.js 
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
``` 
Step 2: Display props inside the child component 
```js
  // functional component declaration on Joke.js
  const Joke = ({standUp, triggerTheJoke}) => {
    return(
      <>
        <button onClick={triggerTheJoke}>{standUp}</button>
      </>
    )
  }
```

***
## Accepting props on the child component
- Using props key term to accept properties
```js
  // import
  import React from "react"

  // functional component declaration
  const Joke = (props) => {
    console.log(props)
    return(
      <>
        <button onClick={props.triggerTheJoke}>{props.standUp}</button>
      </>
    )
  }

  // export
  export default Joke
```

- Destructuring the props
```js
  // functional component declaration
  const Joke = ({standUp, triggerTheJoke}) => {
    return(
      <>
        <button onClick={triggerTheJoke}>{standUp}</button>
      </>
    )
  }
```

***
***RECAP***  
***
React helps us create engaging user interfaces. React state and props allow us as developers to interact with the data that will eventually be displayed to the user. React is very focused on the user interactions.  
1. To allow values to change based on a user interaction, we will introduce `react state`. The react hook useState() gives us the ability to allow displayed values to change through the state variable and setter function. The initial value comes from the argument we give to useState().
2. When creating a component, we want to be mindful of its purpose and how we are organizing the data that is required for the whole application. There are several ways to tackle that challenge. However, today the approach we used was to maintain all our variables, custom functions, state variables in App.js, which makes it a `logic component`. The additional components were used to tell the user interface how to display that data. Since they do not have state, the child components are `display components`.
3. To share relevant data from the App.js (parent component) to additional components (child components), we use `props`. Props travel in one direction, commonly mentioned as `passing data down the river`. We passed the props on the component call of the component that needs the data.
