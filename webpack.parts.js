

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var Visualizer = require('webpack-visualizer-plugin');


exports.devServer = ({ host, port } = {}) => ({
    devServer: {
      stats: "errors-only",
      host, // Defaults to `localhost`
      port, // Defaults to 8080
      open: true,
      overlay: true,
    },
});

exports.loadCSS = ({ include, exclude} = {}) => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                include, 
                exclude,
                use: [ "style-loader", "css-loader"]
            }
        ]
    }
})

exports.loadCode = () => (
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
              MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader'
            ]
          }
        ]
      },
      plugins: [
        new Visualizer({ filename: './statistics.html' }),
        new MiniCssExtractPlugin({
          filename: 'style.css',
        })
        
      ]
    })
