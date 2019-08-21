const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const pathResolve = (url) => path.resolve(__dirname, url)

module.exports = {
  mode: 'development',
  entry: './src/index.qiankun.js',
  devtool: 'eval-source-map',
  devServer: {
    port: '1314',
    publicPath: '/single-app/',
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: pathResolve('public/index.html')
    })
  ],
  
};