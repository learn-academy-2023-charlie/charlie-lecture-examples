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
// return: if "no" -> "Why bother, it is not soup"
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
  return string1 === "yes" ? "That is soup" : "Why bother, it is not soup"
}

// success
// PASS  ./jest.test.js
// drinkTea
//   ✓ informs Charlie 2023 to drink more tea (1 ms)
// soupChecker
//   ✓ returns whether or not an item is soup