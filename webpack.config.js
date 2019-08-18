// postcss-loader // 加css前缀做兼容 autoprefixer兼容表告诉postcss-loader哪个要加哪个不要加
const autoprefixer = require("autoprefixer");

module.exports = function(env = {}, args) {
  let config = {};
  if (env.dev) {
    config = require("./webpack.dev");
  } else if (env.prod) {
    config = require("./webpack.prod");
  } else {
    config = require("./webpack.test");
  }
  return {
    entry: "./src/index.js",
    module: {
      rules: [
        {
          test: /\.js[x]?/i,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-react"], // preset-env环境预设将es6编译成es5,预设
              },
            },
          ],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          enforce: "pre",
          loader: "eslint-loader",
        },
        {
          test: /\.css$/i,
          exclude: /node_modules/,
          use: [
            "css-loader",
            "style-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: [autoprefixer],
              },
            },
          ],
        },
        {
          test: /\.(jpg|png|gif)$/i, // 图片文件
          exclude: /node_modules/,
          use: {
            loader: "url-loader",
            options: {
              outputPath: "imgs",
              limit: 10 * 1024,
            },
          },
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/i, // 字体，图片文件的配置
          exclude: /node_modules/,
          use: {
            loader: "url-loader", // 它依赖于file-loader
            options: {
              outputPath: "fonts",
              limit: 10 * 1024,
            },
          },
        },
        {
          test: /\.less$/i,
          exclude: /node_modules/,
          use: ["less-loader", "css-loader", "style-loader"],
        },
      ],
    },
    ...config,
  };
};
