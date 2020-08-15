'use strict';

// $ live-server public
// babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch

// Visibility Toggle

// Show details / Hide details

// Hey. These are some details you can now see!

var app = {
  title: 'Visibility Toggle',
  visibility: false,
  details: 'Hey. These are some details you can now see!'
};

var toggleVisibility = function toggleVisibility() {
  app.visibility = !app.visibility;
  render();
};

var appRoot = document.getElementById("app");

var render = function render() {
  var jsx = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { onClick: toggleVisibility },
      app.visibility ? 'Hide details' : 'Show details'
    ),
    app.visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        app.details
      )
    )
  );

  ReactDOM.render(jsx, appRoot);
};

render();
