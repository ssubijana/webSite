	//Server for retrieving CV information
(function () {
  angular.module('webApp')
  	//Generating the function that generates the jsonSrv service instance
    .factory('jsonSrv', ['$http', function($http) {
    
    function getCv(){
      return $http.get('../json/cv.json')
    }
    return {
      //Public functions
      getCv: getCv
    }
  }]);
}());