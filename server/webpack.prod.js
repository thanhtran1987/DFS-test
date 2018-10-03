const merge = require('webpack-merge');
const webpack = require('webpack');
module.exports = merge(require('./base.config'), {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        PUBLIC_URL: JSON.stringify('localhost:8080'),
        API_URL: JSON.stringify('https://jsonplaceholder.typicode.com'),
      },
    }),
  ],
});
