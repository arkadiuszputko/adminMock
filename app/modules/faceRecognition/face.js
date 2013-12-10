'use strict';

angular.module('adminMockApp')
    .controller('FaceCtrl', function ($scope, faceApi, takePhoto) {
        console.log('dupa');
        var getData = function () {
            faceApi.get({

            },
            function getSuccess (data) {
                $scope.photoData = data;
            });
        };
        getData();
        takePhoto.init();

        $scope.takePhoto = function() {
          console.log('click');
          takePhoto.captureImage();
        }
    });
