// High Order Functions 4/24/23 Charlie

// Built-in methods: syntactical sugar or a tool created by developer that combines the concepts of different coding processes, define the behavior of various datatypes in Javascript
  // mutators: permanently change the data
  // accessors: does not alter the data, will need to store the change
  // structure
    // a period that allows you to append the method to the end of the data
    // name of the method: already predetermined
    // () allows to perform the behavior

// const beverages = [ "beer", "coffee", "milk", "sweet tea", "OJ" ]
// const food = [ "burgers", "pizza", "french fries", "buffalo wings" ]

// console.log(beverages)
// console.log(food)
// output -> [ 'beer', 'coffee', 'milk', 'sweet tea', 'OJ' ]
// [ 'burgers', 'pizza', 'french fries', 'buffalo wings' ]

// console.table(beverages)
// console.table(food)

// console.log(beverages.toUpperCase());
// output: TypeError: beverages.toUpperCase is not a function
// wrong datatype

// console.log(beverages[1].toUpperCase());
// output -> COFFEE

// For loop - a good counting tool that we can use to iterate across an array by using the numbers to represent the index. 

// const beverages = [ "beer", "coffee", "milk", "sweet tea", "OJ" ]
// const food = [ "burgers", "pizza", "french fries", "buffalo wings" ]

// use a parameter to let the function know to expect data on the function call
// const arrayToSentence = (array) => {
//   let orders = []
//   for(let i = 0; i < array.length; i++) {
//     orders.push(`I would like a ${array[i]}`)
//     // console.log("orders inside for loop: ", orders) // useful to see the iteration push values into the orders array
//     // return orders // return tells the function when to stop. This return will cause the array to be given with only one value
//   }
//   return orders // placing return outside the for loop allows iteration to continue and produce an array with all the values
//   // console.log("orders after return", orders) // will not see this log  because it is after the return
// }

// // perform function call with a value aka an argument since a parameter was specified in the function
// console.log(arrayToSentence(beverages))

// Output -> [
  //   'I would like a beer',
  //   'I would like a coffee',
  //   'I would like a milk',
  //   'I would like a sweet tea',
  //   'I would like a OJ'
  // ]

// High order functions - functions that take in a function as an argument
  // can iterate across three elements of an array: value, index, and array

// .map() - returns an array with the same length as the original array
        // - iteration
        // - performs the logic on the specified element of the array
 
// const beverages = [ "beer", "coffee", "milk", "sweet tea", "OJ" ]
// const food = [ "burgers", "pizza", "french fries", "buffalo wings" ]

// Pseudocode:
// input: array of strings
// output: array of strings in a polite statement
// function name: arrayToSentence
// iterate across the values of the string
// place each value in a polite statement
// return: array with each statement as a value

// Function:
// const arrayToSentence = (array) => {
//   // high order takes in a function as an argument aka callback function
//   return array.map((value) => {
//     return `I would like a ${value}`
//   })
// }

// // Function call:
// console.log(arrayToSentence(food))
// output -> [
  //   'I would like a burgers',
  //   'I would like a pizza',
  //   'I would like a french fries',
  //   'I would like a buffalo wings'
  // ]

// ES-6 Syntax allows removal of return and {} if returning one thing

// Function:
// const arrayToSentence = (array) => {
//   return array.map(value => `I would like a ${value}`)
// }

// console.log(arrayToSentence(food))
// output -> [
//   'I would like a burgers',
//   'I would like a pizza',
//   'I would like a french fries',
//   'I would like a buffalo wings'
// ]

// Accessing the index parameter
// const beverages = [ "beer", "coffee", "milk", "sweet tea", "OJ" ]
// const food = [ "burgers", "pizza", "french fries", "buffalo wings" ]

// const arrayToSentence = (array) => {
//   return array.map((value, index) => `I would like the value at index ${index}, which is ${value}`)
// }

// console.log(arrayToSentence(food))
// output: [
  //   'I would like the value at index 0, which is burgers',
  //   'I would like the value at index 1, which is pizza',
  //   'I would like the value at index 2, which is french fries',
  //   'I would like the value at index 3, which is buffalo wings'
  // ]

  // const beverages = [ "beer", "coffee", "milk", "sweet tea", "OJ" ]
  // const food = [ "burgers", "pizza", "french fries", "buffalo wings" ]
  
  // const arrayToSentence = (array) => {
  //   return array.map((value, index, array) => `I would like to order from the array ${array}`)
  // }
  
  // console.log(arrayToSentence(food))

  // output: [
  //   'I would like to order from the array burgers,pizza,french fries,buffalo wings',
  //   'I would like to order from the array burgers,pizza,french fries,buffalo wings',
  //   'I would like to order from the array burgers,pizza,french fries,buffalo wings',
  //   'I would like to order from the array burgers,pizza,french fries,buffalo wings'
  // ]


  // .filter() - performs the same actions as the .map() with iteration, gives assess to the three elements in the array, returns an array
        // difference: gives a subset of the array or portion of the array that meets a specified condition
  
  const beverages = [ "beer", "coffee", "milk", "sweet tea", "OJ" ]
  const food = [ "burgers", "pizza", "french fries", "buffalo wings" ]

  // Prompt: create a function that takes in an array and returns an array which contain values that include the letter "e"

  // Pseudocode:
  // input: array
  // output: array with values that include the letter "e"
  // if given [ "beer", "coffee", "milk", "sweet tea", "OJ" ], expected outcome: [ "beer", "coffee", "sweet tea" ]
  // function name: eDrinks
  // iterate across the value in the array
  // check to see if the value includes "e"
  // return: array with the values that include "e"

  // using developer tools to see filter action
  // const eDrinks = (array) => {
  //   return array.filter((value, index) => {
  //     // using variables and console.log to see the filter action
  //     let eWord = value.includes("e")
  //     // console.log(eWord, "at index:", index)
  //     return eWord
  //   })
  // }

  // output of the filter action from console.log() ->
    // true at index: 0
    // true at index: 1
    // false at index: 2
    // true at index: 3
    // false at index: 4
    // [ 'beer', 'coffee', 'sweet tea' ]
  
  // function without return and {}:
  // const eDrinks = (array) => {
  //   return array.filter(value => value.includes("e"))
  // }

  // // function call:
  // console.log(eDrinks(beverages))

  // Output -> [ 'beer', 'coffee', 'sweet tea' ]

  // type coercion
  console.log( "i" + 42) //output -> "i42"
  console.log(42) //output -> 42
  console.log(42 + "i") //output -> "42i"