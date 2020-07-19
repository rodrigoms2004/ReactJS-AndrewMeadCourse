// babel src/playground/es6-arrow-function.js --out-file=public/scripts/app.js --presets=env,react --watch

function square(x) {
  return x * x;
}

// const squareArrow = (x) => {
//   return x * x;
// }

const squareArrow = x => x * x;

console.log(square(8))
console.log(squareArrow(16))

const getFirstName = fullName => fullName.split(' ')[0]

console.log(getFirstName('Mike Smith'))