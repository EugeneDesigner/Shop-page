const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const stylesheetsLoader =
  'style-loader!css-loader?modules&localIdentName=[path]-[local]-[hash:base64:3]';
const htmlWebpackPlugin = new HtmlWebpackPlugin({ template: 'index.html' });
const definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'development' || 'true'))
});

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index',
  output: {
    filename: '[hash].js',
    path: __dirname + '/public',
    publicPath: '/'
  },
  devtool: 'source-map',
  plugins: [htmlWebpackPlugin, definePlugin],
  resolve: {
    modules: ['node_modules', path.join(__dirname, 'src')]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { test: /\.css$/, loader: stylesheetsLoader },
      { test: /\.scss$/, loader: `${stylesheetsLoader}'!sass-loader` },
      { test: /\.sass$/, loader: `${stylesheetsLoader}'!sass-loader` },
      { test: /\.less$/, loader: `${stylesheetsLoader}'!less` },
      { test: /\.html$/, loader: 'html-loader' },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api*': 'http://localhost:8181'
    }
  }
};
