const path = require("path");
const fileLoader = require("file-loader");

const config = {
  module: {
    rules: [
      {
        test: /\.(mov|mp4)$/,
        loader: fileLoader.default,
        options: {
          name: "[name].[ext]",
          outputPath: "static",
        },
      },
    ],
  },
};

module.exports = config;
