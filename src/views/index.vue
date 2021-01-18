<template>
  <div>
    Hi! Etl
  </div>
</template>
<script>
import { get } from "axios";
export default {
  name: "index",
  data: function() {
    return {};
  },
  created() {
    get("basicData/datasource/getAllDatasource").then((res) => {
      console.log(res);
    });
  },
};
</script>
