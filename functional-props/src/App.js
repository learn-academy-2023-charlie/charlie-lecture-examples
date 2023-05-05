// Importing components and useState hook
import React, { useState } from "react"
import MenuItem from "./components/MenuItem"

const App = () => {
  // State variable: Menu -> array holding objects of menu items and whether or not it was ordered yet
  const [menu, setMenu] = useState([
    { name: "Ice Cream", ordered: false },
    { name: "Chicken Wings", ordered: false },
    { name: "Hot Dogs", ordered: false },
    { name: "Potato Salad", ordered: false },
    { name: "Beer", ordered: false }
  ])

  // Function will change ordered key from false to true, when the button on MenuItem.js is clicked
  const orderItem = (selectedItem) => {
    console.log(selectedItem);
    menu[selectedItem].ordered = true
    setMenu([...menu])
  }

  return (
    <>
      <h1>Charlie BBQ</h1>
      <h2>The Menu</h2>
      {/* Mapping though my menu list and returning each value as a component call */}
      {menu.map((item, index) => {
        return (
          <MenuItem item={item} key={index} orderItem={orderItem} index={index} />
        )
      })}
    </>
  )
}

export default App