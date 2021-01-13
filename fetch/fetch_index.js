fetch("/getAllDatasource",{
    method:"get"
}).then(res=>{
    return res.json()
}).then(json=>{
    console.log("获取的结果",json.data);
    get_data(json.data)
    return json;
}).catch(err=>{
    console.log("请求错误",err)
})