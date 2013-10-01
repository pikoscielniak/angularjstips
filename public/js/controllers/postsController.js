/*global app*/
(function () {
    "use strict";
    app.controller('PostsController', ['$scope', 'postsService',
        function ($scope, postsService) {

            function fetchPosts() {
                postsService.getPosts().then(function (data) {
                    debugger;
                    $scope.posts = data;
                });
            }

            fetchPosts();

        }]);
}());
