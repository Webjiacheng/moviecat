/**
 * Created by hujiacheng on 2017/3/18.
 */
(function(angular){
    angular
        .module('movie.coming_soon',['ngRoute'])
        .config(['$routeProvider',function($routeProvider){
            $routeProvider
                .when('/coming_soon',{
                    templateUrl:'./coming_soon/view.html',
                    controller:'coming_soon.controller'
                })
        }])
        .controller('coming_soon.controller',['$scope','$routeParams','$myservice',function($scope,$routeParams,$myservice){
            $myservice.jsonp(
                {
                    url: 'http://api.douban.com/v2/movie/coming_soon',
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