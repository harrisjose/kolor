const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: [
    './src/index.js',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    path: '/',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      include: path.resolve(__dirname, "src"),
    }]
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
