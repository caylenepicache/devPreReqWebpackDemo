const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
      app: './src/index.js',
      print: './src/print.js'
  },
  devtool: 'inline-source-map',
  devServer: {
      contentBase: './dist'
  },
  plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          title: 'Output Management'
      })
  ],
  output: {
    filename: 'main.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
};