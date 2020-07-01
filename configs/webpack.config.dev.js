const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.config.base.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin({
      dry: true,

      cleanOnceBeforeBuildPatterns: [
        '**/*',
        '!.keep',
        '!**/*/images',
        '!**/*/fonts*',
      ],
    }),
  ],
  watchOptions: {
    ignored: '/node_modules/',
    aggregateTimeout: 300,
    poll: 500,
  },
});
