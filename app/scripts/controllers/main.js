'use strict';

angular.module('webApp')
  .controller('MainCtrl', ['$scope', 'jsonSrv', function ($scope,jsonSrv) {	 
	jsonSrv.getCv().then(function(response){
	  $scope.tabs = response.data.index;
	  $scope.cvContent = response.data.cvContent;
	  $scope.tabs[0].active = true;
	  $scope.cvContent[0].active = true;
	})
  	$scope.navType = 'pills';
  	$scope.activateTab = function(index){
  		$scope.tabs.map(function(tab){
  			tab.active = false;
  		});
  		$scope.cvContent.map(function(content){
  			content.active = false;
  		});
  		$scope.tabs[index].active = true;
  		$scope.cvContent[index].active = true;
  	}

  }]);
