function get_data(res){
    let list = document.getElementById("list")//获取列表;
    for(let i in res){

        // time(res[i].createTime);//创建时间获取
        // console.log(res[i].createBy);//创建人
        // console.log(res[i].sourceTable)//创建表
        // console.log(res[i].targetTable)//关联表
        // console.log(get_name(res[i].sourceDatasourceId))//获取数据库名
        // console.log(get_name(res[i].targetDatasourceId))//获取关联数据库名
        let li = createDom(res[i]);
        list.appendChild(li);
    }
};

//创建虚拟dom
function createDom(data){
    const li = document.createElement('li');
    let str = "<ul class=\"relation_database_source_row\">\n" +
        "                                <li><button>+</button></li>\n" +
        "                                <li>"+get_name(data.sourceDatasourceId)+"</li>\n" +
        "                                <li>"+data.sourceTable+"</li>\n" +
        "                                <li>"+get_name(data.targetDatasourceId)+"</li>\n" +
        "                                <li>"+data.targetTable+"</li>\n" +
        "                                <li>"+data.createBy+"</li>\n" +
        "                                <li>"+time(data.createTime)+"</li>\n" +
        "                                <li><a href=\"#\">编辑</a></li>\n" +
        "                                <li><a href=\"#\">添加定时任务</a></li>\n" +
        "                            </ul>"
    li.innerHTML = str;
    return li;
}


//获取数据库名字
function get_name(id) {
    for(let key in database){
        if (database[key].id == id){
            return database[key].database;
            break
        }
    }
}

