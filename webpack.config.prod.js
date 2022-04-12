const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    entry: './src/index.js',
    output: {
        filename: 'index.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack-demo1',
            template: "src/assets/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
            ignoreOrder: false,
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: '../', },
                    },
                    "css-loader",
                ],
            },
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader",
                    {
                        loader: "sass-loader",
                        options: { implementation: require('dart-sass') }
                    }]
            },
            {
                test: /\.less$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.styl$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "stylus-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: ["file-loader"],
            },
        ],
    },
};
