const path = require('path')

module.exports = {
  entry: './src/index.jsx',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'app.bundle.js',
    publicPath: '/assets/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, '/src'), 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-react', 'babel-preset-env'],
          }
        },
      },
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    index: 'index.html',
    compress: true,
    port: 3000,
    overlay: true,
  },
}