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
`const App = () => {}`

- sends data back to the user interface
`return <h1>Hello World!</h1>`

- return will only send one thing
- use () and empty react fragments to contain more than one JSX element
```js
  return(
    <>
      <h1>Aloha Charlie</h1>
      <h3> What tea are you bringing to the party? </h3>
    </>
  ) 
```

## Additional React Components
- Components can have a separation of concerns.
- Since `App` is your top-level component, you perform component calls inside `App` to allow the JSX elements from additional components to display on the user interface.
```js
  const App = () => {
    return(
      <>
        <h1>Aloha Charlie</h1>
        <h3> What tea are you bringing to the party? </h3>
        <Tea />
      </>
    ) 
  }

  const Tea = () => {
    return(
      <>
        <ol>
          <li>Green Tea</li>
          <li>Matcha</li>
          <li>Black Tea</li>
          <li>Mint</li>
          <li>Chai Tea</li>
        </ol>
      </>
    )
  }
```


## Deeper dive in the html structure with react components
```html
<!-- html basic structure -->
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <!-- load the appropriate scripts and methods that will allow the react application to work on this html file only discuss if there are questions, I can post more in depth descriptions on slack -->
    <!-- you can load two React scripts from an external website called unpkg.com: react is the core React library.
react-dom provides DOM-specific methods that enable you to use React with the DOM. -->
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>

<!-- after talking about jsx, Note that browsers don’t understand JSX out of the box, so you’ll need a JavaScript compiler, such as a Babel, to transform your JSX code into regular JavaScript.

Adding Babel to your project
To add Babel to your project, copy and paste the following script in your index.html file: -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <title>Intro to React</title>
  </head>
  <body>
    <!-- Then give the div a unique id so that you can target it later. -->
    <div id="react-container"></div>
<!-- after babel intro, In addition, you will need to inform Babel what code to transform by changing the script type to type=text/jsx. -->
    <script type="text/babel">
      // react component - 
      const App = () => {
        return <></>
      }
// after the babel talk, The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. 

      const domContainer = document.querySelector("#react-container")
// createRoot lets you create a root to display React components inside a browser DOM node.
      const root = ReactDOM.createRoot(domContainer)
      // React will create a root for the domNode, and take over managing the DOM inside it. After you’ve created a root, you need to call root.render to display a React component inside of it:
      root.render(<App />)
    </script>
  </body>
</html>
```
