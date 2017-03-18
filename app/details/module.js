/**
 * Created by hujiacheng on 2017/3/18.
 */
(function(angular){
    angular
        .module('moviecat.details',['ngRoute'])
        .config(['$routeProvider',function($routeProvider){
            $routeProvider
                .when('/details:id',{
                    templateUrl:'./details/view.html',
                    controller:'moviecat.controller'
                })
        }])
        .controller('moviecat.controller',['$scope','$routeParams','$myservice',function($scope,$routeParams,$myservice){
            //获取前台传过来的id
            var id=($routeParams.id).slice(1);
            $myservice.jsonp(
                {
                    url: 'http://api.douban.com/v2/movie/subject/'+id,
                    obj: {callback:'fn'},
                    callback: function (data) {
                        $scope.$apply(function() {
                            //wrapped this within $apply
                            $scope.details = data;
                            console.log($scope.details);
                        });
                    }
                }
            );
        }])
})(angular)