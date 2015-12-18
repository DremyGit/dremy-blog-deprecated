var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: [
    './entry.jsx',
  ],
  output: {
    path:  __dirname + '/dist/js/',
    publicPath: '/js/',
    filename: 'app.js'
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel?presets[]=es2015,presets[]=stage-0',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader','css-loader!sass-loader')
      },
      {
        test: /\.(jpe?g|png|svg|gif)/,
        loader: 'url?limit=8192'
      }
    ]
  },
  sassLoader: {
    outputStyle: 'compressed'
  }

}