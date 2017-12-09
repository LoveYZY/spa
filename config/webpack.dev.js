process.env.NODE_ENV = 'develop';
const webpackMerge = require('webpack-merge');
const common = require('./webpack.common');
const root = require('./webpack.util');
module.exports = webpackMerge(common, {
    devtool: 'source-map',
    output: {
        path: root('dist'),
        filename: 'js/[name].js'
    },
    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        host: '192.168.1.179',
        port: '8080'
    }
});
