'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// $ live-server public
// babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch

var VisibilityToggle = function (_React$Component) {
  _inherits(VisibilityToggle, _React$Component);

  function VisibilityToggle(props) {
    _classCallCheck(this, VisibilityToggle);

    var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

    _this.handleToggleVisibility = _this.handleToggleVisibility.bind(_this);
    _this.state = {
      title: 'Visibility Toggle',
      visibility: false,
      details: 'Hey. These are some details you can now see!'
    };
    return _this;
  }

  _createClass(VisibilityToggle, [{
    key: 'handleToggleVisibility',
    value: function handleToggleVisibility() {
      this.setState(function (prevState) {
        return {
          visibility: !prevState.visibility
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          this.state.title
        ),
        React.createElement(
          'button',
          { onClick: this.handleToggleVisibility },
          this.state.visibility ? 'Hide details' : 'Show details'
        ),
        this.state.visibility && React.createElement(
          'div',
          null,
          React.createElement(
            'p',
            null,
            this.state.details
          )
        )
      );
    }
  }]);

  return VisibilityToggle;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToggle, null), document.getElementById('app'));

// Visibility Toggle

// Show details / Hide details

// Hey. These are some details you can now see!

// const app = {
//   title: 'Visibility Toggle',
//   visibility: false,
//   details: 'Hey. These are some details you can now see!'
// }

// const toggleVisibility = () => {
//   app.visibility =  !app.visibility
//   render();
// }

// const appRoot = document.getElementById("app")

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={toggleVisibility}>
//         {app.visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {app.visibility && (
//         <div>
//           <p>{app.details}</p>
//         </div>
//       )}
//     </div>
//   )

//   ReactDOM.render(jsx, appRoot)
// }

// render()
