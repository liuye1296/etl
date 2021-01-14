function get_data(res){
    let list = document.getElementById("list")//获取列表;
    for(let i in res){
        console.log(res[i].etlTablesId);//id
        console.log(res[i].code);//编号
        console.log(res[i].jobGroup);//job组
        console.log(res[i].jobClassName);//jobClassname
        console.log(res[i].description);//desciption
        console.log(res[i].cronExpression);//cronExpression

        let li = createDom(res[i]);
        list.appendChild(li);
    }
};

//创建虚拟dom
function createDom(data){
    const li = document.createElement('li');
    let str = " <ul class=\"mission_list_source_row\">\n" +
        "                                <li>"+data.etlTablesId+"</li>\n" +
        "                                <li>"+data.code+"</li>\n" +
        "                                <li>"+data.jobGroup+"</li>\n" +
        "                                <li>"+data.jobClassName+"</li>\n" +
        "                                <li>"+data.description+"</li>\n" +
        "                                <li>"+data.cronExpression+"</li>\n" +
        "                                <li><a href=\"#\">编辑</a></li>\n" +
        "                            </ul>"
    li.innerHTML = str;
    return li;
}