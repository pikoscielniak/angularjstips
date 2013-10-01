/*global app*/
(function () {
    "use strict";
    app.controller('PostController', ['$scope',
        function ($scope) {

            function datePickerOpen() {
                $scope.$apply(function () {
                    $scope.safeApply(function () {
                        $scope.isDatePickerOpen = true;
                    });
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

            function destroyPublishDateDatePicker() {
                $scope.publishDateKendo.destroy();
            }

            $scope.$on('$destroy', function () {
                debugger;
                destroyPublishDateDatePicker();
            });

        }]);
}());
