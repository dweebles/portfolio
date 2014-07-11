'use strict';

angular.module('portfolio', ['ngAnimate', 'ngRoute', 'fx.animations'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      })
      .when('resume',{
      	templateUrl: '',
      	controller: 'ResumeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
