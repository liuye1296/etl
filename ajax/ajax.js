function ajax(options) {
        //将默认参数写入
        function extend(obj1,obj2) {
            for (let key in obj2){
                obj1[key] = obj2[key]
            }
        }
        //默认参数
        let defaults ={
            async:true
        };
        //extend使用，写入参数
        extend(defaults,options);

        //原生ajax请求封装
        var xhr = new XMLHttpRequest();
        //get请求
        if (defaults.type.toLowerCase() == "get"){
            if(defaults.data){
                defaults.url += '?' + defaults.data;
            }
            xhr.open(defaults.type,defaults.url,defaults.async);
            xhr.send(null);
        }else{
            //post请求
            xhr.open(defaults.type,defaults.url,defaults.async);
            xhr.setRequestHeader('content-type',"application/x-www-form-urlencoded");
            xhr.send(defaults.data);
        }
        //返回接受的数据
        xhr.onreadystatechange=()=>{
            if(xhr.readyState == 4){
                if (xhr.status == 200){
                    if (defaults.success){//如果有数据就返回
                        defaults.success(xhr.responseText);
                        console.log(xhr.responseText)
                    }
                }else{
                    alert('错误代码：'+xhr.status);
                }
            }
        }

}
