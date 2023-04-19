// JavaScript Conditionals 4/19/2023

// review:

// git is a software, version control manager, tracking the changes in your code
// github is collaborative platform that uses git

// why is important to make a branch - protecting the main branch (the source of truth)

// files have extensions, branches do not

// primitive data types: 6
// number, symbol, undefined, null, string, boolean
// data type - building blocks of a coding language

// variable - named container

// built in method - predefined behavior that has been added to the JS language

// index - location of a character in a string, zero-indexed
// "hello" // last index 4, length - 5

// conditionals

// decisions - input creates appropriate output
// have to perform evaluations - true or false

// equality operator
// console.log(7 === 3 + 4)
// === equality evaluator
// true

// console.log("Sarah" === "sarah")
// false

// relational operators
// < > <= >=
// console.log(4 > 7)
// false

// console.log(9 <= 4 + 5)
// true

// logical operator
// console.log(7 > 6 && "sarah" === "Sarah".toLowerCase())
// && - logical AND
// true

// console.log(7 > 6 && "sarah" === "Sarah")
// false

// console.log(7 > 6 || 5 === "Sarah".length)
// || - logical OR
// true

// console.log(7 > 6 || "sarah" === "Sarah".length)
// true
// ==> "Sarah".length is a data type of number

// console.log(7 > 6 || "sarah" === "Sarah".length || "sarah" === "Sarah" || "sarah" === "Sarah".toLowerCase())
// true

// console.log(7 < 6 || "sarah" === "Sarah".length || "sarah" === "Sarah" || "Sarah" === "Sarah".toLowerCase())
// false

// conditional statement

// if()

// if(true) what gets passed into the parens has to evaluate to true or false

// if (true) {
//   console.log("this is true!")
// }
// curly braces - executable code
// this is true!

// if (false) {
//   console.log("this is true!")
// }
// if what is in the parens is true, the code in the curly executes
// if it is false nothing happens

// else does not take an evaluation
// if (false) {
//   console.log("this is true!")
// } else {
//   console.log("I am the else!")
// }
// I am the else!

// if (true) {
//   console.log("this is true!")
// } else {
//   console.log("I am the else!")
// }
// this is true!
// only ever one outcome, the first one that is true will run

// string interpolation - backticks wrap the statement, ${} allow you escape into JS and embed variables

// var myName = "Sarah"
// if (myName === "Sarah") {
//   console.log(`Hello, my name is ${myName}`)
// } else {
//   console.log("I am the else!")
// }
// Hello, my name is Sarah

// var myName = "Justin"

// if (myName === "Sarah") {
//   console.log(`Hello, my name is ${myName}`)
// } else {
//   console.log("I am the else!")
// }

// myName = "Sarah"
// console.log(myName)
// I am the else!

var myName = "Justin"
if (myName === "Sarah") {
  console.log(`Hello, my name is ${myName}`)
} else if (myName === "Justin") {
  console.log("Hey Justin!")
} else {
  console.log("I am the else!")
}
// only be one outcome
// Hey Justin!

// one if, one else, as many else ifs as you need
