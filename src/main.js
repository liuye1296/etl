import Vue from "vue";
import { createRouter } from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "./styles/app.scss";
Vue.use(Antd);
import "./http";
import App from "./App";
new Vue({
  router: createRouter(),
  el: "#app",
  render: (h) => h(App),
});
