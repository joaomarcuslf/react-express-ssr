let config = {};

if (process.env.NODE_ENV === 'production') {
  config = require('./configs/webpack.config.prod');
} else {
  config = require('./configs/webpack.config.dev');
}

module.exports = config;
