# The Complete React Developer Course (with Hooks and Redux)

JSX - Javascript XML


### Tools


#### Yarn

```
npm install -g yarn
```

#### Live server

Install using

```
yarn global add live-server

or

npm install -g live-server
```

Run it using, where there is a file *index.html* 

```
live-server public
```

### BABEL 

https://babeljs.io/

```
yarn global add babel-cli@6.24.1

or 

npm i -g  babel-cli@6.24.1
```

```
$ babel --help
Usage: babel [options] <files ...>

Options:
  -f, --filename [filename]            filename to use when reading from stdin - this will be used in source-maps, errors etc
  --retain-lines                       retain line numbers - will result in really ugly code
  --no-highlight-code                  enable/disable ANSI syntax highlighting of code frames (on by default)
  --presets [list]                     
  --plugins [list]                     
  --ignore [list]                      list of glob paths to **not** compile
  --only [list]                        list of glob paths to **only** compile
  --no-comments                        write comments to generated output (true by default)
  --compact [booleanString]            do not include superfluous whitespace characters and line terminators [true|false|auto]
  --minified                           save as much bytes when printing [true|false]
  -s, --source-maps [booleanString]    [true|false|inline]
  --source-map-target [string]         set `file` on returned source map
  --source-file-name [string]          set `sources[0]` on returned source map
  --source-root [filename]             the root from which all sources are relative
  --no-babelrc                         Whether or not to look up .babelrc and .babelignore files
  --source-type [string]               
  --auxiliary-comment-before [string]  print a comment before any injected non-user code
  --auxiliary-comment-after [string]   print a comment after any injected non-user code
  --module-root [filename]             optional prefix for the AMD module formatter that will be prepend to the filename on module definitions
  -M, --module-ids                     insert an explicit id for modules
  --module-id [string]                 specify a custom name for module ids
  --parser-opts [string]               Options to pass into the parser, or to change parsers (parserOpts.parser)
  --generator-opts [string]            Options to pass into the generator, or to change generators (generatorOpts.generator)
  -x, --extensions [extensions]        List of extensions to compile when a directory has been input [.es6,.js,.es,.jsx]
  -w, --watch                          Recompile files on changes
  --skip-initial-build                 Do not compile files before watching
  -o, --out-file [out]                 Compile all input files into a single file
  -d, --out-dir [out]                  Compile an input directory of modules into an output directory
  -D, --copy-files                     When compiling a directory copy over non-compilable files
  -q, --quiet                          Don't log anything
  -V, --version                        output the version number
  -h, --help                           output usage information
```

### Babel presets 

https://babeljs.io/docs/en/babel-preset-env
https://babeljs.io/docs/en/babel-preset-react

```
yarn init 

yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
```


Compile JSX with BABEL
```
$ babel src/app.js --out-file=public/scripts/app.js --presets=env,react


// runing in background
$ babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch 
```

## Installing React from script tag

## Events and Attributes


### DOM ELEMENTS


https://reactjs.org/docs/dom-elements.html


in JSX there instead use 'class' use 'className' attribute

Original HTML
```
<button id="my-id" class="button">+1</button>
```

JSX
```
<button id="my-id" className="button">+1</button>
```


### Forms and inputs


http://indecision.mead.io/

https://reactjs.org/docs/events.html


## PART 1 - Section 4 React Components

### Props vs State

<MyComponent />

#### Props

* An object
* Can be used when rendering
* Changes (from above) cause re-renders
* Comes from above
* Can't be changed by component itself

#### State

* An object
* Can be used when rendering
* Changes cause re-renders
* Defined in component itself
* Can be changed by component itself

## Section 5

### Life cycle 

https://reactjs.org/docs/react-component.html

```
  componentDidMount() {
    console.log('Fetching data')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('saving data')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
    // To test, put it in Chrome console
    // ReactDOM.render(React.createElement('p'), document.getElementById('app'));
  }
```

## Section 6 - Webpack

* Grab the add function from the add.js file in the utils folder
* Grab React from react npm module


```
public/
  index.html
  bundle.js

src/
  app.js
  utils.js

node_modules/
  react.js
  react-dom.js
```


### Removing Babel and Live-server global

```
npm -g remove babel-cli live-server

or

npm -g uninstall babel-cli live-server

or

yarn global babel-cli live-server
```

### Using Babel and Live server locally

```
yarn add live-server babel-cli@6.24.1
```

In file *projects/indecision-app/package.json*

```
{
  "name": "indecision-app",
...
  "scripts": {
    "serve": "live-server public/",
    "build-babel": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch"
  },
  "dependencies": {
...
```


Run scripts

```
yarn run serve

yarn run build-babel
```

### Install Webpack

https://webpack.js.org/

```
yarn add webpack@3.1.0
```

https://webpack.js.org/configuration/

https://nodejs.org/api/path.html#path_path_join_paths


file *projects/indecision-app/webpack.config.js*

```
const path = require('path')

module.exports = {
  entry: './src/app.js',

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
}
```

Delete *projects/indecision-app/public/scripts/app.js*

In file *projects/indecision-app/package.json*

```
{
  "name": "indecision-app",
...
  "scripts": {
    "serve": "live-server public/",
    "build-babel": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch",
    "build": "webpack --watch"
  },
  "dependencies": {
...
```

Run it
```
yarn run build
```

In file *projects/indecision-app/public/index.html*
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Indecision App</title>
  </head>
  
  <body>
    <div id="app"></div>
    <script src="/bundle.js"></script>
  </body>

