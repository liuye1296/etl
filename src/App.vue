<template>
  <div id="app">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider :trigger="null" :collapsible="true">
        <div class="logo">蓝深科技</div>
        <a-menu theme="dark" mode="inline">
          <a-sub-menu>
            <span slot="title">数据管理</span>
            <a-menu-item>
              <router-link to="/data_source">
                <span>数据源</span>
              </router-link>
            </a-menu-item>
            <a-menu-item>
              <router-link to="/relation_database">
                <span>关联数据库</span>
              </router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu>
            <span slot="title">定时任务列表</span>
            <a-menu-item>
              <router-link to="/mission_list">
                <span>定时任务列表</span>
              </router-link>
            </a-menu-item>
          </a-sub-menu>
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
<style>
  #components-layout-demo-custom-trigger .logo {
    text-align: center;
    line-height: 32px;
    color: #FFFFFF;
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>