const path = require(`path`);

module.exports = {
  resolve: {
    extensions: [`.tsx`, `.ts`, `.js`],
    alias: {
      '*': `./src`,
    },
  },
  devtool: `source-map`,
  entry: `./electron/main.ts`,
  target: `electron-main`,
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.css$/i,
        use: [`style-loader`, `css-loader`],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [`style-loader`, `css-loader`, `sass-loader`],
      },
    ],
  },
  node: {
    __dirname: false,
  },
  output: {
    path: path.resolve(__dirname, `dist`),
    filename: `[name].js`,
  },
};
