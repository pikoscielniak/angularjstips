var app = angular.module('angualrJsTips', ['ngRoute']).
    config(['$routeProvider', function ($routeProvider) {

        $routeProvider.
            when('/posts', {
                templateUrl: 'templates/controllers/posts.html',
                controller: 'PostsController'
            });

        $routeProvider. otherwise({ redirectTo: '/posts' });
    }]);