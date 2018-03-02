var path = require('path');

const outputFolder = path.resolve(__dirname, 'build');

module.exports = {
  entry: './src/index.js',
  output: {
    path: outputFolder,
    filename: 'index.js',
    libraryTarget: 'commonjs2'
    // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
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
          test: /react-icons\/(.)*(.js)$/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react'],
          },
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader',
        },
      ],
    },
      new CleanWebpackPlugin([outputFolder]),
};
