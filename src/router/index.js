import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
export const routes = [
  {
    path: "/",
    component: () => import("@/views/index"),
    meta: { title: "index" },
    name: "index",
  },
];

export const createRouter = () =>
  new VueRouter({
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    },
    mode: "history", // require service support
    routes,
  });
