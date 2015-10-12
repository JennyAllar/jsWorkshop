# Outline for Monday, October 5th
- Review Wednesday's Exercises
- Intro to jQuery

## Review

[Wednesday's Material](https://github.com/calebatwood/Week3_Wednesday)

## jQuery
jQuery is a JavaScript library

The jQuery library contains the following features:

- HTML/DOM manipulation
- CSS manipulation
- HTML event methods
- Effects and animations
- AJAX
- Utilities

## jQuery Syntax

The jQuery syntax is tailor made for selecting HTML elements and performing some action on the element(s).

Basic syntax is:
```javascript
 $(selector).action();
```
- A $ sign to define/access jQuery
- A (selector) to "query (or find)" HTML elements
- A jQuery action() to be performed on the element(s)

jQuery uses CSS syntax to select elements.
```javascript
$("#idElement").action();

$(".classElement").action();

$("table").action();
```

## The Document Ready Event
All jQuery methods in the examples are inside a document ready event:
```javascript
$(document).ready(function(){
   // jQuery methods go here...
});
```
This is to prevent any jQuery code from running before the document is finished loading (is ready).

Here are some examples of actions that can fail if methods are run before the document is fully loaded:

- Trying to hide an element that is not created yet
- Trying to get the size of an image that is not loaded yet

## jQuery Selectors

jQuery selectors allow you to select and manipulate HTML element(s).

jQuery selectors are used to "find" (or select) HTML elements based on their id, classes, types, attributes, values of attributes and much more. It's based on the existing CSS Selectors, and in addition, it has some own custom selectors.

All selectors in jQuery start with the dollar sign and parentheses:

```javascript
 $("tbody").action();
 /// the tbody element will have subsequent actions performed on it
```
### The 'Click' Event
When a user clicks on a button, all <p> elements will have the text "You clicked the button":

```javascript
$(document).ready(function(){
    $("button").click(function(){
        $("p").text("You clicked the button");
    });
});

[Mouse Enter](https://api.jquery.com/mouseenter/)

[Mouse Leave](https://api.jquery.com/mouseleave/)

```
### Getting and Setting Element Information
```javascript
<p value="info">Useful information</p>

$("p").html()
// <p value="info">Useful information</p>
$("p").html("<p><strong>Bold, useful information</strong></p>");
// sets the current <p> html to <p><strong>Bold, useful information</strong></p>
$("p").text();
// "Useful information"
$("p").text("Helpful information");
// sets the current <p> text to "Helpful information"
$("p").val();
// "info"
$("p").val("useful");
// sets the current <p> value to "useful"
```

### Placing elements in the DOM
The most common ways to move elements around the DOM are:<br>

1. Place selected element relative to another element using `.appendTo`

2. Place an element relative to the selected element using `.append`

```javascript
<div id="main">
  <h2>Append something to me</h2>
</div>

$("<h3>I am clingy</h3>").appendTo("h2");
// or
$("h2").append($("<h3>I am clingy</h3>"));

```

### Cloning elements

```javascript
<div id="main">
  <h2>Clone and attach me!</h2>
</div>

$("h2").clone().appendTo("h2");
// this copies the h2 element and attaches the copy to the original
```

### Removing elements

```javascript
<div id="main">
  <h2>Eliminate me!</h2>
</div>

$("h2").remove()
// this removes the h2 element from the page
```

### Updating CSS
Use the `.css()` method to update CSS attributes of an element.
```javascript
<div id="main">
  <h2>Eliminate me!</h2>
</div>

$("h2").css("color", "red");
// changes h2 color to red
```
