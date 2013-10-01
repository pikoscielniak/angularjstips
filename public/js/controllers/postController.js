/*global app*/
(function () {
    "use strict";
    app.controller('PostController', ['$scope',
        function ($scope) {

            function datePickerOpen() {
                $scope.$apply(function () {
                    $scope.$apply(function () {
                        $scope.isDatePickerOpen = true;
                    });
                });
            }

            function datePickerClose() {
                $scope.$apply(function () {
                    $scope.isDatePickerOpen = false;
                });
            }

            $scope.datePickerOptions = {
                open: datePickerOpen,
                close: datePickerClose
            };

        }]);
}());
