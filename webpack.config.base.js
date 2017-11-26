'use strict';

var path = require('path');

module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      {
        test: /(\.webm|\.mp4|\.m4v|\.ogv)$/,
        loader: 'file-loader?name=video/[name].[hash:6].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loaders:[
            'file-loader?hash=sha512&digest=hex&name=assets/images/[hash].[ext]',
            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /react-icons\/(.)*(.js)$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  output: {
    path: __dirname + '/dist'
  },
  resolve: {
    alias: {},
    extensions: ['', '.js']
  }
};
