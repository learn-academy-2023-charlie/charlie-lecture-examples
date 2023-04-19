// JavaScript Intro 4/19/23 Charlie

// JavaScript is a dynamic, interpreted, scripting language
  // dynamic - a variable can be created with a value of any data type and then can be changed to a different datatype later
  // Example
    // let cohort = "Charlie"
    // console.log(cohort) // Output: "Charlie"
    // cohort = 2023
    // console.log(cohort) //Output: 2023

  // interpreted - interpreter (node) reads over the JavaScript code, interprets each line, and run it
  // Example
    // $ node javascript-intro.js

  // scripting - provide instructions for a program, gives it functionality

// 6 primitive datatypes
  // Boolean
  // Number
  // String
  // Symbol
  // Null
  // Undefined


// Number - positive, negative, zero, whole numbers, decimals (floats)
// console.log(45) // Output: 45
// console.log(45 - 6) // Output: 39
  // modulo operator % gives the remainder of dividing the numbers given
  // console.log(45 % 6) // Output: 3 

// String - list of characters encapsulated by quotation marks. Naming convention is to use ""
    // console.log("Charlie")
    // console.log(cohort) // Output: "Charlie"
    // console.log("Charlie's starting year is 2023")
    // console.log(cohort) //Output: "Charlie's starting year is 2023"

    // concatenation
    // console.log(5 + 5) // Output: 10, numbers will be added together
    // console.log("5" + "5") // Output: "55", strings will be joined together without a space
    // console.log("5" + "  5") // Output: "5  5", strings will be joined together based on spacing

// Boolean - true or false value, uses operator to create a condition (equality, logical, relational)
// console.log(5 === "5") // Output: false
// console.log(false) // Output: false
// console.log(true) // Output: true


// Symbol - unique key used as identifier

// Null - value that equates to nothing

// Undefined - declaring or referencing a variable without a value
// let dessert
// console.log(dessert) // Output: undefined
// dessert = null
// console.log(dessert) // Output: null
// dessert = "ice cream"
// console.log(dessert) // Output: "ice cream"


// Variables - stores data/values so they can referenced quicker

  // Four elements are required to make a variable

  // 1. variable declaration
  // var - very generic, global scope
  // let - inside of a code block (functionality), local scope
  // const - will not allow variable to be reassigned

  // 2. variable name
    // naming convention is camelCase or camelcase, no spaces between the characters, the first letter has to be lowercase

  // 3. assignment operator =

  // 4. value or data that will be stored
  // let fruit = "strawberry"
  // const cohort = "Charlie 2023"
  // console.log(fruit) // output: "strawberry"
  // console.log(cohort) // output: "Charlie 2023"

  
// Built-in methods: pre-built code snippets that will perform a task based on the datatype

  // Strings
  let fruit = "strawberry"
  // console.log(fruit > 2) // output: false because it cannot compare the string with a number

  // .length will count the amount of characters in the string
  console.log(fruit.length) // output: 10

  //        "s t r a w b e r r y"
  // length: 1 2 3 4 5 6 7 8 9 10
  // index:  0 1 2 3 4 5 6 7 8 9

  console.log(fruit.length > 2) // output: true 
  console.log(fruit[6]) // output: "e" because the bracket notation is referencing the index 0f 6 that is storing the character "e"




// Ice box
  // Can we perform calculus in js?
  // Best practices when using variable declarations
