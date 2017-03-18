/**
 * Created by hujiacheng on 2017/3/18.
 */
(function(angular){
    angular
        .module('movie.in_theaters',['ngRoute'])
        .config(['$routeProvider',function($routeProvider){
            $routeProvider
                .when('/in_theaters',{
                    templateUrl:'./in_theaters/view.html',
                    controller:'in_theaters.controller'
                })
        }])
        .controller('in_theaters.controller',['$scope','$routeParams','$myservice',function($scope,$routeParams,$myservice){
            //$http({
            //    method: 'GET',
            //    url: './in_theaters/data.json'
            //}).then(function successCallback(response) {
            //    $scope.movieList=response.data;
            //    //console.log(response.data);
            //}, function errorCallback(response) {
            //    console.log('请求失败');
            //});
            var num=0;
            $scope.page=num*20;
            //点击下一页触发pageUp事件
            $scope.pageUp=function(){
                //当为最后一页时，限制发送请求
                if($scope.nowPage==$scope.totalPage){
                    console.log('这是最后一页，不能点了哟！！！');
                    return;
                }
                    console.log('点击下一页');
                    num++;
                    $scope.page=num*20;
                    console.log($scope.page);
                    //再调用一次
                    json();
            }
            //点击上一页触发pageDown事件
            $scope.pageDown=function(){
                //当为第一页时，限制发送请求
                if($scope.page==0){
                    console.log('这是第一页，不能点了哟！！！');
                    return;
                }
                console.log('点击上一页');
                num--;
                $scope.page=num*20;
                console.log($scope.page);
                //再调用一次
                json();
            }
            json();
            //由于要调用两次，所以封装起来
            function json(){
                $myservice.jsonp(
                    {
                        url: 'http://api.douban.com/v2/movie/in_theaters',
                        obj: {start:$scope.page,count:20,callback:'fn'},
                        callback: function (data) {
                            $scope.$apply(function() {
                                //wrapped this within $apply
                                $scope.movieList = data;
                                console.log($scope.movieList);
                                $scope.totalPage=Math.ceil(data.total/20);
                                $scope.nowPage=Math.ceil(data.start/20)+1;
                            });
                        }
                    }
                );
            }
        }])
})(angular)