'use strict';

angular.module('webApp')
.controller('MenuController',['$scope', function ($scope) {
	$scope.showContactInfo = function() {
		$scope.isShowingContact = !$scope.isShowingContact;
	};
	$scope.isShowingContact = false;
}]);