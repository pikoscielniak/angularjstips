/*global appServices, $ */
appServices.factory('notifyService', function () {
    "use strict";
    function show(params) {
        params = $.extend({ title: "", message: "", icon: "" }, params);
        $.pnotify({
            title: params.title,
            text: params.message,
            addclass: 'custom',
            delay:3000,
            icon: 'picon .picon-32 .picon-fill-color ' + params.icon,
            closer: true
        });
    }

    function showMessage(message) {
        return show({ title: 'Wiadomość : ', message: message, icon: 'picon-message' });
    }

    function showErrorMessage(message) {
        return show({ title: 'Błąd : ', message: message, icon: 'picon-error' });
    }

    function alert(message) {
        return show({ title: 'Wiadomość : ', message: message, icon: 'picon-message' });
    }

    return {
        showMessage: showMessage,
        showErrorMessage: showErrorMessage,
        alert: alert
    };
});