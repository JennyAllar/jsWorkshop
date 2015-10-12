// 1. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.

for (beer = 99; beer > 0; beer --) {
  remainder = beer - 1;
  if (beer != 1) {
    beercase = "bottles";
  } else {
    beercase = "bottle";
  }
  if (remainder != 1) {
    remaindercase = "bottles";
  } else {
    remaindercase = "bottle"
  }
  console.log(beer + " " + beercase + " of beer,");
  console.log("Take 1 down, pass it around,");
  if (remainder != 0) {
    console.log(remainder + " " + remaindercase + " of beer on the wall.");
  } else {
    console.log("No more bottles of beer on the wall.");
  }
}

// 2. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
var userInput = prompt("Please enter the degree.")
function getFarenheitFromC(userInput){
  userInput = parseFloat(userInput);
  userInput *= 1.8;
  userInput += 32;
  value = userInput.toFixed(0);
  console.log(value);
}

getFFromC(userInput);

// 3. Adding to the code in #3, prompt the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Alert them with an error if they do not follow the rules.

var userChoice = prompt("Please choose to convert Fahrenheit to Celsius by typing F to C or Celsius to Fahrenheit by typing C to F");
var userInput = prompt("Please enter the degree.")

function f2COrC2F(userChoice, userInput){
  if(userChoice === "C to F"){
    userInput = parseFloat(userInput);
    userInput *= 1.8;
    userInput += 32;
    value = userInput.toFixed(0);
    console.log(value);
  }
  if(userChoice === "F to C"){
    userInput = parseFloat(userInput);
    userInput -= 32;
    userInput /= 1.8;
    value = userInput.toFixed(0);
    console.log(value);
  }
}

f2COrC2F(userChoice, userInput)


// 4. Create a 'Guessing Game'. You can use a function, loop, or anything you'd like.
//    The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was too high or too low. This continues until the correct guess is entered.
//    When the correct guess is entered the user is given a success message with the correct number.

var guessString = prompt("Please guess a number 1 through 100");
var guessNum = parseInt(guessString);
var randomNum = Math.floor(Math.random() * 100);

while(guessNum != randomNum){
  if(guessNum < randomNum){
    guessNum = prompt("Nope! Too low! Please guess another number.")
  }
  else{
    guessNum = prompt("Nope! Too high! Please guess another number.")
  }
};

if(guessNum === randomNum){
  console.log("You're amazing! The number was " + randomNum);
};

// 5. Write a function called "countFs" that takes a string as its only argument and returns a number that indicates how many uppercase “F” characters are in the string.

var countFs = function(x) {
	var stringToEvaluate = x;
	// var letter = 0;
	var count = 0;
	for (i = 0; i < stringToEvaluate.length; i++) {
		if (stringToEvaluate.charAt(i) === "F"){
			count = count + 1;
		}
	}
	return count;
};

console.log(countFs("FlankyFeetFritatas"));

// 6. Using the code from #6, write a function called "countChar" that behaves like countFs, except it takes a second argument that indicates the character that is to be
// counted (rather than counting only uppercase “F” characters).

var countChar = function(string, letter) {
	var stringToEvaluate = string;
	var letterToEvaluate = letter;
	var count = 0;
	for (i = 0; i < stringToEvaluate.length; i++) {
		if (stringToEvaluate.charAt(i) === letterToEvaluate){
			count = count + 1;
		}
		else {
					// do nothing
		}
	}
	return count;
};

console.log(countChar("kcljaslkdjgklwelhksg", "k"));
