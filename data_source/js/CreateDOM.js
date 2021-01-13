function get_data(res){
    let list = document.getElementById("list")//获取列表;
    for(let i in res){
        console.log(res[i].id);
        console.log(res[i].database);
        console.log(res[i].code);
        console.log(res[i].url.split("jdbc:")[1]);
        console.log(res[i].driverType);
        console.log(res[i].updateBy);
        let li = createDom(res[i]);
        list.appendChild(li);
    }
};

//创建虚拟dom
function createDom(data){
    const li = document.createElement('li');
    let str = "<ul class=\"data_source_row\">\n" +
        "                                    <li>"+data.database+"</li>\n" +
        "                                    <li>"+data.code+"</li>\n" +
        "                                    <li class=\"link\"><a href="+data.url+">"+data.url+"</a></li>\n" +
        "                                    <li>"+data.driverType+"</li>\n" +
        "                                    <li style=\"word-wrap: break-word;word-break: normal;\">"+data.driverClass+"</li>\n" +
        "                                    <li>"+data.updateBy+"</li>\n" +
        "                                    <li><a href=\"#\">编辑</a></li>\n" +
        "                                </ul>"
    li.innerHTML = str;
    return li;
}