angular.module('adminMockApp.faceApi', ['ngResource'])
    .factory('faceApi', function($resource){
        return $resource(
            'http://api.skybiometry.com/fc/faces/detect.json?api_key=51eafd6c20444677be690c793e699cb1&api_secret=7dc0243c11d64fa48cd935c2c21de30a',
            {},
            {
                get: {
                    method: 'GET',
                    params: {
                    	urls: '@urls',
                    	attributes: 'all'
                    },
                    isArray: false,
                    cache: true
                }
            }
        )
    });
