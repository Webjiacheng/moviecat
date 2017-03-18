(function(angular){
    angular
        .module('moviecat.jsonp',[])
        .service('$myservice',function(){
            //������ת��Ϊ�ַ����ķ���
            function getStr(obj){
                //��ȡƴ�Ӳ���  obj={start=0;count��5,callback:fn} ==>?start=0&count=5&callback=fn
                //strΪ��Ҫƴ�ӵ��ַ���
                var str='';
                for(var key in obj){
                    str+='&'+key+"="+obj[key];
                }
                //��ȡ��һ��&
                str='?'+str.slice(1);
                return str;
            }

            this.jsonp=function(params){
                var url=params.url;
                var obj=params.obj;
                var callback=params.callback;
                //url,obj,callback
                var str=getStr(obj);
                //����ԭ����̬����script��ǩ������src����Ϊurl
                var script=document.createElement('script');
                script.src=url+str;
                console.log(script.src);
                //����DOM���ϲŻᱻִ��
                document.head.appendChild(script);
//        ����һ��fn
                var fn=function(data){
                    callback(data);
                }

                //��¶fn������ʱ����
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