
##Outline for Monday 9/14
- Introductions
- What is JavaScript, and why should I learn it?
- Setting up our environment (GitHub, terminal/command line, Atom, Chrome console)
- Pulling down our first repository
- Basic JS syntax

##Introductions/Housekeeping
```javascript
var firstName = 'Caleb';
var wantToLearn = 'what you want to achieve with JS';

var aboutMe = function() {
  return 'My name is ' + firstName + ', and I want to learn ' + wantToLearn + '!';
};
```
- Name. Why you're taking the JS workshop. What you want to learn. Fun fact.
- Everybody on Slack

##What is JavaScript?
```html
<script type="text/javascript" src="main.js"></script>
```
JavaScript was introduced in 1995 as a way to add programs to the Netscape Navigator web browser. It has since been adopted by all other major browsers, and is the basis for modern web applications. It provides an interactive experience for the user, without a page reload for every action, and is what makes apps like Gmail, Google Maps, and Facebook possible.
<br>
<br>
JavaScript IS NOT Java! When JavaScript was first introduced, Java was being heavily marketed and adopted, and JavaScript sought to ride on the success. Now we are stuck with the name.
<br>
<br>
The goal for this course is to establish a solid foundation of how the language is structured, learn how to use JavaScript to create an interactive DOM, integrate external sites and data, create editable databases, and successfully deploy an application (or two).

##Environment setup
- Command line intro
- Version control, introduce GitHub
- Create GitHub account
- Text editors
- Chrome, introduce console

##Command line
- Open terminal
- Terminal vs GUI
- Create workshop directory

```javascript
$ pwd           //present working directory
$ ls            //list directory
$ cd            //change directory
$ cd jsClass    //switch to the jsClass directory
$ mkdir         //make new directory
$ rmdir         //remove directory
$ touch         //make new file
$ mv            //move (rename) a file $ mv oldName newName
$ rm            //remove file
```

- [Command line resource](http://cli.learncodethehardway.org/book/)

##Version control
`Version Control` is system system that records changes to a file or set of files over time so that you can recall specific versions later.
  - Reverting to previous states
  - Team Coordination
  - Due Diligence (open source credit)
<br>
<br>
[More on Version Control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
<br>[Git Version Control Basics](http://git-scm.com/book/en/v2/Getting-Started-Git-Basics)

##Setting up Git
Create your [GitHub](https://github.com) account !!

####Mac Users
- [Follow these instructions](https://help.github.com/articles/set-up-git/#platform-mac)
- Generate your SSH key:  https://help.github.com/articles/generating-ssh-keys/

####Windows Users
- [Download Git Here](https://git-for-windows.github.io/)<br>
- Install downloaded file
- Open Git Bash
- Generate your SSH key: https://help.github.com/articles/generating-ssh-keys/#platform-windows *(Under Step 3, follow both steps to ensure ssh-agent is enabled)*

##Workflow
<br>
![Repo Flow](/images/repoFlow.png)
<br>
<br>
  Keys to a good commit message:
  - Limit to 50 characters
  - Capitalize first word
  - Do not end with a period
  - Concisely explain what change you made
<br>
<br>
[Commits from last night](http://www.commitlogsfromlastnight.com/)

##Creating Repositories
- Create your first repository (repo): [Documentation](https://help.github.com/articles/create-a-repo/)
<br>
<br>
Basic Git Commands
```
$ git add .
$ git commit -m 'My first GitHub commit'
$ git push
```

- Add and commit your changes to your ReadMe.
- Push your changes to GitHub !
<br>
[More Git Commands](https://confluence.atlassian.com/stash/basic-git-commands-278071958.html)

##Cloning Repositories
Clone this repository to your class directory!
<br>
```
$ git clone git@github.com:calebatwood/Week1_Monday.git
```

#Intro to JavaScript
##The Console
- In Google Chrome: `cmd + option + j`

##Syntax
Primitive Data Types: `numbers`, `strings`, `boolean`, `undefined`, `null`
```javascript
var number = 9;
var float = 3.2;
NaN   //not a number, ie 0/0
var string = "truck";
var longerString = "That\'s my dog!"
var boolean = true; //or false. Boolean values distinguish between possibilities
undefined   //no meaningful value
null    //no meaningful value
```
Basic math operators
```javascript

console.log(7 - 3);
// 4
console.log(3 + 6);
// 9
console.log(5 * 2);
// 10
console.log(3/2);
// 1.5
console.log(3 == (4-1));
// true
console.log(5 != (2+3));
// false
console.log(0.2 + 0.4);
// ????????

//Concatentation (adding strings)

var person = 'David';
var greetPerson = 'Hello ' + person + '!'
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
##document.write() vs console.log()
```javascript
document.write('Hello World');
// appends string to body element of page
console.log('Hello World');
// displays string in console
```
When would you want to use console.log? Document write?

##prompt() and alert()
```javascript
prompt('What is your name?');
// opens modal for user to type in
var name = prompt('What is your name?');
// sets name variable equal to the typed response
alert('This is a test!');
// opens modal with message 'This is a test!'
```
##Attached exercises
Follow the instructions in main.js for practice logging and writing to the page. When you are done, please push your work to GitHub.
