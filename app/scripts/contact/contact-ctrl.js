'use strict';

angular.module('portfolio')
  .controller('ContactCtrl', function ($scope) {
  	
  	$scope.address = {
  		street: '6 McKendree dr.',
  		city: 'Rochester',
  		state: 'New York',
  		zip: '14616'
  	};

  	$scope.userInfo = {
  		phone: '585-503-3719',
  		email: 'sleepynguyener@gmail.com',
  		linkdin: '',
  		website: 'http://developerduy.com'
  	};

  });
