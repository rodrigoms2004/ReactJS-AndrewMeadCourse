console.log('utils.js is running')

export const square = (x) => x * x

export const add = (a, b) => a + b

const substract = (a, b) => a - b

// export { square, add, substract as default }

// export default substract
export default (a, b) => a - b

// export - default export - named exports