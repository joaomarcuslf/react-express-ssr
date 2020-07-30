const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.config.base.js');

const pathsConfig = require('./paths.config');

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
  devServer: {
    host: '0.0.0.0',
    port: process.env.PORT || 8080,
    historyApiFallback: true,
    contentBase: [
      pathsConfig.distDir,
    ],
    compress: true,
    stats: {
      colors: true,
    },
  },
});
