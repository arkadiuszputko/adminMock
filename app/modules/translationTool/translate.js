'use strict';

angular.module('adminMockApp')
    .controller('TranslateCtrl', function ($scope) {
        $scope.showAll = true;

        $scope.showAll = function (e) {
            e.preventDefault();
            $scope.showAll = !$scope.showAll;
        }

        $scope.showNotTranslated = function (e) {
            e.preventDefault();
            $scope.showAll = !$scope.showAll;
        }

        $scope.frazes = [
            {
                english: 'Angry birds',
                polish: 'wsciekle ptaki'
            },
            {
                english: 'Arcade ball games',
                polish: ''
            }
        ];

        $scope.onlyNotTranslated = function (fraze) {
            if ($scope.showAll) {
                return true;
            } else {
                return !fraze.polish;
            }
        };

        $scope.editFraze = function (fraze, e) {
            if (e) {
                e.preventDefault();
            }
            if (!fraze.editing) {
                fraze.editing = true;
            } else {
                fraze.editing = false;
            }
        };
    });
