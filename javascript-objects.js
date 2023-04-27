// JavaScript Objects 4/27/2023

// Primitive data types - number, string, boolean, null, undefined, symbol

// Collections of data - array
// non-primitive data type, collection of data, is called an object

// CSS
// h1 {
// key value pairs, css property that is modified with the value
//   color: "purple"
// }

// { key: "value" } object syntax, collections of key value pairs
// {} - define the object the same way [] define an array
// value - any data type recognized by JS
// key - symbol, unique identifier, primitive data type used in objects

// const myObject = { key1: "value", key2: "another value", key3: "yet another value" }
// console.log(myObject)

// console.log(myObject.key2)
// --> another value

const breakfast = {
  item1: "pancakes",
  item2: "frosted mini wheats",
  item3: "chilaquiles",
  item4: "english muffin",
  item5: { beverage1: "coffee", beverage2: "tea", beverage3: "coffee and tea" }
}
// console.log(breakfast.item1)
// --> pancakes

// console.log(breakfast.beverage3)
// --> undefined

// console.log(breakfast.item5.beverage3)
// --> coffee and tea

// console.log(beverage3)
// --> ReferenceError: beverage3 is not defined

// console.log(
//   breakfast.item5.beverage1,
//   breakfast.item5.beverage2,
//   breakfast.item5.beverage3
// )

// destructuring - unpacking the pathway of an object
const { beverage1, beverage2, beverage3 } = breakfast.item5
// console.log(beverage3)
// coffee and tea

// Object hold data and object can hold behavior
// method - function (behavior) that belongs to an object

const numberObject = {
  num1: 5,
  num2: 10,
  num3: 8,
  addUp: function () {
    return this.num1 + this.num2 + this.num3
  }
}
// console.log(numberObject)
// this - keyword in JS that is a reference to the name of the object when you are inside the object
// console.log(addUp) - addUp is a method, belongs to the object
// console.log(numberObject.addUp)
// --> [Function: addUp]

// console.log(numberObject.addUp())
// --> 23

// const pets = [
//   { name: "Taco", type: "dog", age: 5 },
//   { name: "Lizard", type: "dog", age: 1 },
//   { name: "Steve", type: "cat", age: 2 },
//   { name: "Charlie", type: "cat", age: 10 }
// ]
// console.log(pets.length)
// --> 4

// console.log(pets[0])
// --> { name: 'Taco', type: 'dog', age: 5 }

// console.log(typeof pets[0].name)
// --> string

// console.log(pets[0].name.toUpperCase())
// --> TACO

// console.log(pets[0].age.toUpperCase())
// --> TypeError: pets[0].age.toUpperCase is not a function

const pets = [
  { name: "Taco", type: "dog", age: 5 },
  { name: "Lizard", type: "dog", age: 1 },
  { name: "Steve", type: "cat", age: 2 },
  { name: "Charlie", type: "cat", age: 10 }
]

// get all the pet names
// const getAllTheNames = pets.map((value) => {
//   // console.log("this is one iteration:", value.name)
//   return value.name
// })

// console.log(getAllTheNames)
// --> [ 'Taco', 'Lizard', 'Steve', 'Charlie' ]

const getAllTheNames = (array) => {
  // console.log(array.toUpperCase()) --> error
  return array.map((object) => {
    // console.log(object.toUpperCase()) --> error
    console.log(object.name.toUpperCase())
    return object.name
  })
}
console.log(getAllTheNames(pets))
// --> [ 'Taco', 'Lizard', 'Steve', 'Charlie' ]

// JSON - JavaScript Object Notation, language of data on the internet
