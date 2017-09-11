const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'eval',
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
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, "src"),
      },
      {
        test: /\.css$/,
        exclude: /\.emotion\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: () => [
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9',
                  ]
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.emotion\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
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
