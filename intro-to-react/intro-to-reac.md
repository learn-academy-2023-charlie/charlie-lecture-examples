## Intro to react
- React: javascript library that allows you to make interactive user interfaces
- library: a collection of code snippets
- user interface: how to user interacts with your code
- DOM: Document Object Model is visual representation of the html

## Why is React popular
- component based: reusable code, structure just like a function
- reusable
- scalable
- user interactions focused

## Components
- reusable functions
- return data to the user interface through JSX
- JSX: Javascript XML(eXtensible Markup Language) is Javascript flavored markdown that behaves like HTML 

## DOM
- visual representation of the html elements
- connects your code to the user interface
- organizes the html elements into a tree-like structure called the node tree
- node: represents a single html element

## React Component
```js
  const App = () => {
    return <h1>Hello World!</h1>
  }
```
- component declaration: component name is PascalCase
const App = () => {}

- sends data back to the user interface
return <h1>Hello World!</h1>

- return will only send one thing
- use empty react fragments to contain more than one JSX element
return(
          <>
            <h1>Aloha Charlie</h1>
            <h3> What tea are you bringing to the party? </h3>
          </>
        ) 




