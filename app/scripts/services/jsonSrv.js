	//Server for retrieving CV information
(function () {
  angular.module('webApp')
  	//Generating the function that generates the jsonSrv service instance
    .factory('jsonSrv', ['$http', '$q', function($http, $q) {
    
    function getCv(){
      return $http.get('./../json/cv.json')
    }

    function getJsonContent(jsonName) {
      var deferred = $q.defer();
      $http.get('./../json/' + jsonName + '.json').success(function(response){
        return deferred.resolve(response);
      });
      return deferred.promise;
    }
    return {
      //Public functions
      getCv: getCv,
      getJsonContent: getJsonContent
    }
  }]);
}());