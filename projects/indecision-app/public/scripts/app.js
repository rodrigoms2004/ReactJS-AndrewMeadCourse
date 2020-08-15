'use strict';

console.log('App.js is running');
// $ live-server public
// $ babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch 


// JSX - Javascript XML

// const app = {
//   title: 'Indecision App',
//   subtitle: 'Put your life in the hands of a computer',
//   options: ['One', 'Two']
// }

// const template = (
//   <div>
//     <h1>{app.title}</h1> 
//     {(app.subtitle && <p>{app.subtitle}</p>)}
//     <p>{(app.options && app.options.length > 0 ? 'Here are your options' : 'No options')}</p>
//     <ol>
//       <li>Item one</li>
//       <li>Item two</li>
//     </ol>
//   </div>
// );

var count = 0;
var addOne = function addOne() {
  count++;
  // console.log('addOne', count)
  renderCounterApp();
};

var minusOne = function minusOne() {
  count--;
  renderCounterApp();
  // console.log('minusOne')
};

var reset = function reset() {
  count = 0;
  renderCounterApp();
  // console.log('reset')
};

// console.log(templateTwo)
var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'reset'
    )
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
