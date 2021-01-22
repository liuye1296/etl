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
    {
        path:"/data_source",
        component:()=>import("@/views/data_source"),
        meta: {title: "data_source"},
        name: "data_source",
    },
    {
        path:"/test",
        component:()=>import("@/views/test"),
        meta: {title: "test"},
        name: "test",
    },
    {
        path:"/relation_database",
        component:()=>import("@/views/relation_database"),
        meta: {title: "relation_database"},
        name: "relation_database",
    },
    {
        path:"/mission_list",
        component:()=>import("@/views/mission_list"),
        meta: {title: "mission_list"},
        name: "mission_list",
    },
    {
        path:"/add_datasource",
        component:()=>import("@/views/add_datasource"),
        meta: {title: "add_datasource"},
        name: "add_datasource",
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
    // mode: "history", //
    routes,
  });
