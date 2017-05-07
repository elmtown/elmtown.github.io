const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './js/main.js',
  },
  output: {
    path: __dirname+'/compiled/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react']
          }
        },
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {loader: 'css-loader', options: {minimize: true}},
            {loader: 'sass-loader'},
          ]
        })
      }
    ]
  },
  plugins: [
      new ExtractTextPlugin('./main.css')
    ]
}
