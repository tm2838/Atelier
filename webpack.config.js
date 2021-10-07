const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'client/src/index.jsx'),
  mode: 'production',
  watch: true,
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: [/\.css$/],
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'client/dist'),
  },
  // resolve: {
  //   alias: {
  //     config$: './configs/app-config.js',
  //     react: './vendor/react-master',
  //   },
  //   extensions: ['', 'js', 'jsx'],
  //   modules: [
  //     'node_modules',
  //     'bower_components',
  //     'shared',
  //     '/shared/vendor/modules',
  //   ],
  // }
};
