/* eslint-disable @typescript-eslint/no-var-requires */
var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
};
