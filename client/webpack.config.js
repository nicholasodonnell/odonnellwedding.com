const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')

const { DOCKER, NODE_ENV } = process.env

const isDocker = !!DOCKER
const isProd = NODE_ENV === 'production'

module.exports = {
  mode: NODE_ENV,
  devtool: isProd ? 'hidden-source-map' : 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    hot: true,
    liveReload: false,
    port: 3000,
    watchFiles: [ './src/**/*' ],
  },
  performance: {
    hints: false,
  },
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'jsx',
              target: 'es2015',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]',
              },
              // postcss-loader
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
  output: {
    clean: true,
    path: path.join(__dirname, '/public'),
    publicPath: '/',
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.SERVER_URL': JSON.stringify(process.env.SERVER_URL),
    }),
    new HtmlWebpackPlugin({
      favicon: './public/favicon.ico',
      hash: isProd,
      minify: isProd,
      filename: isProd && isDocker
        ? '/tmp/index.template.html'
        : 'index.html',
      template: './src/index.html',
      templateParameters: {
        env: isDocker
          ? `window.env = { "SERVER_URL": "\${SERVER_URL}" }`
          : null,
      },
    }),
  ],
}
