// @flow

import path from 'path'
import webpack from 'webpack'

import { WDS_PORT } from './src/shared/config'
import { isProd } from './src/shared/util'
import {
  TWITTER_SECRET,
  TWITTER_SECRET_DEV,
  GOOGLE_SECRET,
  GITHUB_SECRET,
  GITHUB_SECRET_DEV,
  PASSPORT_SECRET,
  MONGOLAB_RED_URI,
} from './env'

const nodeEnv = (isProd) ? 'production' : 'development'

export default {
  entry: [
    'react-hot-loader/patch',
    './src/client',
  ],
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: isProd ? '/static/' : `http://localhost:${WDS_PORT}/dist/`,
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  devtool: isProd ? false : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: WDS_PORT,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(nodeEnv),
      'process.env.TWITTER_SECRET': JSON.stringify(TWITTER_SECRET),
      'process.env.TWITTER_SECRET_DEV': JSON.stringify(TWITTER_SECRET_DEV),
      'process.env.GOOGLE_SECRET': JSON.stringify(GOOGLE_SECRET),
      'process.env.GITHUB_SECRET': JSON.stringify(GITHUB_SECRET),
      'process.env.GITHUB_SECRET_DEV': JSON.stringify(GITHUB_SECRET_DEV),
      'process.env.PASSPORT_SECRET': JSON.stringify(PASSPORT_SECRET),
      'process.env.MONGOLAB_RED_URI': JSON.stringify(MONGOLAB_RED_URI),
    }),
  ],
}
