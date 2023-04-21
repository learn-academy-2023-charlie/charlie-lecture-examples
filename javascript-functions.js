// JavaScript Functions 4/21/2023

// control when things happen
// reusable, neutral

// encapsulation - controlling the input so you can predict the output

// anatomy of a function
// arrow functions

// declaration
// const

// name, camelCase, communicate intent
// const coffeeMaker

// assignment operator and value that is a behavior
// const coffeeMaker = () =>

// executable code action
// const coffeeMaker = () => {
//   "coffee is made"
// }

// function invocation, invoke our function, function call
// coffeeMaker()
// console.log(coffeeMaker())

// undefined - coffeeMaker exists but it doesn't have a value
// const coffeeMaker = () => {
//   return "coffee is made"
// }
// return keyword specifies the value or the output of the function
// console.log(coffeeMaker())
// coffee is made

// console.log(coffeeMaker())
// console.log(coffeeMaker())
// console.log(coffeeMaker())
// console.log(coffeeMaker())
// console.log(coffeeMaker())

// input - variable that belongs to the function - parameter
// const coffeeMaker = (coffeeType) => {
//   return `enjoy your ${coffeeType}`
// }
// console.log(coffeeMaker())
// enjoy your undefined
// console.log(coffeeMaker("black coffee"))
// enjoy your black coffee
// console.log(coffeeMaker("coffee with cream and sugar"))
// console.log(coffeeType)
// ReferenceError: coffeeType is not defined

// argument - data passed into the function invocation
// console.log(coffeeMaker("iced latte"))
// enjoy your iced latte

// const myCoffee = "espresso"
// console.log(coffeeMaker(myCoffee))
// enjoy your espresso
// console.log(myCoffee)
// espresso

// multiple parameters
// const coffeeMaker = (coffeeType, coffeeSize) => {
//   return `enjoy your ${coffeeSize} ${coffeeType}`
// }
// console.log(coffeeMaker("black coffee"))
// enjoy your undefined black coffee

// console.log(coffeeMaker("black coffee", "12 oz"))
// enjoy your 12 oz black coffee

// const myCoffee = "espresso"
// console.log(coffeeMaker(myCoffee, "1 shot"))
// enjoy your 1 shot espresso

// pseudo coding - writing out in regular words what your function should do

// prompt - create a function that tells the coffee shops customer the order and price

// function name: coffeeShoppe
// input: coffeeType (string) and coffeeSize (string)
// output: if coffeeSize is small - coffeeType is $4
// if coffeeSize is medium - coffeeType is $5
// if coffeeSize is large - coffeeType is $6
// if none of the above - error message

// function expression - outline of the function
const coffeeShoppe = (coffeeType, coffeeSize) => {
  // if coffeeSize is small - coffeeType is $4
  if (coffeeSize.toLowerCase() === "small") {
    return `Your ${coffeeType} is $4.`
  }
  // if coffeeSize is medium - coffeeType is $5
  else if (coffeeSize.toLowerCase() === "medium") {
    return `Your ${coffeeType} is $5.`
  }
  // if coffeeSize is large - coffeeType is $6
  else if (coffeeSize.toLowerCase() === "large") {
    return `Your ${coffeeType} is $6.`
  }
  // if none of the above - error message
  else {
    return "Check your order because something went wrong!"
  }
}
console.log(coffeeShoppe("iced latte", "Small"))
// console.log(coffeeShoppe("black", "large"))
// console.log(coffeeShoppe("espresso", "1 shot"))

8 === "8"
8 == "8" // type coersion
