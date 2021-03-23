/* eslint-disable @typescript-eslint/no-var-requires */
var path = require('path');
const DtsBundleWebpack = require('dts-bundle-webpack');

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
  plugins: [
    new DtsBundleWebpack({
      name: 'react-use-iamport',
      main: './src/index.d.ts',
      out: path.resolve(__dirname, 'dist/index.d.ts'),
      removeSource: true,
    }),
  ],
};
