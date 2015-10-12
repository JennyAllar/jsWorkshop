// More Function Exercises!

// 1. Without using Math.min(), write a function called minimum() that takes two numbers
//    and outputs the smallest one to the console.
function minimum(a, b) {
  if (a < b)
    return a;
  else
    return b;
}
console.log(minimum(3, 7));
// 2. Create a new function called minimum3() to find the smallest of three numbers
function minimum3(a, b, c) {
  var nums = [a, b, c];
  var min = a;
  for(i=0;i<3;i++){
    if(nums[i] < min){
      min = nums[i];
    }
  }
  return min;
}
console.log(minimum3(21, 14, 15));
// 3. Declare a function called sum() that takes an array of numbers as an argument adds them.
//    i.e. sum([1, 2, 3, 4]) should return 10.
function sum(array){
  total = 0;
  for(i=0;i<array.length;i++){
    total += array[i];
  }
  return total;
}
sum([1, 2, 3, 4]);
// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.
function multiply(array){
  total = 1;
  for(i=0;i<array.length;i++){
    total *= array[i];
  }
  return total;
}
multiply([1, 2, 3, 4]);
// 5. Write a function called filterSixPlus() that takes the following array and returns words
//    that are six characters or longer.
      var words = ["window", "table", "barstool", "glass", "charger", "outlet"];
function filterSixPlus(array){
  sixPlus = "";
  for(i=0;i<array.length;i++){
    if(array[i].length>=6){
      sixPlus += "" + array[i] + " ";
    }
  }
  return sixPlus;
}
filterSixPlus(words);
// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
var userInput = prompt("Please enter the degree.")
function getFarenheitFromC(userInput){
  userInput = parseFloat(userInput);
  userInput *= 1.8;
  userInput += 32;
  value = userInput.toFixed(0);
  console.log(value);
}

getFFromC(userInput);

// 7. Adding to the code in #6, prompt the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
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
// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()
function countBs(string) {
  var count = 0;
  for(i=0;i<string.length;i++){
    if(string.charAt(i) == "B")
      count += 1;
  }
  return count;
}

// 9. Write a function called countChars() that behaves like countBs(), except it takes a
//    second argument that indicates what character is to be counted.
function countChar(string, char) {
  var count = 0;
  for(i=0;i<string.length;i++){
    if(string.charAt(i) == char)
      count += 1;
  }
  return count;
}
// 10. Declare a function called ohZero() that replaces all of the o's in a string with 0's.
      var string = "Soon you will master functions!";
function ohZero(string){
  return string.replace(/[Oo]/g, "0");
}
// 11. Write function that translates a sentence into pig latin.
//     https://en.wikipedia.org/wiki/Pig_Latin
//     i.e. "look at my cool function" --> "ooklay atyay ymay oolcay unctionfay"
function pigLatinWord(word){
  if(word.match(/^[aeiouAEIOU]/)){
    return word + "yay";
  } else if(word.match(/^[yY]/)){
    return word.substring(1, word.length) + "yay";
  } else {
    return word.substring(1, word.length) + word.substring(0, 1) + "ay";
  }
}


function pigLatinSentence(sentence){
  var phrase = "";
  var words = sentence.split(" ");
  for(i=0;i<words.length;i++){
    phrase += pigLatinWord(words[i]) + " ";
  }
  return phrase;
}
console.log(pigLatinSentence("look at my cool function"));
// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.
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
// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was
//    too high or too low. This continues until the correct guess is entered.
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

// 14. http://games.usvsth3m.com/javascript-under-pressure/
//     Have fun with these! Get as far as you can and record your progress and time. We'll try this again in a few weeks!
