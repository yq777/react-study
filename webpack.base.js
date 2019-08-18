const path = require("path");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const stylelintEnable = false; // 不启用stylelint

module.exports = {
  stylelint: stylelintEnable
    ? [
      new StyleLintPlugin({
        files: [
          "**/*.css",
          "**/*.less",
          "**/*.scss",
          "**/*.html",
          "**/*.vue",
        ],
      }),
    ]
    : [],
  htmlWebpackPlugin: new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "./index.html"),
  }),
};
