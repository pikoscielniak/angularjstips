var appServices = angular.module('angularJsTips.services', []);
var appDirectives = angular.module('angularJsTips.directives', ['angularJsTips.services']);

var app = angular.module('angularJsTips', ['ngRoute','angularJsTips.services']).
    config(['$routeProvider', function ($routeProvider) {

        $routeProvider.
            when('/posts', {
                templateUrl: 'templates/controllers/posts.html',
                controller: 'PostsController'
            });

        $routeProvider.otherwise({ redirectTo: '/posts' });
    }]);

app.run(['appConfigurator', function (appConfigurator) {
    "use strict";

    appConfigurator.configureRootScope();
}]);