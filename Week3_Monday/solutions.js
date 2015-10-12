// JavaScript Function Exercises

// 1. Define a function called "divideByTwo". It should accept one parameter called "number".
//    The function should divide the number by two and output the answer.
var divideByTwo = function(number) {
  var halved = number / 2;
  console.log(halved);
}
divideByTwo(6);
// 2. Define a function called "greeting". It should accept two parameters, which will be names.
//    The function should output the a greeting to both people.
var greeting = function(name1, name2) {
  console.log("Hello, "+name1+"! Hey there, "+name2+"!");
};
greeting("Bill", "Ted");
// 3. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month, but the price keeps changing.
//    Write a function that takes the price per unit and calculates the total for you each month.
var total = function(price) {
  return price * 6;
};
total(3.25);
// 4. Write a function that accepts the following array and separates the people into two teams.
//    No names next to eachother in the array should be on the same team.
teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]
var team1 = [];
var team2 = [];

var separate = function(teammates) {
  for(i=0;i<teammates.length;i++) {
    if(i%2 === 0){
      team1.push(teammates[i]);
    }
    else {
      team2.push(teammates[i]);
    }
  }
  console.log(team1, team2);
}
separate(teammates);
// 5. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.
//    Call the function inside of a conditional statement that prints one statement if the value is even or another statement if the value is odd.
//    In pseudocode:
//                  defining my function here(parameter)
//                      returns a value that divides that parameter by 4
//
//                  if (calling the function with parameter divided by 2 is even)
//                      print out a statement saying the number is even
//                  else
//                      print out a statement saying the number is odd
var quarter = function(number) {
  return number / 4;
};
if(quarter %2 === 0) {
  console.log("Even");
}
else if(quarter %1 !== 0){
  console.log("Float");
}
else {
  console.log("Odd");
}
quarter(13);
// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.
var area = function(length, width) {
  return length * width;
};
var perimeter = function(length, width) {
  return (length * 2) + (width * 2);
};
console.log("Area: "+area(3, 2));
console.log("Perimeter: "+perimeter(3, 2));
// 7. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, print a statement to the console about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.
var sleepings = function(hours) {
  if(hours > 8){
    console.log("Congrats, you sleep enough!");
  }
  else {
    console.log("Get some more rest.");
  }
};
sleepings(9);
// 8. Prompt a user to enter a six digit number. Write a function that reverses the number.
//    (Hint, you will have to turn the integer into a string before you can reverse it.)
var userNum = prompt("Enter a six digit number");

var reverseNum = function(userNum) {
  var convert = userNum.toString().split("").reverse().join("");
  console.log(convert);
}

reverseNum(userNum);
// 9. Within the fuction you wrote in #7, write a conditional statement that checks to ensure the user entered a six digit integer.
//    If they have not entered a six digit integer, give them a message about being a failure.
var userNum = prompt("Enter a six digit number");
var reverseNum = function(userNum) {
  if(userNum.length === 6) {
    var convert = userNum.toString().split("").reverse().join("");
    console.log(convert);
  }
  else {
    alert("Practice your counting skills");
  }
};
reverseNum(userNum);
// 10. You've finally gotten around to counting the change in your piggy bank. Write a function that accepts four parameters (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
var looseChange = function(quarters, dimes, nickels, pennies) {
  var quarterSum = quarters * .25;
  var dimeSum = dimes * .1;
  var nickelSum = nickels * .05;
  var pennySum = pennies * .01;
  return "$" + parseFloat(quarterSum + dimeSum + nickelSum + pennySum).toFixed(2) + "";
}
looseChange(4, 3, 7, 2);
// "$1.67"

// 11. Develop a function that determines a person's age by prompting them for their birth year.
var birth = prompt("What year were you born?");

var determineAge = function(birth) {
  var age = 2015 - birth;
  return "You are approximately "+ age +" years old";
}
determineAge(birth);
// 12. Write a function that takes a year and reports whether or not it is a leap year.
//     Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is.  1900 is not a leapyear, but 2000 is
var leapYear = function(year) {
  if(year % 4 === 0){
    if(year % 100 !== 0 || year % 400 === 0) {
      console.log("Leap Year");
    }
    else {
      console.log("Not a leap year");
    }
  }
  else {
    console.log("Not a leap year");
  }
}
leapYear(1997);
// 13. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number
//        If the phone number is more than 11 digits assume that it is a bad number
var phoneNumber = 18025226128;

var cleanPhone = function(phone){
  phone = phone.toString();
  if(11<phone.length<10){
    console.log("Bad Number");
  }
  else if(phone.length === 11){
    if(phone.charAt(0) == 1){
      var clean = phone.substring(1);
      console.log(clean);
    }
    else {
      console.log("Bad Number");
    }
  }
  else {
    console.log(phone);
  }
}
cleanPhone(phoneNumber);

// 14. Create a function that determines whether a parameter is a number or not (Hint: google "isNan")
//     Iterate over the elements in the following array to determine if each is a number.
arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]

var isNumber = function(array) {
  for(i=0;i<array.length;i++) {
    if(isNaN(array[i])) {
      console.log("Not a number");
    }
    else {
      console.log(array[i]+" is a number!");
    }
  }
}

isNumber(arrayOfAllTheThings);
// 15. Create a die rolling function that accepts two parameters (the two six-sided dice) and outputs an array of the two values rolled.
dieOne = [1, 2, 3, 4, 5, 6];
dieTwo = [1, 2, 3, 4, 5, 6];

var rollDice = function(dieOne, dieTwo) {
  var roll = [];
  dieOne = dieOne[Math.floor(Math.random() * dieOne.length)];
  dieTwo = dieTwo[Math.floor(Math.random() * dieTwo.length)];
  roll.push(dieOne, dieTwo);
  console.log("Your roll: "+roll);
  return roll;
}

// rollDice(dieOne, dieTwo);

// 16. Create another fuction called "whichSide". It will accept the array from above as it's only parameter.
//     This function will mimic a Monopoly board. Start playerOne at the Go space (0) and add the two values from your die array to determine
//     how many spaces the player will move. Log to the console which side of the board the player is on.
//     Hint: each side has 11 spaces. You can call the sides of the board: north, east, south, west or top, right, bottom, left.
var roll = rollDice(dieOne, dieTwo);
var playerOne = 0;

var whichSide = function(roll) {
  var move = roll[0] + roll[1];

    playerOne += move;

    if(playerOne<10){
      console.log(playerOne);
      console.log("south");
    }
    else if(10<playerOne<20){
      console.log(playerOne);
      console.log("west");
    }

    else if(20<playerOne){
      console.log(playerOne);
      console.log("north");
    }
    else if(30<playerOne<39){
      console.log("east");
    }
    else if(39<playerOne){
      console.log("You made it around the board!");
    }
    else if(playerOne === 10 || playerOne === 20 || playerOne === 30){
      console.log("corner");
    }


}
whichSide(roll);

whichSide(rollDice(dieOne, dieTwo));
whichSide(rollDice(dieOne, dieTwo));
whichSide(rollDice(dieOne, dieTwo));


// 17. Using the game above, use the same function(s) and add additional code to determine if the player is on a corner spot.
//     Log to the console which corner the player is located.
