const path = require('path');

module.exports = {
  entry: {
    index: './src/typeof-items.js'
  },
  output: {
    filename: 'typeof-items.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'typeofItems',
    libraryTarget: 'var',
    libraryExport: 'default',
    globalObject: 'this'
  },
  target: 'web'
};