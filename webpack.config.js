const path = require('path');

module.exports = {
    entry: './src/index.js',
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
      title: 'Caching'
      })
    ],
    output: {
     filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist')
    }
};