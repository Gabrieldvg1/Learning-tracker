'use strict';

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// Using arrow functions

const greet = greeting => {
  return name => {
    //one line arrow functions don't require the return statement
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Gabriel');
greeterHey('Brant');

greet('Hello')('Gabriel');
