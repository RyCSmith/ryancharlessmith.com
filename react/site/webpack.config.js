var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, '../../personalPage/src/main/resources/static');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

const isProdBuild = false; // NOTE: turn this back on to enable versioning (also see look here) //process.env.NODE_ENV === "production";

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: 'css/styles' + (isProdBuild ? '.[contenthash]' : '') + '.css'
});

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var config = {
    entry: APP_DIR + '/App.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'js/bundle' + (isProdBuild ? '.[chunkhash]' : '') + '.js'
    },
    module : {
        rules : [
            {
                test: /\.jsx$/,
                loader: "babel-loader",
                include : APP_DIR
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: 'css-loader', // translates CSS into CommonJS
                            query: {
                                modules: true,
                                minimize: true, //isProdBuild, LOOK-HERE
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        }, 
                        {
                            loader: "sass-loader", // compiles Sass to CSS
                            options: {
                                includePaths: [APP_DIR]
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        extractSass,
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};

module.exports = config;