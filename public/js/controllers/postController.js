/*global app*/
(function () {
    "use strict";
    app.controller('PostController', ['$scope',
        function ($scope) {

            $scope.datePickerOptions = {
                open: function () {
                    $scope.isDatePickerOpen = true;
                },
                close: function () {
                    $scope.isDatePickerOpen = false;
                }
            };

        }]);
}());
