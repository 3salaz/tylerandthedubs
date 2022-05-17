const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src','index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader","css-loader","sass-loader"],
                include: path.resolve(__dirname, 'src'),
            }, 
            {
                test: /\.(js|jsx)$/,
                use: ["babel-loader"],
                exclude: /node_modules/,
            }
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
        })
    ]
};