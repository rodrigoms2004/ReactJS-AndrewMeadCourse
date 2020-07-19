// babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch


// still works
var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar)


let nameLet = 'Jen';
nameLet = 'Julie'

// let nameLet = 'Julie'; not allowed
console.log('nameLet', nameLet);

const nameConst = 'Frank';
// const nameConst = 'Gunther'; not allowed
// nameConst = 'Gunther'; not allowed
console.log('nameConst', nameConst)

function getPatName() {
  const petName = 'Hal';
  return petName;
}

const petName = getPatName();
console.log(petName);

// Block scoping

const fullName = 'Jen Mead'
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName); 

