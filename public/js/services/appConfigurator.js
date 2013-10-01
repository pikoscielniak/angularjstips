/*global appServices*/
appServices.factory('appConfigurator', ['$rootScope',
    function ($rootScope) {
        "use strict";

        function addSafeApply() {
            $rootScope.safeApply = function (fn) {
                var phase = this.$root.$$phase;
                if (phase === '$apply' || phase === '$digest') {
                    if (fn && (typeof (fn) === 'function')) {
                        fn();
                    }
                } else {
                    this.$apply(fn);
                }
            };
        }

        function configureRootScope() {
            addSafeApply();
        }

        return {
            configureRootScope: configureRootScope
        };
    }]);

