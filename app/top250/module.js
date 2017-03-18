/**
 * Created by hujiacheng on 2017/3/18.
 */
(function(angular){
    angular
        .module('movie.top250',['ngRoute'])
        .config(['$routeProvider',function($routeProvider){
            $routeProvider
                .when('/top250',{
                    templateUrl:'./top250/view.html',
                    controller:'top250.controller'
                })
        }])
        .controller('top250.controller',['$scope','$routeParams','$myservice',function($scope,$routeParams,$myservice){
            $myservice.jsonp(
                {
                    url: 'http://api.douban.com/v2/movie/top250',
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