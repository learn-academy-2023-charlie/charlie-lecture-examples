// Prompt: Create a function that returns a statement that tells Charlie 2023 to drink tea.

// Red: creating a test for a function that will give an expected output
// 1. Write the test
// 2. See the test fail

describe("drinkTea", () => {
  it("informs Charlie 2023 to drink more tea", () => {
    expect(drinkTea()).toEqual("Charlie 2023, drink more tea now!!!")
  })
})

// Good failure because the function drinkTea() has not been created

// FAIL  ./jest.test.js
// drinkTea
//   ✕ informs Charlie 2023 to drink more tea (1 ms)

// ● drinkTea › informs Charlie 2023 to drink more tea

//   ReferenceError: drinkTea is not defined

// Green: create the function that will pass the evaluation
// 3. Write the code
// 4. See the test pass

// Pseudocode
// input: none
// output: string that states "Charlie 2023, drink more tea now!!!"
// function name: drinkTea
// return "Charlie 2023, drink more tea now!!!"

// function
const drinkTea = () => {
  return "Charlie 2023, drink more tea now!!!"
}

// Success:
// PASS  ./jest.test.js
// drinkTea
//   ✓ informs Charlie 2023 to drink more tea

// Refactor: use a method that will take less lines of code or use a different approach
// 5. Refactor, if necessary

// Create a function that returns whether or not an item is soup based on a "yes" or "no" input.
// if yes, expected output "That is soup"
// if not, expected output "Why bother, it is not soup"

// RED
describe("soupChecker", () => {
  it("returns whether or not an item is soup", () => {
    expect(soupChecker("yes")).toEqual("That is soup")
    expect(soupChecker("no")).toEqual("Why bother, it is not soup")
  })
})

// good failure
// soupChecker
// ✕ returns whether or not an item is soup

// ● soupChecker › returns whether or not an item is soup

// ReferenceError: soupChecker is not defined

// GREEN
// pseudocode:
// input: string
// output: string that states whether or not an item is a soup
// function name: soupChecker
// use conditional statements to provide outputs for yes or no (if/else)
// return: 
  // if "no" -> "Why bother, it is not soup"
  // if "yes" -> "That is soup"

// function:
// const soupChecker = (string1) => {
//   if(string1 === "yes") {
//     return "That is soup"
//   } else {
//     return "Why bother, it is not soup"
//   }
// }

// success:
// PASS  ./jest.test.js
// drinkTea
//   ✓ informs Charlie 2023 to drink more tea (1 ms)
// soupChecker
//   ✓ returns whether or not an item is soup (1 ms)

// REFACTOR using ternary operator
const soupChecker = (string1) => {
  // return condition ? true (similar to if) : false (similar to else)
  return string1 === "yes" ? "That is soup" : "Why bother, it is not soup"
}

// success
// PASS  ./jest.test.js
// drinkTea
//   ✓ informs Charlie 2023 to drink more tea (1 ms)
// soupChecker
//   ✓ returns whether or not an item is soup

// Prompt: Create a function that takes in an array and returns an array that replaces any names that contain the letter "a" with an emoji "🍏".

// Test variable
const cohort2023 = [ "Aubrey", "Bea", "Catalino", "Cherry", "Ernesto", "Halie", "Henri", "Jessica", "Justin", "Kyle", "Ramgel", "Rashaan", "Scott", "Suri", "Tucker", "Vance", "Will", "Yue Han" ]
// Expected output: [ "🍏", "🍏", "🍏", "Cherry", "Ernesto", "🍏", "Henri", "🍏", "Justin", "Kyle", "🍏", "🍏", "Scott", "Suri", "Tucker", "🍏", "Will", "🍏" ]

// test
describe("appleNames", () => {
  it("takes in an array and returns an array that replaces any names that contain the letter 'a' with an emoji '🍏'", () => {
    expect(appleNames(cohort2023)).toEqual([ "🍏", "🍏", "🍏", "Cherry", "Ernesto", "🍏", "Henri", "🍏", "Justin", "Kyle", "🍏", "🍏", "Scott", "Suri", "Tucker", "🍏", "Will", "🍏" ])
  })
})

// see the test fail by running $ yarn jest
// appleNames
// ✕ takes in an array and returns an array that replaces any names that contain the letter 'a' with an emoji '🍏'

// ● appleNames › takes in an array and returns an array that replaces any names that contain the letter 'a' with an emoji '🍏'

// ReferenceError: appleNames is not defined


// create the function
// pseudocode:
// input: array
// output: array with apple emoji replacing strings with the letter "a" and the same length as the original
// function name: appleNames
// methods: .map() and .includes()
// iterate across the values in the array by using .map()
// replacing the values that have letter "a" with green apple emoji by using .includes()
// return: array with apple emoji replacing strings with the letter "a" 

// function:
// const appleNames = (array) => {
//   // console.log(array[0].includes("a") || array[0].includes("A")) // output: true, look for the print out above the testing suite
//   return array.map((string) => {
//     const aFilter = string.includes("a") || string.includes("A")
//     if(aFilter === true) {
//       return "🍏"
//     } else {
//       return string
//     }
//   })
// }

// see the test pass
// pass
// appleNames
// ✓ takes in an array and returns an array that replaces any names that contain the letter 'a' with an emoji '🍏'

// clean it up
// const appleNames = (array) => {
//   return array.map((string) => {
//     const aFilter = string.includes("a") || string.includes("A")
//     if(aFilter) {
//       return "🍏"
//     } else {
//       return string
//     }
//   })
// }

// additional refactor with ternary operator
const appleNames = (array) => {
  return array.map((string) => {
    const aFilter = string.includes("a") || string.includes("A")
    return aFilter ? "🍏" : string
  })
}
// Prompt: Create a function that takes in two arrays and returns an array that combines the values from the two arrays and places them in alphabetical order.

// test variable:
const needAdventure = []
const epicTrips = []

// expected output: 