'use strict';

angular.module('adminMockApp')
    .controller('FaceCtrl', function ($scope, $rootScope, faceApi, takePhoto, uploadImApi) {
        var getData = function (image) {
            faceApi.get({
                urls: image
            },
            function getSuccess (data) {
                $scope.photoData = data.photos[0].tags[0].attributes;
            });
        };
        takePhoto.init();

        $scope.imageUrl = false;

        $scope.taken = false;
        $rootScope.translation = false;

        $scope.takePhoto = function() {
          console.log('click');
          var photo = takePhoto.captureImage();
          uploadImage(removeBase(photo));
          $scope.taken = true;
        }

        var removeBase = function (image) {
            return image.substr('data:image/png;base64,'.length);
        }

        var uploadImage = function (image) {
            uploadImApi.post(
            image,
            function postSuccess (data) {
                $scope.imageUrl = data.url;
                getData(data.url);
            });
        }
    });
