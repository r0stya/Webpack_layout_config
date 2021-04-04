module.exports = {
  mode: 'development',

  devServer: {
    contentBase: './dist',
  },

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