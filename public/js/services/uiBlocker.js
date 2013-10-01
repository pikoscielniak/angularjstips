/*global appServices, $*/
appServices.factory('uiBlocker',
    function () {
        "use strict";
        var options = {
            message: '&nbsp;',
            css: {
                background: "transparent",
                border: 'none'
            }
        };

        function block() {
            $.blockUI(options);
        }

        function unblock() {
            $.unblockUI();
        }

        return {
            block: block,
            unblock: unblock
        };
    });

