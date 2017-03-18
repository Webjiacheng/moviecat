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
            $myservice.jsonp(
                {
                    url: 'http://api.douban.com/v2/movie/in_theaters',
                    obj: {callback:'fn'},
                    callback: function (data) {
                        $scope.$apply(function() {
                            //wrapped this within $apply
                            $scope.movieList = data;
                            console.log($scope.movieList);
                        });
                    }
                }
            );
        }])
})(angular)