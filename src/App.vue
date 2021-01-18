<template>
  <div id="app">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider :trigger="null" :collapsible="true">
        <a-menu theme="dark" mode="inline">
          <a-menu-item>
            <router-link to="/">
              <span>数据源</span>
            </router-link>
          </a-menu-item>
          <a-menu-item>
            <router-link to="/">
              <span>关联数据库</span>
            </router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-content class="app-main">
          <keep-alive>
            <router-view />
          </keep-alive>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
export default {
  name: "app",
};
</script>
