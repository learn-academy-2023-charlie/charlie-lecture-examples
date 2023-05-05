const MenuItem = (props) => {
  return (
    <>
      <p key={props.key}>{props.item.name}</p>
      {/* Conditionally rendering a <p> that displays whether you ordered this item yet, based on if the condition (ordered: true) is true */}
      {props.item.ordered &&
        <p>You ordered me!</p>
      }
      {/* The onClick will trigger the function on App.js and we are passing it the index of the menu item because it is the selected item */}
      <button onClick={() => props.orderItem(props.index)}>Ordered</button>
    </>
  )
}

export default MenuItem