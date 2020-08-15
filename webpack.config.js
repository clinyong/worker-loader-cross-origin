module.exports = {
  output: {
    publicPath: "http://127.0.0.1:5001/dist/",
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: { loader: "worker-loader", options: { publicPath: "http://127.0.0.1:5000/dist/" } },
      },
    ],
  },
};
