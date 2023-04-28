## Create React App
- $ git checkout -b `<branch-name>`
- $ yarn create react-app `<app-name>`  
naming convention for app name is kebob-case with lower case letters

- $ cd `<app-name>`  

Start a server to run the application in the browser:  
- $ yarn start
- $ code .


## Two main folders in react app
- public contains the index.html
- src contains App.js and additional react components


## Functional Components
- declare react component
- component name is PascalCase
- return JSX elements
- when sending more than one JSX element, wrap with `return(<> </>)`
- to share the data in each component, we have to also export the components  
`export default ComponentName`
- Components are stored in files. Only one component per file.
- To share the jsx elements to the user interface, do the following on App.js:
  - import the component
  - component call

## Basic Structure of React Component
```js
// import software and additional components
import React from "react"

// component declaration
const App = () => {
  // sent to the user interface
  return (
    <>
    </>
  )
}
// export
export default App
```

## Additional Components
- create a `components` folder on the src directory
- add a file with the name of the react component with the extension `.js`
- perform component call and import on App.js

***
***NOTE***
- run yarn commands on the project directory
- run git commands on the github repo

## Pushing changes to github
***cd out to the github repo***
- $ `cd ..`  

***then perform git flow as usual***
- $ `git status`
- $ `git add <folder-name>`
- $ `git commit -m "message"`
- $ `git push origin <branch-name>`

## First time switching drivers
- Ensure you have the github repo locally
- $ `git fetch origin <branch-name>`
- $ `git checkout <branch-name>`  
***pull in the required node modules that will run the jest test suite*** 
- $ `yarn`