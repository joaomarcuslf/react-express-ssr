const path = require('path');

module.exports = {
  entryFiles: [
    path.resolve(__dirname, '..', 'app', 'styles', 'index.js'),
    path.resolve(__dirname, '..', 'app', 'entrypoints', 'main-page.jsx'),
  ],
  imagesDir: path.resolve(__dirname, '../assets/images'),
  fontsDir: path.resolve(__dirname, '../assets/fonts'),
  distDir: path.resolve(__dirname, '../public'),
};
