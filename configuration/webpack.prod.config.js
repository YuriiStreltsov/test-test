/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const webpackConfiguration = require('../webpack.config');

module.exports = merge(webpackConfiguration, {
  mode: 'production',
  devtool: false,

  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
});
