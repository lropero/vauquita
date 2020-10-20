const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/'
  },
  performance: {
    hints: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateParameters: {
        description: process.env.HTML_DESCRIPTION,
        title: process.env.HTML_TITLE
      }
    })
  ]
})
