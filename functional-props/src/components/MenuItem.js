const MenuItem = (props) => {
  return (
    <>
      <p key={props.key}>{props.item.name}</p>
      {props.item.ordered &&
        <p>You ordered me!</p>
      }
      <button onClick={() => props.orderItem(props.index)}>Ordered</button>
    </>
  )
}

export default MenuItem