const scripts = require('../')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const type = process.argv[2]
scripts[type]({
  entry: './example/entry.js',
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
}, {
  port: 4044,
  hot: true
})
