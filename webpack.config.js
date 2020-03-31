const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",

  entry: './src/main.js',
  output: {
    filename: "main.bundle.js"
  },

  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
