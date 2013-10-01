/*global app*/
(function () {
    "use strict";
    app.controller('PostsController', ['$scope', 'ajaxService',
        function ($scope, ajaxService) {

            function fetchPosts() {
                ajaxService.doGet('posts').then(function (data) {
                    $scope.posts = data;
                });
            }

            fetchPosts();

        }]);
}());
