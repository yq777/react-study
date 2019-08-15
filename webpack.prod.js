const path=require("path");

const { stylelint, htmlWebpackPlugin }=require("./webpack.base");


module.exports={
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.min.js',
  },

  plugins:[
    htmlWebpackPlugin,
    ...stylelint,
  ],
};
