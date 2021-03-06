const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: [
    './src/index.js',
    './src/styles/site.css',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/'
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
  devServer: {
    contentBase: './build',
    port: 8080,
    noInfo: false,
    hot: true,
    inline: true,
    proxy: {
      '/': {
        bypass: function (req, res, proxyOptions) {
          return '/public/index.html'
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
