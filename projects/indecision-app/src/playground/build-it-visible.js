// $ live-server public
// babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch

// Visibility Toggle

// Show details / Hide details

// Hey. These are some details you can now see!

const app = {
  title: 'Visibility Toggle',
  visibility: false,
  details: 'Hey. These are some details you can now see!'
}

const toggleVisibility = () => {
  app.visibility =  !app.visibility
  render();
}

const appRoot = document.getElementById("app")

const render = () => {
  const jsx = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleVisibility}>
        {app.visibility ? 'Hide details' : 'Show details'}
      </button>
      {app.visibility && (
        <div>
          <p>{app.details}</p>
        </div>
      )}
    </div>
  )

  ReactDOM.render(jsx, appRoot)
}

render()