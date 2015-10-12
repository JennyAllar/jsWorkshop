# Outline for Wednesday, September 23rd
- Review Object Exercise
- Conditions and Loops

##Review
[Monday's Material](https://github.com/calebatwood/Week2_Monday)..


##Decision making
There are often several places in a script where decisions are made to determine which lines of code should be run next. There are two components to a decision:
<br>
<br>
1: An expression is evaluated, which returns a value.
<br>
<br>
2: A conditional statement says what to do in a given situation.
<br>
<br>
'Comparison operators' and `logical operators` are used to determine the next path of your code.

##Evaluation of a Condition

###Comparison Operators
In any condition, there is usually one operator and two operands. The operands are placed on either side of the operator, and can be `values` or `variables`. Brackets are used to enclose the expression.
```javascript
var string = 'string';
var num = 3;
var num2 = '3';

(string.length > 4);
// false
(string.length >= 6);
// true
(num < (3+1));
// true
(num <= 4);
// true
(num == num2);
// true - checks that values are equal
(num != num2);
// false
(num === num2);
// false - checks that both data value and type are the same
(num !== num2);
// true
```
[Comparison Operator Docs](git@github.com:calebatwood/Week2_Wednesday.git)

###Logical Operators
Comparison operators usually return single values of `true` or `false`. Logical operators allow you to compare the results of multiple comparison operators.
```javascript
var string = 'string';
var num = 6
// && (logical and), both conditions must evaluate to true for the expression to return true
(string.length == num) && (num > 3);
// true
(string.length == num) && (string.length != 6);
// ??????

// || (logical or), at least one condition must evaluate to true to return true
(string.length > 7) || (num >= 8);
// false
(string.length < 6) || (num >= 2);
// ??????

// ! (logical not), takes a single Boolean value and inverts it
!(4 > 9);
// true
!(string.length == num);
// ??????
```
[Logical Operator Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Logical_operators)

###Conditional Statements

The `if` statement evaluates a condition. If the condition is `true`, any statements in the subsequent block of code will be executed.
```javascript
var score = 75;

if (score >= 50) {
  var message = 'Congrats! You passed!';
}

console.log(message);
// 'Congrats! You passed!'
```
So...what if your score was below 50?
```javascript
var score = 45;

if (score >= 50) {
  console.log('You passed!');
}

else {
  console.log('Not quite..');
}
// 'Not quite..'
```
Often times, there are more than one outcome when evaluating a condition. The `if..else` statement provides an alternate path if the condition isn't met. If it resolves to 'true', the first block of code will be executed. If the condition resolves to false, the second block of code is run instead.

###Switch Statements

`Switch` statements are used to execute code when a variable matches a particular value. A `switch` statement starts with a variable called the `switch value`. Each `case` indicates a possible value and the code that should be run if the the 'switch value' matches the `case value`.
<br>
<br>
If the 'switch value' does not match the value of any `case`, the `default` case will be executed. At the end of every `case` is a `break` keyword. This tells the JavaScript interpreter that the `switch` statement is complete, and to proceed with any subsequent code.
```javascript
var level = 2;

switch(level) {
  case 1:
    var message = 'You have arrived on floor 1';
    break;
  case 2:
    var message = 'You have arrived on floor 2';
    break;
  case 3:
    var message = 'You have arrived on floor 3';
    break;
  default:
    var message = 'That floor does not exist!';
    break;
}

console.log(message);
```

Switches are useful if you're looking for a particular value. Though you could use multiple if statements, they will all be evaluated even if a match is found, making your code slower than if you had used a `switch` instead.

[Switch Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

##Loops
![](https://media.giphy.com/media/C2gLFCJVEwXyU/giphy.gif)
Loops also check for conditions. If a `loop` returns `true`, the block of code will run. The condition will then be checked again and if it still returns `true`, the block of code will run again. The `loop` will repeat itself until the condition returns `false`.

###For Loops

The 'for' loop is the most common loop you'll see in JavaScript, and is used if you need the code to run a specific amount of times. The condition is usually a `counter` that specifies how many times the loop should run.

```javascript
for(i=0; i<10; i++) {
  console.log(i);
}
//What will the output be to the console??
```
Counting is great, but the `for` loop is most often used to iterate through the items of an array.
```javascript
var animals = ['duck', 'cow', 'goat', 'pig']; //array of animals

for(i=0; i<animals.length; i++) {      //the first position in an array is 0 so we set i equal to it
  var animal = animals[i];        //finds the animal at position i
  console.log(animal);            //logs the animal to the console
}

//What will the output to the console be??
```

###While Loops
The 'while' loop will execute a code statement as long as the condition it's testing evaluates to `true`.
```javascript
// Objective: Figure out how many times 'num' will need to be added to itself
// before it reaches 1000.

var counter = 0;
var num = 2;

while (num < 1000) {  // condition
  num += num;         // statement
  counter++;
}

console.log(counter); // number of summations required to reach 1000 beginning at 2.

```

###Infinite Loops
```javascript
counter = 5;
while (counter < 10) {
  console.log("Can't stop looping...");
}
```
