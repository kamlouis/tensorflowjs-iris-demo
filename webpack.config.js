const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.ts"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  // Webpack does not look for .ts files by default so must configure resolve.extensions
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  },
  node: {
    fs: 'empty'
  }
};
