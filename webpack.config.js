// /*eslint-disable*/
const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// postcss-loader // 加css前缀做兼容 autoprefixer兼容表告诉postcss-loader哪个要加哪个不要加
const stylelintEnable = false; // 不启用stylelint
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js[x]?/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'], // preset-env环境预设将es6编译成es5,预设
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader'
      },
      {
        test: /\.css$/i,
        use: [
          'css-loader',
          'style-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer],
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif)$/i, // 图片文件
        use: {
          loader: 'url-loader',
          options: {
            outputPath: 'imgs',
            limit: 10 * 1024,
          },
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i, // 字体，图片文件的配置
        use: {
          loader: 'url-loader', // 它依赖于file-loader
          options: {
            outputPath: 'fonts',
            limit: 10 * 1024,
          },
        },
      },
      {
        test: /\.less$/i,
        use: ['less-loader', 'css-loader', 'style-loader'],
      },
    ],
  },

  devtool: 'source-map',
  plugins: [
    ...(stylelintEnable
      ? [
        new StyleLintPlugin({
          files: ['**/*.css', '**/*.less', '**/*.scss', '**/*.html', '**/*.vue'],
        }),
      ]
      : []),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './'),
    compress: true,
    port: 3000,
    open: true,
  },
};
