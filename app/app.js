(function (angular) {
    // "use strict";

    // start your ride
    angular
            .module('moviecat',[
                'moviecat.home_page',
                'movie.in_theaters',
                'movie.coming_soon',
                'movie.top250',
                'moviecat.jsonp'
            ])

})(angular);