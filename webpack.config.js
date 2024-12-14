const { plugin } = require('postcss');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports ={
    plugin :[
        new BundleAnalyzerPlugin()
    ]
}