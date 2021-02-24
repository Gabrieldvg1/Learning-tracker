//'use strict';

let myObject = {
  name: 'Bruce Object',
  me: function () {
    this.name = 'Joker Object';
    console.log(this);

    let setName = function (name) {
      this.name = name;
      // This is a regular function expression, so the 'this' keyword will point to the global object or will be
      //undefined if we're working on strict mode.

      //To fix this you can either create a 'let self = this' variable outside the EC of the setName function,
      //or convert the sentName function into an arrow function that doesn't have its own 'this' keyword.
    };
    setName('Robin Object');
    console.log(this);
  },
};

myObject.me();
