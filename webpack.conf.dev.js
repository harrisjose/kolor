const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: [
    './src/index.js',
    './src/styles/site.css',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    path: '/',
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
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: { limit: 25000 }
      }
    ]
  },
  devServer: {
    contentBase: './',
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
    new webpack.HotModuleReplacementPlugin()
  ]
};
