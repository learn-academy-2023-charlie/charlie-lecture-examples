// Javascript Classes 4/27/23 Charlie
// classes: blueprint to create javascript objects
  // allow the creation of objects to be dynamic and reusable
  
// Class Syntax
  // class ClassName {
  //   // methods
  //   constructor() {}
  //   // custom method
  //   methodName() {}
  // }

// Declaring a class
// declare with keyword class
// classname is PascalCase
    // class PartyPlanner {}
    // console.log(PartyPlanner);
    // output: [class PartyPlanner]

// Adding static data to the class
// constructor() {}
  // constructor method - executed automatically when creating an object
  // used to initialize properties for the object

  // class PartyPlanner {
  //   constructor() {
  //     this.guests = 100,
  //     this.location = "Scott's house",
  //     this.time = "6:00am EST",
  //     this.date = "4/28/23",
  //     this.theme = "Toga"
  //   }
  // }

// Creating an object aka instantiate the class
  // use keyword new - creates an object by instantiating the class

  // const toga = new PartyPlanner
  // console.log(toga);
  // output: PartyPlanner {
  //   guests: 100,
  //   location: "Scott's house",
  //   time: '6:00am EST',
  //   date: '4/28/23',
  //   theme: 'Toga'
  // }

// Add methods to the class declaration

// class PartyPlanner {
//   constructor() {
//     this.guests = 100,
//     this.location = "Scott's house",
//     this.time = "6:00am EST",
//     this.date = "4/28/23",
//     this.theme = "Toga"
//   }
//   // custom methods
//   announce() {
//     return `Date: ${this.date}, Time: ${this.time}, Location: ${this.location}`
//   }

//   flyer() {
//     return `Don't be late to the ${this.theme} Party!!!`
//   }
// }

// const toga = new PartyPlanner
// console.log("toga obj: ", toga);
// console.log(toga.announce());
// output-> Date: 4/28/23, Time: 6:00am EST, Location: Scott's house
// console.log(toga.date)
// Output: 4/28/23

// const bbq = new PartyPlanner
// console.log("bbq obj: ", bbq);

// toga obj:  PartyPlanner {
//   guests: 100,
//   location: "Scott's house",
//   time: '6:00am EST',
//   date: '4/28/23',
//   theme: 'Toga'
// }
// bbq obj:  PartyPlanner {
//   guests: 100,
//   location: "Scott's house",
//   time: '6:00am EST',
//   date: '4/28/23',
//   theme: 'Toga'
// }

// To change the values, reference the object name and key to reassign a new value
// bbq.time = "2:00pm EST"
// bbq.date = "4/29/23"
// console.log("changing bbq: ", bbq);

// showing we CaReD - be dynamic
// class PartyPlanner {
//   constructor(guests, location, time, date, theme) {
//     this.guests = guests,
//     this.location = location,
//     this.time = time,
//     this.date = date,
//     this.theme = theme
//   }
//   // custom methods
//   announce() {
//     return `Date: ${this.date}, Time: ${this.time}, Location: ${this.location}`
//   }

//   flyer() {
//     return `Don't be late to the ${this.theme} Party!!!`
//   }
// }

// const toga = new PartyPlanner
// console.log(toga);
// output: PartyPlanner {
//   guests: undefined,
//   location: undefined,
//   time: undefined,
//   date: undefined,
//   theme: undefined
// }

// const toga = new PartyPlanner(100, "Scott's house", "6:00am EST", "4/28/23", "Toga")
// console.log(toga);
// output: PartyPlanner {
//   guests: 100,
//   location: "Scott's house",
//   time: '6:00am EST',
//   date: '4/28/23',
//   theme: 'Toga'
// }

// mixed data
class PartyPlanner {
  constructor(guests, date, theme) {
    this.location = "Scott's house",
    this.time = "2:00pm EST",
    this.guests = guests,
    this.date = date,
    this.theme = theme
  }
  // custom methods
  announce() {
    return `Date: ${this.date}, Time: ${this.time}, Location: ${this.location}`
  }

  flyer() {
    return `Don't be late to the ${this.theme} Party!!!`
  }
}

const tea = new PartyPlanner(30, "5/1/23", "Tea Time")
console.log(tea);
// output: PartyPlanner {
//   location: "Scott's house",
//   time: '2:00pm EST',
//   guests: 30,
//   date: '5/1/23',
//   theme: 'Tea Time'
// }

// Add a property by referencing object name and the new key
tea.cup = "Bring your own cup"
console.log(tea);
// output: PartyPlanner {
//   location: "Scott's house",
//   time: '2:00pm EST',
//   guests: 30,
//   date: '5/1/23',
//   theme: 'Tea Time',
//   cup: 'Bring your own cup'
// }