'use strict';

angular.module('portfolio')
  .controller('MainCtrl', function ($scope, $timeout) {

    $timeout(function(){
      $scope.awesomeThings = [
        {
          'title': 'Hamlin',
          'logo': 'beach.jpg'
        },
        {
          'title': '',
          'logo': 'barn.jpg'
        },
        {
          'title': '',
          'logo': 'beer.jpg'
        },
        {
          'title': '',
          'logo': 'bike.jpg'
        },
        {
          'title': '',
          'logo': 'cats.jpg'
        },
        {
          'title': '',
          'logo': 'me.jpg'
        },
        {
          'title': '',
          'logo': 'cnbridge.jpg'
        },
        {
          'title': '',
          'logo': 'viet.jpg'
        }
      ];

      $scope.title = 'Web and Mobile';

    });

    angular.forEach($scope.awesomeThings, function (awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  });
