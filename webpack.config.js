const HtmlWebPackPlugin = require("html-webpack-plugin");
var Visualizer = require('webpack-visualizer-plugin');

module.exports = 
    {
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
          },
          {
            test: /\.(s*)css$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          }
        ]
      },
      plugins: [
        new Visualizer({ filename: './statistics.html' }),
        new HtmlWebPackPlugin({
          template: "./public/index.html",
          filename: "./index.html"
        })
      ]
    }