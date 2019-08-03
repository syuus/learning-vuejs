const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: [
    './src/assets/scripts/main.ts',
    './src/assets/styles/main.scss',
  ],

  output: {
    path: path.resolve(__dirname, 'dist/assets/scripts'),
    filename: 'main.js'
  },

  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },

  plugins: [
    new CopyWebpackPlugin(
      [{ from: './src', to: '../../', ignore: [ '*.ts', '*.scss' ] }]
    ),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] }
    })
  ]
};