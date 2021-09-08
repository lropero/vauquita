const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  devServer: {
    historyApiFallback: true,
    port: 3000
  },
  devtool: 'eval-source-map',
  ignoreWarnings: [/Failed to parse source map/],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        use: 'source-map-loader'
      }
    ]
  },
  output: {
    clean: true,
    filename: 'bundle.[contenthash].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateParameters: {
        description: process.env.HTML_DESCRIPTION,
        title: `DEV#${process.env.HTML_TITLE}`
      }
    })
  ],
  target: 'web'
})
