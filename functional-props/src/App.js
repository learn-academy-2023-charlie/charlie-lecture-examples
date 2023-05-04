import React, { useState } from "react"
import MenuItem from "./components/MenuItem"

const App = () => {
  const [menu, setMenu] = useState([
    { name: "Ice Cream", ordered: false },
    { name: "Chicken Wings", ordered: false },
    { name: "Hot Dogs", ordered: false },
    { name: "Potato Salad", ordered: false },
    { name: "Beer", ordered: false }
  ])

  const orderItem = (selectedItem) => {
    console.log(selectedItem);
    menu[selectedItem].ordered = true
    setMenu([...menu])
  }

  return (
    <>
      <h1>Charlie BBQ</h1>
      <h2>The Menu</h2>
      {menu.map((item, index) => {
        return (
          <MenuItem item={item} key={index} orderItem={orderItem} index={index} />
        )
      })}
    </>
  )
}

export default App