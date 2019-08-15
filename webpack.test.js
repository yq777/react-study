
const { stylelint }=require("./webpack.base");


module.exports={
  mode: 'development',
  plugins:[
    ...stylelint,
  ],
};
