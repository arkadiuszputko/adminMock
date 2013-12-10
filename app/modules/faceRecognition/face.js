'use strict';

angular.module('adminMockApp')
    .controller('FaceCtrl', function ($scope, faceApi) {
        console.log('dupa');
        var getData = function () {
            faceApi.get({

            },
            function getSuccess (data) {
                $scope.photoData = data;
            });
        };
        getData();
    });