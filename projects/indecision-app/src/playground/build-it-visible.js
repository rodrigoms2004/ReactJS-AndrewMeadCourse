// $ live-server public
// babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.state = {
      title: 'Visibility Toggle',
      visibility: false,
      details: 'Hey. These are some details you can now see!'
    }
  }

  handleToggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      }
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>{this.state.details}</p>
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))


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