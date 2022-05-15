const path = require('path');

// module.exports = function (_env, argv) {
//     const isProduction = argv.mode === "production";
//     const isDevelopment = !isProduction;

//     return {
//         devtool: isDevelopment && "cheap-module-source-map",
//         entry: "./src/index.js",
//         output: {
//             path: path.resolve(__dirname, "dist"),
//             filename: "assets/js/[name].[contenthash:8].js",
//             publicPath: "/"
//         }
//     };
// };
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
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
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
};