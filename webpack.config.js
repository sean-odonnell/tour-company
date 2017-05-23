var webpack = require('webpack');
var path = require('path');



module.exports = {
  entry: {
    javascript: './client/index.js'
  },

  output: {
    filename: 'bundle.js',
    path: __dirname + '/public/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }

};