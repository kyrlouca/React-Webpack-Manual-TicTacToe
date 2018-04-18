import webpack from 'webpack';
import path from 'path';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import ImageminPlugin from 'imagemin-webpack-plugin';

const config = env => ({
  // devtool: env.dev ? 'cheap-module-eval-source-map' : 'source-map',
  // devtool: 'inline-source-map',
  entry: {
    bundle: './src/index.html'
  },
  output: {
    // filename: `dest/[name]${env.production ? '.min' : ''}.js`,
    filename: `./dest/bundle2.js
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: { loader: 'html-loader' }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: {
          loader: 'file-loader?publicPath=../&name=assets/img/[name].[ext]'
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader?publicPath=../&name=assets/fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ disable: env.dev }),
    new ExtractTextPlugin(`css/[name]${env.production ? '.min' : ''}.css`),
    new OptimizeCssAssetsPlugin({ disable: env.dev }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: { collapseWhitespace: env.production }
    }),
    new ImageminPlugin({ test: 'assets/**' })
  ],
  devServer: {
    quiet: true
  },
  resolve: {
    alias: {
      normalize: path.join(
        __dirname,
        'node_modules/normalize.css/normalize.css'
      ),
      typi: path.join(__dirname, 'node_modules/typi/scss/_typi.scss')
    }
  }
});

export default config;
