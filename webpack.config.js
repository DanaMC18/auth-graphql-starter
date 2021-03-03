const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  CLIENT: path.join(__dirname, 'client'),
  SERVER: path.join(__dirname, 'server')
};

module.exports = {
  entry: './client/index.js',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    })
  ],
  resolve: {
    alias: {
      client: PATHS.CLIENT,
      server: PATHS.SERVER
    },
    extensions: ['.js']
  }
};
