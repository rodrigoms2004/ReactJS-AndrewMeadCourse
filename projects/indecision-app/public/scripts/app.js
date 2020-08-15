'use strict';

// $ live-server public
// babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch

// Visibility Toggle

// Show details / Hide details

// Hey. These are some details you can now see!

var app = {
  title: 'Visibility Toggle',
  isVisible: false,
  details: 'Hey. These are some details you can now see!'
};

var onDetails = function onDetails() {
  app.isVisible = app.isVisible ? false : true;
  render();
};

var appRoot = document.getElementById("app");

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { onClick: onDetails },
      app.isVisible ? 'Hide details' : 'Show details'
    ),
    React.createElement(
      'p',
      { hidden: !app.isVisible },
      app.details
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
