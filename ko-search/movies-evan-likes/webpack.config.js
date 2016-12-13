const path = require('path')
const baseDir = path.resolve(__dirname)
const buildDir = path.join(baseDir, './build')
const assetsDir = path.join(buildDir, './assets')

module.exports = {
  context: baseDir,
  entry: './src/main.js',
  output: {
    path: assetsDir,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: [
      'shared',
      'node_modules'
    ]
  },
  devServer: {
    contentBase: buildDir,
    publicPath: '/assets/'
  }
}
