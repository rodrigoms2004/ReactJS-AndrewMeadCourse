// babel src/playground/es6-arrow-function-2.js --out-file=public/scripts/app.js --presets=env,react --watch

// argument object - no longer bound with arrow function


const add = function(a, b) {
  console.log(arguments)
  return a + b;
};
console.log(add(55, 1, 1001))


const add2 = (a, b) => {
  // console.log(arguments)
  return a + b;
};
console.log(add2(55, 10, 1001))



// this keyword - no longer bound

const user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived: function () {
    const that = this;  // to use inside the forEach

    this.cities.forEach(function(city) {
      console.log(that.name + ' has lived in ' + city)
    });
  }
};
user.printPlacesLived();

console.log('\n\n')

const user2 = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived() { // same as printPlacesLived : function() {...}
    this.cities.forEach(city => {
      console.log(this.name + ' has lived in ' + city)
    });
  }
};
user2.printPlacesLived();

// if is necessary to use 'this' use ES5 function, otherwise use ES6 arrow function

console.log('\n\n')

const user3 = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived() {
    return this.cities.map(city => this.name + ' has lives in ' + city);
  }
};
console.log(user3.printPlacesLived());

// Challenge area

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy)
  }
};
console.log(multiplier.multiply());