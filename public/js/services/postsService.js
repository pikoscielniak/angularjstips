/* global appServices*/
appServices.factory('postsService', ['ajaxService',
    function (ajaxService) {
        "use strict";

        function getPosts() {
            return ajaxService.doGet('posts');
        }

        return {
            getPosts: getPosts
        };
    }]);
