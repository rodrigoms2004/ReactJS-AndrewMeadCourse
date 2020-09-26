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


## Section 4 React Components