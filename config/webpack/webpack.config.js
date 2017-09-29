const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const GLOBALS = {
  'process.env.ENDPOINT': JSON.stringify(process.env.ENDPOINT || 'http://localhost:8090'),
};

module.exports = {
  entry: path.resolve(__dirname, '../../src/index.jsx'),
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, '../../src'),
        loader: 'babel-loader',
        query: {
          presets: ['flow', 'react', 'es2016', 'stage-2'],
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'less-loader'] }),
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.less'],
    modules: [
      path.join(__dirname, '../../src'),
      'node_modules',
    ],
  },
  output: {
    filename: 'main.js',
    path: __dirname + '/build'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../../src/public/index.html'),
      filename: 'index.html',
    }),
    new ExtractTextPlugin('main.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(GLOBALS),
  ],
  cache: true,
  devtool: 'cheap-module-eval-source-map',
  entry: path.join(__dirname, '../../src/index.jsx'),
  devServer: {
    contentBase: path.join(__dirname, '../../src/public'),
    historyApiFallback: true,
    disableHostCheck: true,
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 8080,
  },

};
