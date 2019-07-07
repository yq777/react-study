const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'], // preset-env环境预设将es6编译成es5,预设
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['css-loader', 'style-loader'],
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
};
