const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "classroom/rocketseat/javascript-moderno/bundlers/src/js/index.js"),
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "classroom/rocketseat/javascript-moderno/bundlers/dist")
    },
    mode: "development",
    plugins: [
        new htmlWebpackPlugin(),
    ],
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
            exclude: /node_modules/,
        },
        {
            test: /\.js$/i,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [["@babel/preset-env", { targets: "defaults" }]]
                },
            },
        }]
    }
};