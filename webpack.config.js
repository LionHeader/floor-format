const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './floor-format.min.js',
    libraryExport: 'default',
    library: 'floorFormat', // script标签引入
    libraryTarget: 'umd', // 模块引入(umd)、全局引入(this/window/global),
    umdNamedDefine: true
  },
  externals: [], // 额外的第三方库
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new UglifyWebpackPlugin()
  ]
}
