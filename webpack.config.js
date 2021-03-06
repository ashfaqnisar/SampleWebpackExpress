const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const {template} = require("@babel/core");

module.exports = {
    entry: {
        server: "./app.js"
    },
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/",
        filename: "[name].js"
    },
    target: "node",
    node: {
        __dirname: false,
        __filename: false
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            // {
            //     test: /\.html$/,
            //     use: [{loader: "html-loader"}]
            // }
        ]
    },
    // plugins: [
    //     new HtmlWebPackPlugin({
    //         template: "./index.html",
    //         filename: "index.html",
    //         excludeChunks: ["server"]
    //     })
    // ]


}
