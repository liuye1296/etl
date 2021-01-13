(function () {
    let list = document.getElementById('list'); //整个list的页面
    let pages = document.getElementById('pages'); //pages下面的总页数
    let btn = document.getElementById('btn'); //升降序的按钮
    let iPages = 1; //第一页的数据(页的数据)
    let num = 10; //每一页为10条数据

    //初始化 获取第一页的内容渲染到页面
    function init() {
        ajax({
            type:'get',
            url:'/getAllDatasource',
            data:"",
            success:function (str) {
                console.log(str);
            }
        })
    }
    init();
}
)