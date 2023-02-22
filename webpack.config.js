const path = require("path");
const webpack = require("webpack");

module.exports = [
  {
    entry: "./src/index.js",
    output: {
      filename: "browser.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new webpack.DefinePlugin({
        __BROWSER__: true,
      }),
    ],
  },
  {
    entry: "./src/index.js",
    output: {
      filename: "server.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new webpack.DefinePlugin({
        __BROWSER__: false,
      }),
    ],
  },
];
