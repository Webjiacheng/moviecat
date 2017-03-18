(function(angular){
    angular
        .module('moviecat.jsonp',[])
        .service('$myservice',function(){
            //将对象转化为字符串的方法
            function getStr(obj){
                //截取拼接参数  obj={start=0;count：5,callback:fn} ==>?start=0&count=5&callback=fn
                //str为索要拼接的字符串
                var str='';
                for(var key in obj){
                    str+='&'+key+"="+obj[key];
                }
                //截取第一个&
                str='?'+str.slice(1);
                return str;
            }

            this.jsonp=function(params){
                var url=params.url;
                var obj=params.obj;
                var callback=params.callback;
                //url,obj,callback
                var str=getStr(obj);
                //跨域原理：动态创建script标签，设置src属性为url
                var script=document.createElement('script');
                script.src=url+str;
                console.log(script.src);
                //放在DOM树上才会被执行
                document.head.appendChild(script);
//        定义一个fn
                var fn=function(data){
                    callback(data);
                }

                //暴露fn给返回时调用
                window.fn=fn;
            }
        })
        //.controller('Ctrl',['$scope','$myservice',function($scope,$myservice){
        //    $myservice.jsonp(
        //        {
        //            url: 'http://api.douban.com/v2/movie/in_theaters',
        //            obj: {start:0, count:5, callback:'fn'},
        //            callback: function (data) {
        //                console.log(data)
        //            }
        //        }
        //    );
        //}])
})(angular)