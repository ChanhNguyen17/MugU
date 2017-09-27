const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

console.log(path.resolve(__dirname))

module.exports = {
    entry: path.resolve(__dirname, '../../public/index.js'),
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, '../../public'),
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
          path.join(__dirname, '../../public'),
          'node_modules',
        ],
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, '../../public/assets/index.html'),
                filename: 'index.html',
            }),
            new ExtractTextPlugin('style.css'),
            new webpack.HotModuleReplacementPlugin(),
        ],
        cache: true,
        devtool: 'cheap-module-eval-source-map',
        entry: path.join(__dirname, '../../public/index.js'),
        devServer: {
          contentBase: path.join(__dirname, '../../public/assets'),
          historyApiFallback: true,
          disableHostCheck: true,
          host: process.env.HOST || '0.0.0.0',
          port: process.env.PORT || 8080,
        },

};
