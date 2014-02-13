//Server for retrieving CV information
(function () {
  angular.module('webApp')
    .factory('jsonSrv', ['$http', function($http) {
    
    function getCv(){
      return $http.get('../json/cv.json')
    }
    return {
      getCv: getCv
    }
  }]);
}());