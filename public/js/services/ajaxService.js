/* global appServices*/
appServices.factory('ajaxService', ['$http', '$q', 'notifyService',
    function ($http, $q, notifyService) {
        "use strict";

        var errorMessage = "Wystąpił błąd podczas przetwarzania żądania";

        function doPost(url, dataToSend) {
            var deferred = $q.defer();
            $http.post(url, dataToSend)
                .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function (data, status) {
                    handleRequestFail(deferred, status);
                });
            return deferred.promise;
        }

        function getConfig(dataToSend) {
            var config = {
                params: {}
            };
            if (dataToSend) {
                config.params = dataToSend;
            }
            return config;
        }

        function doGet(url, dataToSend) {
            var deferred = $q.defer();

            var config = getConfig(dataToSend);

            $http.get(url, config)
                .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function (data, status) {
                    handleRequestFail(deferred, status);
                });
            return deferred.promise;
        }

        function handleRequestFail(deferred, status) {
            notifyService.showErrorMessage(errorMessage);
            deferred.reject(status);
        }

        return {
            doGet: doGet,
            doPost: doPost
        };
    }]);