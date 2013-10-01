/*global app*/
(function () {
    "use strict";
    app.controller('PostController', ['$scope', 'sharedService',
        function ($scope, sharedService) {

            function datePickerOpen() {
                $scope.$apply(function () {
                    $scope.safeApply(function () {
                        $scope.isDatePickerOpen = true;
                    });
                });
            }

            $scope.sharedService = sharedService;

            function datePickerClose() {
                $scope.safeApply(function () {
                    $scope.isDatePickerOpen = false;
                });
            }

            $scope.datePickerOptions = {
                open: datePickerOpen,
                close: datePickerClose
            };

        }]);
}());
