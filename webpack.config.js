const path = require('path');   // To import (require()) the node.js build in 'path' module (to use absolute pathnames etc.)
const HtmlWebpackPlugin = require('html-webpack-plugin'); // To import (require()) the node.js build in 'html-webpack-plugin' module 

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),  // __dirname, 'dist' -> from the current directory we want to point to the dist folder - so the path for output = dist folder
    filename: 'bundle.js',  // To change the file name if we want - by default it is main.js
  },
  module: {
    rules: [
      {
        test: /\.css$/, // To check for every file that ends with .css
        use: ['style-loader', 'css-loader'],  // To apply the style loader and the css loader we've installed
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
};