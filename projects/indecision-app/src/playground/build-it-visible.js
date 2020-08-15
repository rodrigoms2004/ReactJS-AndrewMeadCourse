// $ live-server public
// babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch

// Visibility Toggle

// Show details / Hide details

// Hey. These are some details you can now see!

const app = {
  title: 'Visibility Toggle',
  isVisible: false,
  details: 'Hey. These are some details you can now see!'
}

const onDetails = () => {
  app.isVisible =  app.isVisible ? false : true;
  render();
}

const appRoot = document.getElementById("app")

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={onDetails}>{app.isVisible ? 'Hide details' : 'Show details'}</button>
      <p hidden={!app.isVisible}>{app.details}</p>
    </div>
  )

  ReactDOM.render(template, appRoot)
}

render()