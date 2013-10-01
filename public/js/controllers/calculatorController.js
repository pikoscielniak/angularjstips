/*global app,console*/
(function () {
    "use strict";
    app.controller('CalculatorController', ['$scope',
        function ($scope) {

            $scope.adding = function () {
                var r = getA() + getB();
                if (!r) {
                    return "";
                }
                return r;
            };

            function getA() {
                return parseFloat($scope.a);
            }

            function getB() {
                return parseFloat($scope.b);
            }

            $scope.calculatePi = function () {
                var num = getA();
                var pi = 4, top = 4, bot = 3, minus = true;
                return next(pi, top, bot, minus, num);
            };

            function next(pi, top, bot, minus, num) {
                for (var i = 0; i < num; i++) {
                    pi += (minus === true) ? -(top / bot) : (top / bot);
                    minus = !minus;
                    bot += 2;
                }
                return pi;
            }

            var aWatchCounter = 0;

            $scope.$watch('a', function () {
                aWatchCounter++;
                console.log(aWatchCounter);
            });
        }]);
}());
