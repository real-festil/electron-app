const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);

module.exports = {
  resolve: {
    extensions: [`.tsx`, `.ts`, `.js`],
    mainFields: [`main`, `module`, `browser`],
    alias: {
      '*': `/src`,
    },
  },
  entry: `./src/app.tsx`,
  target: `electron-renderer`,
  devtool: `source-map`,
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
  devServer: {
    contentBase: path.join(__dirname, `../dist/renderer`),
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 4000,
    publicPath: `/`,
  },
  output: {
    path: path.resolve(__dirname, `dist`),
    filename: `js/[name].js`,
  },
  plugins: [new HtmlWebpackPlugin()],
};
