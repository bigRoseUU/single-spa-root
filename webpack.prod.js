const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pathResolve = (url) => path.resolve(__dirname, url)

console.log('build')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: pathResolve('dist'),
    publicPath: '/single-app/',
    chunkFilename: 'js/[name].js',
    filename: 'js/[name].js'
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: pathResolve('public/index.html')
    })
  ]
}