var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/'
    },

    devtool: 'source-map',

    devServer: {
      historyApiFallback: true,
      // contentBase: '/',
      // hot: true
    },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },

      {
        test: /\.json$/,
        loader: 'json-loader'
      },

      {
          test: /\.js/,
          exclude: '/node_modules/',
          use: [
              {
                  loader: "babel-loader",
                  options: { presets: ["env", "react"] }
              }
          ]
      }
    ]

  },

  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};

