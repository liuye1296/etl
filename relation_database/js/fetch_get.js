//获取表名
fetch("/getAllTables",{
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

//获取数据库名
    //获取传递下来的database
    var database = "";
    fetch("/getAllDatasource",{
        method:"get"
    }).then(res=>{
        return res.json()
    }).then(json=>{
        // console.log("获取的结果",json.data);
        database = json.data;
        console.log("获取的结果",database)
        return json;
    }).catch(err=>{
        console.log("请求错误",err)
    })