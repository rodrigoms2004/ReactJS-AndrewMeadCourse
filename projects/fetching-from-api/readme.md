# Fetching API Example


https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
https://swapi.dev/
https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261


## Version issues

Some issues involving babel and webpack lastest versions 


### Babel

To install babel use:

```
yarn add @babel/core @babel/cli @babel/loader @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties babel-loader
```

Or in package.json dependencies:

```
"@babel/cli": "^7.12.1",
"@babel/core": "^7.12.3",
"@babel/plugin-proposal-class-properties": "^7.12.1",
"@babel/preset-env": "^7.12.1",
"@babel/preset-react": "^7.12.1",
"babel-loader": "8.1.0",
```

In .babelrc file use:

```
{
  "presets": [
    "@babel/env",
    "@babel/react"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties"
  ]
}
```

### Webpack 5 and webpack-dev-server

In Webpack 5 there is not command *webpack-dev-server* but *webpack serve*, so in package.json

```
"scripts": {
  "build": "webpack",
  "dev-server": "webpack serve"
},
```
