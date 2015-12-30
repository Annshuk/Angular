// JavaScript Document
var app = angular.module("single-page-app", ['ngRoute']);
	
    app.factory('JsonSvc', function ($http) {
	  return {
		  read: function(jsonURL, scope) {
			return $http.get(jsonURL).success(function (data, status) {				
					scope.data = data;  					
					//$rootScope.$broadcast("jsonDone");				    
			});
		}};
	 })	// configure our routes
    .config(function($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'templates/main.htm',
                controller  : 'mainController',
				
            })			
			.when('/about', {
                templateUrl : 'templates/about.htm',
                controller  : 'mainController'
            })
            // route for the about page
    })
	 .factory('Page', function() {
	   var title = 'default';
	   return {
		 title: function() { return title; },
		 setTitle: function(newTitle) { title = newTitle }
	   };
	})	 
	
	//header DAta
	.directive('headerData', function() {
		return {
			restrict: 'E',
			scope: { head: '=' },
			replace: true,
			transclude: true,
			templateUrl : 'directive/header.htm'
		};
	})
	
		
	 //image content
	 .directive('figureImg', function() {
    	return {
			restrict: 'AE',
			scope: { imgSoruce: '=' },
			replace: true,
			transclude: true,
			templateUrl : 'directive/imageContent.htm'
        }		
	})
	
	//json control to get json data
	.controller('mainController', PostAjax);		
	
	function PostAjax($scope, JsonSvc, Page){
			JsonSvc.read('data.json', $scope).then(function () {
					$scope.nestedObj = $scope.data["#children"][0]["#children"]; 	
							jsonObj =  $scope.nestedObj;								
							var dataObj = [];
								$scope.buildJson = function() {									
									angular.forEach(jsonObj, function(obj, index){		
									   if(obj["#name"]==="body"){
										angular.forEach(obj["#children"], function(obj, i){	
												dataObj.push(obj)
									  });
									}
								});
								return dataObj;
							}								
							$scope.object = $scope.buildJson();	
							console.log($scope.object)
							
							});
						}	
		






function getObject(theObject) {
    var result = null;
    if(theObject instanceof Array) {
        for(var i = 0; i < theObject.length; i++) {
            result = getObject(theObject[i]);			
        }
    }
    else {
        for(var prop in theObject) {                  
            if(theObject[prop] instanceof Object || theObject[prop] instanceof Array){			
                result = getObject(theObject[prop]);
			}
        }
    }	     
	 return result;
}





















   /*


*/