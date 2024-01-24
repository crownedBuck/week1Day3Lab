////////// PROBLEM 1 //////////
/*
  Create a variable called 'lovesCode' and set it equal to true. 
  Check to see if 'lovesCode' is equal to true or false. 
  If it is true, console log "I love to code!"
  If it is not, console log "Coding has its challenges."
*/

let lovesCode = true

if (lovesCode === true) {
  console.log("I love to code!")
} else {
  console.log("Coding has its challenges")
}

// For problems 2-3 use the following lines of code:
var amysAge = 29;
var brittanisAge = 34;
var amysBirthYear = 1991;
var brittanisBirthYear = 1986;

////////// PROBLEM 2 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy or Brittani is older, 
  and then console.log '{name} is older'. Hint: Consider what will happen if they are the same age. Handle this situation.
*/

if (brittanisAge > amysAge) {
  console.log("Brittan is older")
} else if (brittan < amysAge) {
  console.log("Amy is older")
} else {
  console.log("They are the same age")
}

////////// PROBLEM 3 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy and Brittani were 
  born in the same year. If they were, console.log 'Amy & Brittani were born in the same year'. If they 
  were not, console.log 'Amy & Brittani were not born in the same year'
*/

if (amysBirthYear === brittanisBirthYear) {
  console.log("They were born in the same year.")
} else {
  console.log("Brittan and Amy were not born on teh same year")
}

////////// PROBLEM 4 //////////

let temperature = 55;
let rain = true;

/*
  Using an if statement and a comparison operator, create code that will log a suggestion on what type of 
  clothes one should wear for the day, based on the above temperature and rain.
  If it is 80 degrees or above, and raining, one should wear a t-shirt and take an umbrella. If it is between 
  60 and 80 degrees, and raining, one should wear a rain-jacket. If it is 60 degrees or below, one should wear a 
  jacket and carry an umbrella. Come up with your own clothing suggestions based on those temperature parameters when it is not raining.
*/

//CODE HERE

if (temperature >= 80 && rain === true) {
  console.log("you should wear a t-shirt and take an umbrella")
} else if (temperature >= 60 && temperature > 80 && rain === true) {
  console.log("you should be wearing a rain-jacket!")
} else if (temperature < 60 && rain === true) {
  console.log("you should be wearing a winter jacket and cleats! PREPARE FOR ICE!!!")
} else if (temperature >= 80 && rain === false) {
  console.log("you should wear a t-shirt and shorts!")
} else if (temperature < 60 && rain === false) {
  console.log("you should wear a jacket or sweater")
} else {
  console.log("you should wear a winter jacket")
}

/*
  Create a for-loop that runs 10 times, and on each iteration logs the word 'hello'.
*/

for (let number = 0; number < 10; number++) {
  console.log("hello")
}

////////// PROBLEM 6 //////////

/*
  Create a for-loop that runs 10 times, logging the numbers 1 through 10. Ex, on the first iteration it would log 1, on the second iteration it would log 2.
*/

for (let number = 0; number < 10; number++) {
  console.log(number + 1)
}

////////// PROBLEM 7 //////////

/*
  Create a for-loop that logs the numbers 0 through 10 backwards. Ex, on the first iteration it would log 10, on the second iteration it would log 9.
*/

for (let number = 10; number > -1; number--) {
  console.log(number)
  // console.log("ping")
}


////////// PROBLEM 8 //////////

let score = 0;
let passingScore = 7;

/*
  Create a while-loop that logs "Your score is not high enough" while the score variable above is below passingScore. 
  In each iteration of the loop, increase the score by one. If your code is successful, you will see your logged statement 7 times.
*/

while (score < passingScore) {
  console.log("Your score is not high enough")
  score = score + 1;
}

////////// INTERMEDIATE PROBLEMS //////////

////////// PROBLEM 9 //////////
/*
  Create a variable called 'changeMyMind' and set it equal to true. 
  Check to see if changeMyMind is set to true or false, if it is true, change the status to false, if it is false, change the status to true.

*/

let changeMyMind = true

if (changeMyMind === true) {
  changeMyMind = false
  console.log("this is now false")
} else if (changeMyMind === false) {
  changeMyMind = true
  console.log("this is now true")
} else {
  console.log("There is an error, double check your code")
}

////////// PROBLEM 10 //////////
// Using the "not" operator (!), change the current value of changeMyMind to true (it should currently be set to 
// false due to the if-else statement in Problem 9). After you change the value of changeMyMind, console.log 
// it's new value (it should now read true).

/* 
Expected relsult: "This is now true." in the log
*/

if (changeMyMind != true) {
  changeMyMind = true
  console.log("This is now true.")
} else if (changeMyMind != false) {
  changeMyMind = false
  console.log("This is now false")
} else {
  console.log("There is an error in the code")
}

////////// ADVANCED PROBLEMS //////////

////////// PROBLEM 11 //////////

let z = 5;

// Create a while loop that continues to run while z is greater than 0. Within the while loop, 
// log a countdown from the value of z to 1. Once you have logged the countdown, make sure you decrement 
// z by 1. If your code is running properly, you should see: 5,4,3,2,1,4,3,2,1,3,2,1,2,1,1.

while (z > 0) {
  let secondNumber = z
  while (secondNumber > 0) {
    console.log(secondNumber)
    secondNumber = secondNumber - 1
  }
  z = z - 1
}

//CODE HERE
