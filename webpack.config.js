const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
let target = 'web';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist';
};

module.exports = {
  mode: mode,
  target: target,

  devServer: {
    contentBase: './dist',
    hot: true,
  },

  devtool: 'source-map',

  plugins: [
    new MiniCssExtractPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}