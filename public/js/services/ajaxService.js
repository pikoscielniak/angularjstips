/* global appServices*/
appServices.factory('ajaxService', ['$http', '$q', 'notifyService', 'uiBlocker',
    function ($http, $q, notifyService, uiBlocker) {
        "use strict";

        var errorMessage = "Wystąpił błąd podczas przetwarzania żądania";

        function doPost(url, dataToSend, shouldBlockUi) {
            blockUi(shouldBlockUi);
            var deferred = $q.defer();
            $http.post(url, dataToSend)
                .success(function (data) {
                    unblockUi(blockUi);
                    deferred.resolve(data);
                })
                .error(function (data, status) {
                    unblockUi(blockUi);
                    handleRequestFail(deferred, status);
                });
            return deferred.promise;
        }

        function getTimestamp() {
            return new Date().getTime();
        }

        function getConfig(dataToSend) {
            var config = {
                params: {}
            };
            if (dataToSend) {
                config.params = dataToSend;
            }
            config.params._ = getTimestamp();
            return config;
        }

        function doGet(url, dataToSend, blockUi) {
            blockUi(blockUi);
            var deferred = $q.defer();

            var config = getConfig(dataToSend);

            $http.get(url, config)
                .success(function (data) {
                    unblockUi(blockUi);
                    deferred.resolve(data);
                })
                .error(function (data, status) {
                    unblockUi(blockUi);
                    handleRequestFail(deferred, status);
                });
            return deferred.promise;
        }

        function doPostWithBlock(url, dataToSend) {
            return doPost(url, dataToSend, true);
        }

        function doGetWithBlock(url, dataToSend) {
            return doGet(url, dataToSend, true);
        }

        function blockUi(blockUi) {
            if (blockUi) {
                uiBlocker.block();
            }
        }

        function unblockUi(blockUi) {
            if (blockUi) {
                uiBlocker.unblock();
            }
        }

        function handleRequestFail(deferred, status) {
            notifyService.showErrorMessage(errorMessage);
            deferred.reject(status);
        }

        return {
            doGet: doGet,
            doPost: doPost,
            doPostWithBlock: doPostWithBlock,
            doGetWithBlock: doGetWithBlock
        };
    }]);