</html> 
```

### Install React

```
yarn add react@16.0.0 react-dom@16.0.0
```

### Setting up Babel with Webpack

```
yarn add babel-core@6.25.0 babel-loader@7.1.1
```

In file *projects/indecision-app/webpack.config.js*

```
const path = require('path') // https://nodejs.org/api/path.html#path_path_join_paths


module.exports = {
  entry: './src/app.js',

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
```

Create file for babel *projects/indecision-app/.babelrc*
```
{
  "presets": [
    "env",
    "react"
  ]
}
```

### Source Maps with Webpack

https://webpack.js.org/configuration/devtool/

In file *projects/indecision-app/webpack.config.js*

```
const path = require('path') // https://nodejs.org/api/path.html#path_path_join_paths


module.exports = {
...
  module: {
...
  },
  devtool: 'cheap-module-source-map'
}
```

restart webpack


### Webpack Dev Server

https://webpack.js.org/configuration/dev-server/


Install it
```
yarn add webpack-dev-server@2.5.1
```

In file *projects/indecision-app/webpack.config.js*
```
const path = require('path') // https://nodejs.org/api/path.html#path_path_join_paths


module.exports = {
  entry: './src/app.js',

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
}
```
You can remove bundle.js, run *yarn run build* for production

### ES6 class properties

https://babeljs.io/docs/en/plugins

Use arrow functions to avoid to bind, remove constructor


Install it
```
yarn add babel-plugin-transform-class-properties
```

 Add the preset in *projects/indecision-app/.babelrc*
```
{
  "presets": [
    "env",
    "react"
  ],
  "plugins": [
    "transform-class-properties"
  ]
}
```

#### Old syntax

```
class OldSyntax {
  constructor() {
    this.name = 'Mike'
    this.getGreeting = this.getGreeting.bind(this)
  }
  getGreeting() {
    return `Hi. My name is ${this.name}.`
  }
}

const oldSyntax = new OldSyntax()
const getGreeting = oldSyntax.getGreeting
console.log(getGreeting())
```


#### New syntax

```
class NewSyntax {
  name = 'jen'

  getGreeting = () => {
    return `Hi. My name is ${this.name}.`
  }
}

const newSyntax = new NewSyntax() 
const newGetGreeting = newSyntax.getGreeting
console.log(newGetGreeting())
```

## Section 7 - Using a Third-Party Component

### React Modal

https://github.com/reactjs/react-modal


## Section 8 - Styling React

### Webpack

Create file *projects/indecision-app/src/styles/styles.css*

```
* {
  color: red;
}
```

Install the loaders

```
yarn add style-loader@0.18.2 css-loader@0.28.4
```

In *projects/indecision-app/webpack.config.js* add a new rule

```
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },

```

In *projects/indecision-app/src/app.js* add reference to the styles.css file

```
import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
import './styles/styles.css';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
```

#### SASS

https://sass-lang.com/


1. Rename file styles.css to styless.scss
2. Add the loaders: 
```
yarn add sass-loader@6.0.6 node-sass@5.0.0
```
3. In *webpack.config.js* search for *.scss files and add the loaders
```
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
```

4. In *app.js* change the import
```
import './styles/styles.scss';
```

### Architecture and Header Styles

1 rem == 16 pixels

Inside file *projects/indecision-app/src/styles/styles.scss*
```
@import './base/base';
@import './components/header'
```

File *projects/indecision-app/src/styles/base/_base.scss*
```
html {
  font-size: 62.5%; // 16 * 0.625 = 10
}
body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.6rem;
}
```

File *projects/indecision-app/src/styles/components/_header.scss* 
```
.header {
  background: #20222b;
  color: white;
  margin-bottom: 4.8rem;
  padding: 1.6rem 0;
}

// BEM Block element modifier
.header__title {
  font-size: 3.2rem;
  margin: 0;
}

.header__subtitle {
  color: #a5afd7;
  font-size: 1.6rem;
  font-weight: 500;
  margin: 0;
}
```

Now, file *projects/indecision-app/src/components/Header.js*
```
import React from 'react'

const Header = (props) => (
  <div className='header'>
  <h1 className='header__title'>{props.title}</h1>
  {props.subtitle && <h2 className='header__subtitle'>{props.subtitle}</h2>}
  </div>
)

Header.defaultProps = {
  title : 'Indecision'
}

export default Header
```

### Reset that $#!*

Normalize.css makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.

https://necolas.github.io/normalize.css/

```
yarn add normalize.css@7.0.0
```

In file *projects/indecision-app/src/app.js* add import above styles.scss
```
import 'normalize.css/normalize.css';
import './styles/styles.scss';
```

In *webpack.config.js* change regex where 's' is optional
```
  test: /\.s?css$/,
```

### Big Button & Options List


https://sass-lang.com/documentation/modules


### Mobile considerations

In *projects/indecision-app/public/index.html* add meta to use device default width

```
<html>
  <head>
...
    <meta name="viewport" content="width=device-width, initial-scale=1">
...
  </head>
```

In *projects/indecision-app/src/styles/components/_add-option.scss*

```
...

@media (min-width: 45rem) {
  .add-option {
    flex-direction: row;
  }
  .add-option__input {
    margin: 0 $s-size 0 0;
  }
}
```

### FAVICON

Picture in *projects/indecision-app/public/images/favicon.png*

In *projects/indecision-app/public/index.html*

```
<html>
  <head>
  ...
    <link rel="icon" type="image/png" href="./images/favicon.png">
  </head>
```

## PART 2 - Section 9 - React-Router


