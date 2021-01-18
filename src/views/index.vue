<template>
  <div>请求结果: {{ JSON.stringify(list) }}</div>
</template>
<script>
import { get } from "axios";
export default {
  name: "index",
  data: function() {
    return {
      list: [],
    };
  },
  async created() {
    const { data } = await get("basicData/datasource/getAllDatasource");
    console.log(data);
    this.list = data.data;
  },
};
</script>
