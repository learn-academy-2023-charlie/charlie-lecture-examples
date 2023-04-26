## Getting Started
- $ cd <github-repo>
- $ git pull origin main
- $ git checkout -b <branch-name>
- $ mkdir <project-name>
- $ cd <project-name>
- $ touch jest.test.js
- $ code .
- $ yarn add jest

- run yarn commands on the project directory
- run git commands on the github repo

## Pushing changes to github
***cd out to the github repo***
- $ cd ..  

***then perform git flow as usual***
- $ git status
- $ git add <file-name>
- $ git commit -m "message"
- $ git push origin <branch-name>

## Test Driven Development (TDD)
***Three things to keep track of when testing:***
- Input: What is the value you are passing to your method or function?
- Expected output: What is supposed to happen based on your input?
- Actual result from your code: What has actually occurred from your logic?

## <span style="color:red">RED</span>-<span style="color:green">GREEN</span>-<span style="color:gold">REFACTOR</span> process
<span style="color:red">
  Red: creating a test for a function that will give an expected output

  1. Write the test  
  2. See the test fail
</span>

<span style="color:green">
  Green: create the function that will pass the evaluation

  3. Write the code
  4. See the test pass
</span>

<span style="color:gold">
  Refactor: use a method that will take less lines of code or use a different approach
  5. Refactor, if necessary
</span>


## Creating a jest test
- describe(): groups the test, takes in two arguments:
  string of the name of the function and a callback function, which is a function that is taken in as an argument

- it(): nested in the describe code block, defining the test, takes in two arguments:
  string of the action statement of the function and a callback function

- expect(): function call with or without an argument
jest matcher: appended to the end of the expect statement, take the expected output as an argument

```js
// 1. Write the test
  describe("drinkTea", () => {
    it("informs Charlie 2023 to drink more tea", () => {
      expect(drinkTea()).toEqual("Charlie 2023, drink more tea now!!!")
    })
  })

// 2. See the test fail by running $ yarn jest
  // Good failure because the test is built to evaluate a function call drinkTea. Since the function does not exist yet, this test fails at the expect statement that contains the function call.
  // output -> ReferenceError: drinkTea is not defined

// 3. Write the code
  // Pseudocode:
  // input: none
  // output: string that states "Charlie 2023, drink more tea now!!!"
  // function name: drinkTea
  // return: "Charlie 2023, drink more tea now!!!"

  // function
  const drinkTea = () => {
    return "Charlie 2023, drink more tea now!!!"
  }

// 4. See the test pass by running $ yarn jest
  // not need to console.log() the function call
  // the function call is in the expect statement
  // As long as the logic returns the same output as the expected output passed into the jest matcher, you will see PASS. If not, an error message will appear.

// 5. Refactor, if necessary
  // not necessary
```

## Unexpected failure
- If you receive an error when evaluating your function, follow the trace of the error.

- This error is showing that the expected output and the actual output (received) are not the same.

- Fix: correct the statement by ensuring it is exactly what is passed into the jest matcher on the expect statement line of the jest test.

