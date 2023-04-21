// Iterate - repetitive process
// Iteration in javascript - to repeat a set of instructions until a specified condition is met

// For loop - used to provide numbers that we relate to the indexes in an array

// structure
  // for(initializer; stopping condition; iterator) {
  //   code block/actions to take
  // }

  // initializer: declare a variable and assign the starting point of your count; i is the common variable used. Ex. let i = 1 or i = 0

  // stopping condition: tells the for loop when to stop. On each iteration the condition is evaluated. If it is true, then perform the actions of the code block. Then the condition is re-evaluated. If it is false, then the for loop stops. Ex. i < 4

  // iterator: tells the for loop how to iterate
      // increment Ex. i = i + 1 long hand, i++ increment operator
      // decrement Ex. i = i - 1

  // Chocolate loop
  // for(let i = 1; i < 4; i++) {
  //   console.log("this is iteration: ", i)
  // }

  // Output:
  // this is iteration:  1
  // this is iteration:  2
  // this is iteration:  3

  // for(let i = 1; i < 4; i = i + 2) {
  //   console.log("this is iteration: ", i)
  // }
  // Output:
  // this is iteration:  1
  // this is iteration:  3

  // Stack overflow if we use the assignment operator on the stopping condition. To stop the stack overflow, control + c
  // for(let i = 1; i = 4; i = i + 2) {
  //   console.log("this is iteration: ", i)
  // }
  // output: infinite loop of "this is iteration 4"

  // using spaces between the characters for visual purposes
  // string: "c h o c o l a t e"
  // index:   0 1 2 3 4 5 6 7 8

  // console.log("chocolate"[4]) //output: "o"

  let treat = "chocolate"
  // console.log(treat[4]) //output: "o"

  // index - the location of the characters in the string, the count starts at 0
  // value - the characters located at the index of the string

  // array
  let snack = ["chocolate", "pudding", "kit kat", "hot fries", "takis"]
  // index         0            1         2           3           4

  // index - the location of each value 
  // value - the data that is separated by a comma in the array

  // for(let i = 0; i < 5; i++) {
  //   console.log(snack[i])
  // }
  // // output:
  // // "chocolate"
  // // "pudding"
  // // "kit kat"
  // // "hot fries"
  // // "takis"

  // let moreSnacks = ["chocolate", "pudding", "kit kat", "hot fries", "takis", "rice and eggs"]

  // for(let i = 0; i < moreSnacks.length; i++) {
  //   console.log(moreSnacks[i])
  // }
  // output:
    // "chocolate"
    // "pudding"
    // "kit kat"
    // hot fries
    // takis
    // rice and eggs

// GLOBAL SCOPE
// global scope - variable is visible everywhere regardless if declared with var, let const

// DECLARING VARIABLE WITH VAR
// var song = "Beautiful"

// for(let i = 0; i < 5; i++) {
//   console.log(song)
// }

// output:
  // Beautiful
  // Beautiful
  // Beautiful
  // Beautiful
  // Beautiful

// console.log("after the loop: ", song)
// output:
  // after the loop:  Beautiful


// REASSIGNMENT
// var and let allows reassignment within the block

// REASSIGNING VARIABLE WITH VAR
// var song = "Beautiful"

// for(let i = 0; i < 5; i++) {
//   song = "Semi-Charmed Life"
//   console.log(song)
// }

// output:
  // Semi-Charmed Life
  // Semi-Charmed Life
  // Semi-Charmed Life
  // Semi-Charmed Life
  // Semi-Charmed Life

// console.log("after the loop: ", song)
// output:
  // after the loop:  Semi-Charmed Life

// REASSIGNING VARIABLE WITH CONST
// const song = "Beautiful"

// for(let i = 0; i < 5; i++) {
//   song = "Semi-Charmed Life"
//   console.log(song)
// }

// console.log("after the loop: ", song)
// output: const declaration will not allow reassignment
// TypeError: Assignment to constant variable.


// *********ADDITIONAL NOTES AS PROMISED**********
// BLOCK SCOPE
// block scope - variable declared within a code block

// BLOCK SCOPE WITH VARIABLE USING CONST
// const song = "Beautiful"

// for(let i = 0; i < 5; i++) {
//   const song = "Semi-Charmed Life"
//   const favSong = "Lamb Chop's Sing-a-long"
//   console.log(song)
//   console.log(favSong)
// }
// Output:
  // Semi-Charmed Life
  // Lamb Chop's Sing-a-long
  // Semi-Charmed Life
  // Lamb Chop's Sing-a-long
  // Semi-Charmed Life
  // Lamb Chop's Sing-a-long
  // Semi-Charmed Life
  // Lamb Chop's Sing-a-long
  // Semi-Charmed Life
  // Lamb Chop's Sing-a-long
  
  // console.log("after the loop: ", song)
  // output: after the loop:  Beautiful
  // This value comes from the variable that was declared globally outside the code block. Best practices is to give each variable a unique unless you are reassigning a variable declared with let or var. 
  // The variable (with the same name of the globally scope variable is inside the code block) will not produce an error because it is not accessible outside the block.
  
  // console.log("after the loop: ", favSong)
  // output: ReferenceError: favSong is not defined
  // favSong variable cannot be seen outside the block scope since it was only declared inside the code block.

  // BLOCK SCOPE WITH VARIABLE USING VAR

  // var song = "Beautiful"

  // for(let i = 0; i < 5; i++) {
  //   song = "Semi-Charmed Life"
  //   var favSong = "Lamb Chop's Sing-a-long"
  //   console.log(song)
  //   console.log(favSong)
  // }

  // output: 
  // Semi-Charmed Life
  // Lamb Chop's Sing-a-long
  // Semi-Charmed Life
  // Lamb Chop's Sing-a-long
  // Semi-Charmed Life
  // Lamb Chop's Sing-a-long
  // Semi-Charmed Life
  // Lamb Chop's Sing-a-long
  // Semi-Charmed Life
  // Lamb Chop's Sing-a-long

  // console.log("after the loop: ", song)
  // Output: after the loop:  Semi-Charmed Life

  // console.log("after the loop: ", favSong)
  // Output: after the loop:  Lamb Chop's Sing-a-long


  // BLOCK SCOPE WITH VARIABLE USING LET
  // let song = "Beautiful"

  // for(let i = 0; i < 5; i++) {
  //   song = "Semi-Charmed Life"
  //   let favSong = "Lamb Chop's Sing-a-long"
  //   console.log(song)
  //   console.log(favSong)
  // }

  // output: 
  // Semi-Charmed Life
  // Lamb Chop's Sing-a-long
  // Semi-Charmed Life
  // Lamb Chop's Sing-a-long
  // Semi-Charmed Life
  // Lamb Chop's Sing-a-long
  // Semi-Charmed Life
  // Lamb Chop's Sing-a-long
  // Semi-Charmed Life
  // Lamb Chop's Sing-a-long
  
  // console.log("after the loop: ", song)
  // Output: after the loop:  Semi-Charmed Life

  // console.log("after the loop: ", favSong)
  // Output: ReferenceError: favSong is not defined
  // favSong variable cannot be seen outside the block scope since it was only declared inside the code block.

