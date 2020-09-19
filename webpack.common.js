const CopyPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

const { name } = require('./package.json')

dotenv.config(fs.existsSync('./.env.local') && { path: './.env.local' })

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[contenthash].[ext]',
            limit: 8192
          }
        }
      },
      {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['@babel/plugin-transform-runtime'],
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: '@svgr/webpack'
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          flatten: true,
          from: 'public/**/*'
        }
      ]
    }),
    new Dotenv(fs.existsSync('./.env.local') && { path: './.env.local' })
  ],
  resolve: {
    alias: {
      [name]: path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.jsx']
  }
}
