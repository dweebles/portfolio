'use strict';

angular.module('portfolio')
  .controller('MainCtrl', function ($scope, $timeout) {

      $scope.awesomeThings = [
        {
          'title': 'Hamlin',
          'logo': 'beach.jpg'
        },
        {
          'title': 'Barn',
          'logo': 'barn.jpg'
        },
        {
          'title': 'Beer',
          'logo': 'beer.jpg'
        },
        {
          'title': 'Bike',
          'logo': 'bike.jpg'
        },
        {
          'title': 'Cats',
          'logo': 'cats.jpg'
        },
        {
          'title': 'Me',
          'logo': 'me.jpg'
        },
        {
          'title': 'Canadian Bridge',
          'logo': 'cnbridge.jpg'
        },
        {
          'title': 'Viet Salad',
          'logo': 'viet.jpg'
        }
      ];

      $scope.title = 'Web and Mobile';

    angular.forEach($scope.awesomeThings, function (awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  });
