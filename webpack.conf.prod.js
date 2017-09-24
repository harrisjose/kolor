const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const cssFilename = 'static/css/[name].[contenthash:8].css';

process.env.NODE_ENV = 'production';

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.js',
    './src/styles/site.css'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, "src"),
      },
      {
        test: /\.css$/,
        exclude: /(fractures|\.emotion)\.css$/,
        include: path.resolve(__dirname, "src"),
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'css-loader',
            options: { modules: true, importLoaders: 1 },
          }
        ],
      },
      {
        test: /\.css$/,
        exclude: path.resolve(__dirname, "src"),
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.emotion\.css$/,
        include: path.resolve(__dirname, "src"),
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.svg$/,
        use: [
        {
          loader: 'babel-loader'
        },
        {
          loader: 'react-svg-loader?jsx=1',
          options: {
            svgo: {
              plugins: [{ removeTitle: false }],
              floatPrecision: 2
            }
          }
        }
      ]
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader',
        options: { limit: 25000 }
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'BABEL_ENV': JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new CleanWebpackPlugin(['dist'], { verbose: true }),
    new ExtractTextPlugin({ filename: cssFilename }),
    new MinifyPlugin(),
    new ManifestPlugin({ fileName: 'asset-manifest.json' })
  ]
}
