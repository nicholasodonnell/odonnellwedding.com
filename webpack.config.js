const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { NODE_ENV } = process.env

const isProd = NODE_ENV === 'production'

module.exports = {
  mode: NODE_ENV,
  devtool: isProd ? 'hidden-source-map' : 'inline-source-map',
  devServer: {
    historyApiFallback: true,
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
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets',
        },
      },
    ],
  },
  output: {
    clean: true,
    path: path.join(__dirname, '/public'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './public/favicon.ico',
      hash: isProd,
      minify: isProd,
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
}
