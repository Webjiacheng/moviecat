/**
 * Created by hujiacheng on 2017/3/18.
 */
(function(angular){
    angular
        .module('moviecat.home_page',['ngRoute'])
        .config(['$routeProvider',function($routeProvider){
            $routeProvider
                .when('/home_page',{
                    templateUrl:'./home_page/view.html'
                })
        }])
})(angular)