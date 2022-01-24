const path = require("path"); //from nodejs

module.exports = {
  entry: path.join(__dirname, "src", "index.js"), // where webpack will start bundling
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", // where webpack will place its bundle and the bundle file name
  },

  resolve: {
    extensions: [".mjs", ".js", ".jsx", ".css", ".scss"],
  },

  module: {
    rules: [
      {
        test: /\.js|jsx$/, // this will test file's named with this extensions with an expression
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },

          /* Babel is a transpiler so we need to tell it what to transpile, 
          we do this using presets. These are predefined configuration that is used to 
          transpile different type to javascript to browsers understandable one. 

          https://medium.com/age-of-awareness/setup-react-with-webpack-and-babel-5114a14a47e9#aa06
          */
        }, // use this loader on those files
        exclude: /node_modules/, // exlude these folders to test on
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ],
  },

};
