# 练习 etl

第一周任务
使用 HTML+CSS 完成 ui 图片里面的四个(分页不用写)
蓝色代码 #1890ff
左边宽 颜色: #001529 宽 200px
背景颜色 #f0f2f5

接口说明
请求服务器 http://192.168.10.110:8181/
//api http://192.168.10.110:8181/swagger-ui.html#/EtlData%E5%9F%BA%E7%A1%80%E6%95%B0%E6%8D%AE

使用方式 比如 查询所有数据
fetch('/api/basicData/datasource/getAllDatasource').then(res=>res.JSON()).then(data=>{

})
/basicData/datasource/getAllDatasource // 查询所有数据源
/basicData/tables/getAllTables // 查询关联数据库
