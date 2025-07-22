const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "classroom/rocketseat/javascript-moderno/bundlers/src/js/index.js"),
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "classroom/rocketseat/javascript-moderno/bundlers/dist")
    },
    mode: "development",
};