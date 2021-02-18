'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Gabriel Villarroel');
lufthansa.book(635, 'Brant de Roos');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book; // This copies the 'book' method of the lufthansa object and creates a new function

// book(23, 'Sarah Williams'); This would return an error because in sctrict mode the 'this' keyword is set to 'undefined'
// when used in regular functions like book(23, 'Sarah Williams');

// So how do we tell JS what the 'this' keyword should point to?

// We use the call() or apply() methods to specify where the 'this' keyword should point to

book.call(eurowings, 23, 'Jordi Grau');
console.log(eurowings);

book.call(lufthansa, 673, 'Ramón Grau');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Maria Villarroel');
console.log(swiss);
