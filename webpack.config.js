const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const outputFolder = path.resolve(__dirname, 'build');
const inputFolder = path.resolve(__dirname, 'src');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: outputFolder,
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'stage-2', 'react'],
            },
          },
        },
        {
          enforce: "pre",
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
        },
        {
          test: /react-icons\/(.)*(.js)$/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react'],
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin([outputFolder]),
      new UglifyJSPlugin({
        sourceMap: true,
      }),

    ],
    externals: {
      react: 'commonjs react'
    }
};
