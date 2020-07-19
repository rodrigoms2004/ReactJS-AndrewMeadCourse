'use strict';

// babel src/playground/es6-arrow-function-2.js --out-file=public/scripts/app.js --presets=env,react --watch

// argument object - no longer bound with arrow function


var add = function add(a, b) {
  console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 1001));

var add2 = function add2(a, b) {
  // console.log(arguments)
  return a + b;
};
console.log(add2(55, 10, 1001));

// this keyword - no longer bound

var user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived: function printPlacesLived() {
    var that = this; // to use inside the forEach

    this.cities.forEach(function (city) {
      console.log(that.name + ' has lived in ' + city);
    });
  }
};
user.printPlacesLived();

console.log('\n\n');

var user2 = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    // same as printPlacesLived : function() {...}
    this.cities.forEach(function (city) {
      console.log(_this.name + ' has lived in ' + city);
    });
  }
};
user2.printPlacesLived();

// if is necessary to use 'this' use ES5 function, otherwise use ES6 arrow function

console.log('\n\n');

var user3 = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived: function printPlacesLived() {
    var _this2 = this;

    return this.cities.map(function (city) {
      return _this2.name + ' has lives in ' + city;
    });
  }
};
console.log(user3.printPlacesLived());

// Challenge area

var multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply: function multiply() {
    var _this3 = this;

    return this.numbers.map(function (number) {
      return number * _this3.multiplyBy;
    });
  }
};
console.log(multiplier.multiply());
