// Functions Loops and Arrays

// More complex, reusable, and dynamic code

// Ex. Multiply through an array of numbers by 5
// iteration - the process of preforming an action over and over again until the condition is met
// Values - the value holding that location
// Index - location of the value

// for loop anatomy :
// i = 0 -> your starting point 
// i < array.length -> stopping point
// i++ -> Increment to get from start to stop

var myArrayOfNums = [2, 3, 4, 5]
var moreNums = [100, 435, 629, 786, 4, 5, 6, 7, 7, 8, 9]

const mult5 = (array) => {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * 5)
  }
  return newArray
}
// console.log(mult5(myArrayOfNums));
// output : [ 10, 15, 20, 25 ]
// console.log(mult5(moreNums));
// output : [ 500, 2175, 3145, 3930 ]
// output : [
//   500, 2175, 3145, 3930,
//   20,   25,   30,   35,
//   35,   40,   45
// ]

// const mult5 = (array) => {
//   return array * 5
// }

// console.log(mult5(myArrayOfNums))
// output : NaN (Not a Number)

// Ex. Create a function that takes in an array holding words and returns the words in a sentence. Diner Dash challenge

var beverages = ["Beer", "Coffee", "Sweet Tea", "OJ", "Milk"]
var food = ["Burgers", "Pizza", "Buff Wings", "Fries"]

// Pseudocode : 
// - input : an array of words ["Beer", "Coffee", "Sweet Tea", "OJ", "Milk"]
// - output : the words in a sentence held by a string ["I would like a Beer please" *for each one*]

// create a function called arrayToSentence
// iterate through my array using a for loop
// returning the words string interpolated into a sentence

const arrayToSentence = (array) => {
  let orders = []
  for (let i = 0; i < array.length; i++) {
    orders.push(`I would like a ${array[i]}, please.`)
  }
  return orders
}

console.log("bev log", arrayToSentence(beverages));
// output : [
//   'I would like a Beer, please.',
//   'I would like a Coffee, please.',
//   'I would like a Sweet Tea, please.',
//   'I would like a OJ, please.',
//   'I would like a Milk, please.'
// ]

console.log(arrayToSentence(food));
// output : [
//   'I would like a Burgers, please.',
//   'I would like a Pizza, please.',
//   'I would like a Buff Wings, please.',
//   'I would like a Fries, please.'
// ]

// Functions need that keyword return to give the final return (once met it will finish the logic)
// Console logs are helpful dev tools that help along the way see the code excecute