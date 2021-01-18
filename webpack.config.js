var path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //动态创建html 插件
function resolve(val) {
  return path.resolve(__dirname, val);
}
module.exports = {
  entry: "./src/main.js",
  mode: "development",
  output: {
    path: resolve("./dist"),
    publicPath: "/",
    filename: "static/js/[name]_[contenthash:6].js",
  },
  resolve: {
    extensions: [".js", ".vue", ".json"], // 这个几个文件导入不需要后缀
    alias: {
      "@": resolve("./src"), // 路径别名
    },
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve("./public/index.html"), // 添加模版文件
      filename: "index.html",
      showErrors: false,
    }),
    // 注入环境变量
    new webpack.DefinePlugin({
      "process.env.SERVER_URL": '"/api"',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    host: "0.0.0.0", //设置服务器的主机号，默认是localhost
    port: 9000,
    proxy: {
      "/api": {
        target: "http://etl-front.rantion-admin.com/rantion_etl/",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "style-loader", "css-loader", "sass-loader"],
      },
      {
        // img 压缩，，生成hash值
        test: /\.(png|svg|jpg|gif)$/,
        include: /src/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192, //小于 8192 就转换
              name: "[name][contenthash:5].[ext]",
              outputPath: "static/img/", //输出路径
              fallback: "file-loader", //失败之后处理方式
            },
          },
        ],
      },
    ],
  },
};
