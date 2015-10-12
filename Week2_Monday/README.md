#Outline for Monday 9/21
- Review Wednesday's Exercise
- Objects

##Review
[Wednesday's Material](https://github.com/calebatwood/Week1_Wednesday)

## Objects

[The DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Similar to an `Array`, an `Object` is a set of `key`/`value` pairs, with each key having to be unique. Variables inside an object are known as `properties`, while functions are known as 'methods'. The value of a property can be a string, number, boolean, array or another object. The value of a method is always a function.

This might sound confusing.<br>
![](http://www.reactiongifs.com/r/obs.gif)
![](http://i.imgur.com/MKsfM.gif)

You might be thinking "nope."<br>
![](http://blogfiles.wfmu.org/KF/2011/03/30/gif_oprah_no.gif)

But it will all make sense once you get started!<br>
![](http://1.bp.blogspot.com/-D0AZEIIv38c/UnuJutpY0XI/AAAAAAAAOtg/_-jUdt52FmE/s1600/oprah-crying.gif)
![](http://i.imgur.com/yzkx5jx.gif)


##Let's model an Object!!
Group modeling of object.

###Creating an Object using Literal Notation
```javascript
var hotel = {
  name: 'Hilton',
  rooms: 120,
  booked: 93,
  pool: true,
  roomTypes: ['twin', 'full', 'queen', 'king'],
  //we will cover functions in greater depth next week
  availability: function() {
    return this.rooms - this.booked;
  }
};
```

###Creating an Object using Constructor Notation
```javascript
var hotel = new Object();
//properties
hotel.name = 'Best Western';
hotel.rooms = 65;
hotel.booked = 34;
//method
hotel.availability = function() {
  return this.rooms - this.booked;
};

```

###Accessing an Object
The properties and methods of an object can be accessed using `dot notation`. Properties can also be accessed using square brackets.
```javascript

var hotelName = hotel.name;
// Hilton
var availableRooms = hotel.availability;
// 27
var hotelName = hotel['name'];
// Hilton

```

###Updating and adding to an Object
To add to or update the properties of an object, dot notation or square brackets can be used.
```javascript
hotel.pool = false; //sets the pool property to false

hotel.lounge = true; //adds a new lounge property with a value of true

hotel;
// {name: 'Hilton', rooms: 120, booked: 93, pool: false, lounge: true, availability: function(){....};}
```

###Deleting a property
Use the 'delete' keyword followed by the object and property names. To clear the value of a property without deleting it, set its value to a blank string `''`
```javascript
delete hotel.pool; //deletes the pool property from the hotel object

hotel.name = ''; //clears the value
```

##In Class Exercise
Creating and manipulating objects.
