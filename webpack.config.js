const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = (env, argv) => {

  const isProduction = argv.mode === 'production';

  return {
    mode: 'development',

    entry: './src/main.js',
    output: {
      filename: "[name].[contenthash].js"
    },
    optimization: {
      moduleIds: 'hashed',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },

    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: './dist'
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ]
  }
};
