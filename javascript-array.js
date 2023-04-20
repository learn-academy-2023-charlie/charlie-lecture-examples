// JavaScript Arrays 4/20/2023

// Primitive data types: boolean, string, undefined, null, number, symbol
// data type: predefined classification of info, building block of programming language

// properties
// property define what behaviors we can perform

5 + 9
"hello".toUpperCase()

// console.log(6.toUpperCase()) doesn't work

// console.log("hello" + "!")
// hello! - concatenation

// console.log("hello".concat("!"))

// Variable vs Data Type
// console.log(7)

var myNumber = 7
// console.log(myNumber)

myNumber

// abstraction - what does the variable represent

// Arrays

// [] empty array

// [5]

// [true]

// [myNumber]

// [5, true, myNumber] - array is a data type that has properties and behaviors

// console.log([5, true, myNumber, "yo", "hello there", 8, 9].length)
// 7

// console.log([].length)
// 0

// var myArray = [5, true, myNumber, "yo", "hello there", 8, 9]
// console.log(myArray.length)
// 7

// arrays are indexed, zero-indexed
// console.log(myArray[0])
// 5
// console.log(myArray[4])
// hello there

// console.log((myArray[1] = false))
// false
// console.log(myArray)
// [ 5, false, 7, 'yo', 'hello there', 8, 9 ]

// built in methods: modify the element they are called on, or they don't
// mutators: modify the element
// accessors: don't

var myArray = [5, true, myNumber, "yo", "hello there", 8, 9]

// mutator
myArray.push("hey charlie")
// console.log(myArray)
// [ 5, true, 7, 'yo', 'hello there', 8, 9, 'hey charlie' ]
var myLongerArray = myArray.push("hey charlie")
// console.log(myLongerArray)
// 9
// console.log(myArray)
// myArray.push("hey charlie")
// myArray.push("hey charlie")
// myArray.push("hey charlie")
// [ 5, true, 7, 'yo', 'hello there', 8, 9, 'hey charlie', 'hey charlie' ]
// console.log(myLongerArray)
// console.log(myLongerArray)
// console.log(myLongerArray)

// mutator
myArray.pop()
// console.log(myArray)
// [ 5, true, 7, 'yo', 'hello there', 8, 9 ] removed the "hey charlie" element

// myArray.pop()
// console.log(myArray)
// [ 5, true, 7, 'yo', 'hello there', 8 ]
// myArray.pop()
// console.log(myArray)
// [ 5, true, 7, 'yo', 'hello there' ]

// mutator
myArray.reverse()
// console.log(myArray)
// [ 9, 8, 'hello there', 'yo', 7, true, 5 ]

// accessor
var myOtherArray = [3, 4, 5, 6]
myOtherArray.concat(myArray)
// console.log(myOtherArray)
// [ 3, 4, 5, 6 ]
// console.log(myOtherArray.concat(myArray))
// [ 3, 4, 5, 6, 9, 8, 'hello there', 'yo', 7, true, 5 ]
var combinedArray = myOtherArray.concat(myArray)
// console.log(combinedArray)
// [ 3, 4, 5, 6, 9, 8, 'hello there', 'yo', 7, true, 5 ]

// console.log("hello".reverse())
// "hello".reverse is not a function - the data type is not compatible

// turns a string into an array
// console.log("hello".split())
// [ 'hello' ]

// console.log("hello".split().reverse())
// [ 'hello' ]

// console.log("hello".split(""))
// [ 'h', 'e', 'l', 'l', 'o' ]

console.log("hello".split("").reverse())
// [ 'o', 'l', 'l', 'e', 'h' ]

// console.log("hello".split("").reverse().join())
// o,l,l,e,h

console.log("hello".split("").reverse().join(""))
// olleh
