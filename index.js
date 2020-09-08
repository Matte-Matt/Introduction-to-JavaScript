/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 18;
let age = 18;
if (age >= votingAge) {
  console.log(true);
} else {
  console.log("You are not of voting age.");
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let color = "red";
if (color === "red") {
  color = "I like red but how bout Gray?";
} else {
  console.log(`I don't like that color`);
}
console.log(color);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let convert = "1999";
Number(convert);

console.log(convert);

//Task d: Write a function to multiply a*b

function times(x, y) {
  if (x >= 0) {
    return x * y;
  }
}
console.log(times(17, 38));
/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

function humanDogYears(age) {
  if (age >= 0) {
    return age * 7;
  }
}
console.log(humanDogYears(10));

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

function dogFeed(weight, age) {
  if (age >= 1) {
    if (weight <= 5) {
      return weight * 0.05;
    } else if (weight <= 10) {
      return weight * 0.04;
    } else if (weight <= 15) {
      return weight * 0.03;
    } else {
      return weight * 0.02;
    }
  } else if (age <= 0.33) {
    return weight * 0.1;
  } else if (age <= 0.58) {
    return weight * 0.05;
  } else {
    weight * 0.04;
  }
}
console.log(dogFeed(15, 1));

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

function gamble(choice) {
  let opponent = Math.floor(Math.random() * 11);

  if (choice.length === 4 && opponent >= 5) {
    return `You have won with ${choice}, the computer chose scissors`;
  } else if (choice.length === 4 && opponent < 5) {
    return `You have lost with ${choice}, the computer chose paper`;
  } else if (choice.length === 5 && opponent >= 5) {
    return `You have won with ${choice}, the computer chose rock`;
  } else if (choice.length === 5 && opponent < 5) {
    return `You have lost with ${choice}, the computer chose scissors`;
  } else if (choice.length === 8 && opponent >= 5) {
    return `You have won with ${choice}, the computer chose paper`;
  } else if (choice.length === 8 && opponent < 5) {
    return `You have lost with ${choice}, the computer chose rock`;
  }
}
console.log(gamble("paper"));

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmToMiles(km) {
  if (km >= 1) {
    return km * 0.621371;
  }
}
console.log(kmToMiles(10));

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function feetToCm(feet) {
  if (feet >= 1) {
    return feet * 30.48;
  }
}
console.log(feetToCm(2));

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(n) {
  for (let i = n; i >= 1; i--) {
    console.log(
      `${i} bottles of soda on the wall, ${i} bottles of soda, take one down pass it around ${
        i - 1
      }bottles of soda on the wall`
    );
  }
}
annoyingSong(99);

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

switch (x) {
  case x >= 90:
    let grade = "A";
    return grade;

  case x >= 80:
    let grade = "B";
    return grade;

  case x >= 70:
    let grade = "C";
    return grade;

  case x >= 60:
    let grade = "D";
    return grade;

  case x >= 60:
    let grade = "F";
    return grade;
}
console.log(73);

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
// update your rock papers sissors code below to take a prompt from a user using the window object
