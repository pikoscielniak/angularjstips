/* global appServices, moment*/
appServices.factory('dateTimeUtils',
    function () {
        "use strict";
        function getDateFromJson(jsonDate) {
            return moment(jsonDate).toDate();
        }

        function addDays(date, days) {
            return moment(date).add('days', days).toDate();
        }

        function toJson(date) {
            return moment(date).toJSON();
        }

        function toUtc(date){
            return moment(date).utc();
        }

        return {
            getDateFromJson: getDateFromJson,
            toJson: toJson,
            addDays: addDays,
            toUtc: toUtc
        };
    });
