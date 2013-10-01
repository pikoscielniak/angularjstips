/*global app*/
(function () {
    "use strict";
    app.controller('PostsController', ['$scope', 'postsService', 'sharedService',
        function ($scope, postsService, sharedService) {

            function fetchPosts() {
                postsService.getPosts().then(function (data) {
                    $scope.posts = data;
                });
            }

            $scope.sharedService = sharedService;

            fetchPosts();

        }]);
}());
