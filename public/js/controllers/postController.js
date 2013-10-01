/*global app*/
(function () {
    "use strict";
    app.controller('PostController', ['$scope',
        function ($scope) {

            function datePickerOpen() {
                $scope.isDatePickerOpen = true;
            }

            function datePickerClose() {
                $scope.isDatePickerOpen = false;
            }

            $scope.datePickerOptions = {
                open: datePickerOpen,
                close: datePickerClose
            };

        }]);
}());
