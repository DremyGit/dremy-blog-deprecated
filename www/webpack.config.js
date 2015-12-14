var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './entry.jsx',
  ],
  output: {
    path:  __dirname + '/dist/js/',
    publicPath: '/js/',
    filename: 'app.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'react-hot!babel?presets[]=react,presets[]=es2015,presets[]=stage-0',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'react-hot!babel?presets[]=es2015,presets[]=stage-0',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?sourceMap'
      },
      {
        test: /\.(jpe?g|png|svg)/,
        loader: 'url?limit=8192'
      }
    ]
  }

}