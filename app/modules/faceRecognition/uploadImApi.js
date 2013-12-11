angular.module('adminMockApp.uploadImApi', ['ngResource'])
    .factory('uploadImApi', function($resource){
        return $resource(
            'http://lukaszl.dev.xyo.net:8080/',
            {},
            {
                post: {
                    method: 'POST',
                    isArray: false,
                    cache: true
                }
            }
        )
    });
