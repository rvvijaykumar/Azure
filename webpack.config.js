module.exports = {
  entry: './app/scripts/main.js',
  output: {
    filename: 'app/scripts/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'es6-loader!jsx-loader' } // loaders can take parameters as a querystring
    ]
  }
};