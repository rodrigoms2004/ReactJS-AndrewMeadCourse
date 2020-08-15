// $ live-server public
// babel src/playground/counter-example.js --out-file=public/scripts/app.js --presets=env,react --watch

let count = 0;
const addOne = () => {
  count++
  // console.log('addOne', count)
  renderCounterApp()
};

const minusOne = () => {
  count--
  renderCounterApp()
  // console.log('minusOne')
};

const reset = () => {
  count = 0
  renderCounterApp()
  // console.log('reset')
};

// console.log(templateTwo)
const appRoot = document.getElementById('app')

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();