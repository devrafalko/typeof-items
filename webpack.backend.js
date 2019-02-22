const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    index:'./src/typeof-items.js'
  },
  output: {
    filename: 'typeof-items.node.js',
    path: path.resolve(__dirname, 'dist'),
    library:'typeofItems',
    libraryTarget: 'commonjs2',
    libraryExport:'default',
    globalObject: 'this'
  },
  target:'node',
  externals: [nodeExternals()]
};