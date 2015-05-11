var webpack = require('webpack');

module.exports = {
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: './client.js',
    output: {
        path: __dirname+'/public/js',
        filename: 'client.js'
    },
    module: {
        loaders: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: require.resolve('babel-loader') }
        ]
    }
};