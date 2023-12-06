const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/js/app.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new CleanWebpackPlugin({
        include: ['dist'],
    }),
  ],

  module: {
    rules: [{
        test: /\.(css|less)$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader"
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'url-loader'
        ]
      },
      {
        test: /\.(ttf|eot|woff(2))(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    ]
  },
  
};