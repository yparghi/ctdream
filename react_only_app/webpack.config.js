var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
    }]
  },
  output: {
		  path: __dirname + '/public',
		  filename: 'dist/bundle.js'
  },
  devServer: {
      contentBase: path.join(__dirname, '/public'),
      historyApiFallback: true
  }
}

