const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: ["@babel/polyfill", "./src/main.js"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public", "dist"),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000,
    publicPath: "/dist/",
  },
};
