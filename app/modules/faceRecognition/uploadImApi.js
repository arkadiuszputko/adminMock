angular.module('adminMockApp.uploadImApi', ['ngResource'])
    .factory('uploadImApi', function($resource){
        return $resource(
            'http://uploads.im/api',
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
