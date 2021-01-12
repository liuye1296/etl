const Koa = require("koa");
const staticFiles = require("koa-static");
const path = require("path");
const proxy = require("koa2-proxy-middleware");
const bodyparser = require("koa-bodyparser");

const app = new Koa();

const options = {
  targets: {
    "/api/(.*)": {
      // this is option of http-proxy-middleware
      target: "http://192.168.10.110:8181/", // target host
      changeOrigin: true, // needed for virtual hosted sites
      pathRewrite: {
        "/api": "",
      },
    },
  },
};
app.use(proxy(options)); //注册
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(staticFiles(path.resolve(__dirname, "./src")));
app.use(async (ctx, next) => {
  console.log(`请求: ${ctx.request.method} ${ctx.request.url}`);
  await next();
});
app.listen(3000);
console.log("http://127.0.0.1:3000/");
