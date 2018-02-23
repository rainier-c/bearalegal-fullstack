// webpack config
const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, "client", "public", "dist"),
    filename: "compiled.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'] 
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }

    ]
  }
};