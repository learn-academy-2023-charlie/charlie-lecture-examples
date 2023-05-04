# React Functional Props

- Functional props sends information we need back "up the river"

- Conditional rendering : allows us to render something based on a condition being true
- If item ordered is true — display the "You ordered me!"
```jsx
  {props.item.ordered &&
    <p>You ordered me!</p>
  }
```
- onClick : we want to use an anonymous function in our onClick to avoid React immediately invoking the function and potentially causing a stack overflow
- The anonymous function will make it wait to invoke until it is clicked
```jsx
  <button onClick={() => props.orderItem(props.index)}>Ordered</button>
```
