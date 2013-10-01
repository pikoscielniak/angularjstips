/* global appServices*/
appServices.factory('sharedService',
    function () {
        "use strict";

        var sharedData = {
            clickCounter: 0
        };

        function increment() {
            sharedData.clickCounter++;
        }

        return {
            increment: increment,
            sharedData: sharedData
        };
    });

