const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
  //context will be the base for any relative paths
  context: path.resolve(__dirname, 'src'),
  entry: ['./app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        //we need both style and css loader in this order
        //style will inject the css in the bundle.js and make it available to any js file
        //by importing with import '../css/grid.css';
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]'
            }
          }
        ]
      },

      {
        //html-loader will create an html file in the dest folder
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        //this loader will load small images as 64based strings
        //you can then use it in your html file
        //<img src='./image/webpack1.png'>
        // Or you can import in a js file as  => import homeIcon from '../image/tree2.png';
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 15000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src', 'index.html')
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    publicPath: '/',
    port: 3000
  }
};
