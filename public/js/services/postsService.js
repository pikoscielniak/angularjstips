/* global appServices*/
appServices.factory('postsService', ['ajaxService',
    function (ajaxService) {
        "use strict";

        function getPosts() {
            return ajaxService.doGet('posts');
        }

        function getById(id) {
            return ajaxService.doGet('post', {id: id});
        }

        return {
            getPosts: getPosts,
            getById: getById
        };
    }]);
