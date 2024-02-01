const path = require('path');   // To import (require()) the node.js build in 'path' module (to use absolute pathnames etc.)

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),  // __dirname, 'dist' -> from the current directory we want to point to the dist folder - so the path for output = dist folder
    filename: 'bundle.js',  // To change the file name if we want - by default it is main.js
  },
};