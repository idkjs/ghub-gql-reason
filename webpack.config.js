const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const Dotenv = require("dotenv-webpack")
const outputDir = path.join(__dirname, "build/")

const isProd = process.env.NODE_ENV === "production"

module.exports = {
  entry: "./src/Index.bs.js",
  mode: isProd ? "production" : "development",
  node: {
    fs: "empty"
  },
  output: {
    path: outputDir,
    filename: "Index.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: false
    }),
    new Dotenv()
  ],
  devServer: {
    compress: true,
    contentBase: outputDir,
    port: process.env.PORT || 8000,
    historyApiFallback: true
  }
}
