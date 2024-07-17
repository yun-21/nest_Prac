const path = require('path');
let name = "app";
module.exports={
  entry:`./src/${name}.tsx`,
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:`${name}.bundle.js`
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:["style-loader","css-loader"]
      },
      {
        test:/\.js|jsx|ts|tsx$/,
        use:"babel-loader",
        exclude:/node_modules/
      },
      {
        test:/\.ts$/,
        use:"ts-loader",
        exclude:/node_modules/
      }
    ],
  },
  resolve:{
    extensions: [".ts",".js",".tsx",".jsx",".css"]
  }
}
