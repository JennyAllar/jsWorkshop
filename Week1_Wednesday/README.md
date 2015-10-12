#Outline for Wednesday 9/16
- Recap yesterday, go over homework
- Introduce Arrays
- In Class Array Exercise (pairs)

##Homework
```javascript
//1. Log your name to the console (as a string).

//2. Declare a variable called name, log it to the console.

//3. Declare two variables with number values. Add, subtract, multiply and divide them.

//4. Declare two variables with string values. Create a third variable that concatenates them.

//5. Add, subtract, multiply and divide the strings '5' and '3'. Observe and explain the results.

//6. Create a prompt that asks a user to pick a number. Double the answer.

//7. Create a custom alert.

//8. Declare three variables called length, width and height. Calculate area and volume.

//9. Ask for a user's name, age and city. In a single command display/log the sentence:
// "My name is...I'm....years old, and I live in....."

//10. Create an alert that uses the response from a prompt.
```
##Carryover from Monday
Strings can be added just like numbers, this is called `concatenation`.
![](http://www.reactiongifs.com/r/com.gif)
```javascript
var addWords = 'Look!' + ' I am a concatenated string!';
console.log(addWords);

//Look! I am a concatenated string!


//Concatenation works with variables as well, provided they are strings.
var person = 'David';
var greetPerson = 'Hello ' + person + '!';
console.log(greetPerson);

// Hello David!
```
When an operator is applied to the “wrong” type of value, JavaScript will quietly convert that value to the type it wants, using a set of rules that often aren’t what you want or expect. This is called `type coercion`

```javascript
console.log(8 * null)
//  0
console.log("5" - 1)
//  4
console.log("5" + 1)
//  51
console.log("five" * 2)
//  NaN
console.log(false == 0)
//  true

```
###document.write() vs console.log()
```javascript
document.write('Hello World');
// appends string to body element of page
console.log('Hello World');
// displays string in console
```
What if you want to write a certain element to the page?
```javascript
document.write("<h2>I'm and h2 element!</h2>");

var name = 'Caleb';

document.write("<p>Hello, my name is " + name + " and I'm learning JS!</p>");
```

###prompt() and alert()
```javascript
prompt('What is your name?');
// opens modal for user to type in
var name = prompt('What is your name?');
// sets name variable equal to the typed response
alert('This is a test!');
// opens modal with message 'This is a test!'
```


##Arrays

[Array Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

An `Array` is a list-like object that is made up of a collection of `values` mapped to corresponding integer `keys`. Values can be added or removed through various `methods` performed on the array. Arrays are zero-indexed, meaning the first position has a `key` of 0, and the last position has a key of the Array's length - 1. Arrays will always preserve ordering, which means they will remember the order in which you added or defined things. Not everything in JavaScript preserves ordering so remember this special property of Arrays!

```javascript
var cars = ['Volkwagen', 'Audi', 'Mercedes', 'BMW'];

console.log(cars.length);
// 4
```
###Indexing into an Array
To access an individual item in an Array, we index into it by calling the Array variable name, proceeded by [i], where i is the index of the `key` whose `value` we're seeking.

```javascript
var zoo = ['zebra', 'rhino', 'penguin', 'monkey'];

zoo[2];
// 'penguin'
```
###Add item(s)to the end
```javascript
var zoo = ['zebra', 'rhino', 'penguin', 'monkey'];

zoo.push('panda');
// 5

zoo;
// ['zebra', 'rhino', 'penguin', 'monkey', 'panda']
```
###Remove item from the end
```javascript
var zoo = ['zebra', 'rhino', 'penguin', 'monkey', 'panda'];

var freeAnimal = zoo.pop();
// 'panda'

zoo;
// ['zebra', 'rhino', 'penguin', 'monkey']
```
###Add item(s) to the beginning
```javascript
var zoo = ['zebra', 'rhino', 'penguin', 'monkey'];

zoo.unshift('emu');
// 5

zoo;
// ['emu', 'zebra', 'rhino', 'penguin', 'monkey']
```
###Remove item from the beginning
```javascript
var zoo = ['emu', 'zebra', 'rhino', 'penguin', 'monkey'];

var freeAnimal = zoo.shift();
// 'emu'

zoo;
// ['zebra', 'rhino', 'penguin', 'monkey']
```
###Overwrite item at specific index
```javascript
var meals = ['breakfast', 'lunch', 'dinner'];

meals[1] = 'brunch';

meals;
// ['breakfast', 'brunch', 'dinner'];
```
###Copy an Array
```javascript
var nums = [23, 18, 9, 2];

var numCopy = nums.slice();

numCopy;
// [23, 18, 9, 2]

```
###Modifying an Array with splice()
```javascript
var nums = [23, 18, 9, 2];

nums.splice(1, 0, 99, 33); // 1 is the position we'll place new items. 0 is how many items we're removing. 99, 33 are the items we're adding
// []  -- removed items

nums;
//[23, 99, 33, 9, 2]

var pets = ['dog', 'cat', 'turtle', 'bird'];

pets.splice(0, 3);
//['dog', 'cat', 'turtle']

pets;
// ['bird']

//splice an Array into an Array

var birds = ['hawk', 'eagle', 'falcon'];

birds.splice(2, 0, ['duck', 'duck', 'goose']);
//[]

birds;
// ['hawk', 'eagle', ['duck', 'duck', 'goose'], 'falcon']
```
##Array Exercise
Open index.html and main.js follow the instructions in the comments.
