console.log('App.js is running');

// JSX - Javascript XML
// var template = <p>This is JSX from app.js!</p>;

// https://reactjs.org/docs/react-api.html#createelement
var template = React.createElement(
  'p', 
  { id: 'someid'}, 
  'This is JSX from app.js!');


var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot);