const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const config = {
  mode: 'production',
  entry: {
    index: './src/js/index.js',
  },
  output: {
    filename: 'js/[name].min.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ],
      }
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({template: './src/html/index.html'}),
    new HtmlWebpackPlugin({
      template: './src/html/outcome-vs-output.html',
      filename: 'outcome-vs-output/index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/html/mission-cycles.html',
      filename: 'mission-cycles/index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/html/missions.html',
      filename: 'missions/index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/html/hero-squads.html',
      filename: 'hero-squads/index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/html/guardian-squad.html',
      filename: 'guardian-squad/index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/html/hexagon-trifecta.html',
      filename: 'hexagon-trifecta/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new CopyPlugin([
      'CNAME'
    ]),
  ],
};

module.exports = config;
