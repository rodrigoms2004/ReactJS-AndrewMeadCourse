const path = require('path') // https://nodejs.org/api/path.html#path_path_join_paths

module.exports = {
  entry: './src/app.js',

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
}
