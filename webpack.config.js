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
      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: fileLoader.default,
            options: {
              name: "[name].[ext]",
              outputPath: "./public/assets/menus", // Output directory for PDF files
            },
          },
        ],
      },
    ],
  },
};

module.exports = config;
