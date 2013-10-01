/*global app*/
(function () {
    "use strict";
    app.controller('PostController', ['$scope', 'postsService',
        function ($scope, postsService) {

            $scope.post = {};

            function datePickerOpen() {
                $scope.safeApply(function () {
                    $scope.isDatePickerOpen = true;
                });
            }

            function datePickerClose() {
                $scope.safeApply(function () {
                    $scope.isDatePickerOpen = false;
                });
            }

            $scope.datePickerOptions = {
                open: datePickerOpen,
                close: datePickerClose
            };

            function getByIdSuccess(data) {
                $scope.post = data;
            }

            $scope.cancel = function () {
                postsService.getById(1)
                    .then(getByIdSuccess);
            };

        }]);
}());
