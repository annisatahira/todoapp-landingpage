const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                {
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                },
            ],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif|otf|ttf)$/,
            use: [
                'file-loader',
            ],
        },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'dist/index.html'),
      template: path.resolve(__dirname, 'src/index.html'),
  }),
  new CopyWebpackPlugin({
    patterns: [
        {
            from: path.resolve(__dirname, 'src/images'),
            to: path.resolve(__dirname, 'dist/images'),
        },
      ],
  }),
  new CleanWebpackPlugin()
  ]
}