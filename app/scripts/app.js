'use strict';

angular.module('adminMockApp', ['ngRoute', 'adminMockApp.faceApi', 'photoTaking'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'modules/translationTool/translate.html',
                controller: 'TranslateCtrl'
            })
            .when('/face', {
                templateUrl: 'modules/faceRecognition/face.html',
                controller: 'FaceCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
  });
