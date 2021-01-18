import Vue from "vue";
import { createRouter } from "./router"; // 导入路由文件
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "./styles/app.scss";
Vue.use(Antd); // 加载 antd库
import "./http";
import App from "./App";

// 启动vue
new Vue({
  router: createRouter(),
  el: "#app",
  render: (h) => h(App),
});
