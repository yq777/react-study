const path=require("path");

const { stylelint, htmlWebpackPlugin }=require("./webpack.base");


module.exports={
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',

  devServer: {
    contentBase: path.resolve(__dirname, './'),
    compress: true,
    port: 3000,
    open: true,
  },
  plugins:[
    htmlWebpackPlugin,
    ...stylelint,
  ],

};
