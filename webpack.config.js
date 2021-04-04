let mode = 'development';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
};

module.exports = {
  mode: mode,

  devServer: {
    contentBase: './dist',
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: '/\.js$',
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}