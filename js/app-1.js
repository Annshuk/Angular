// JavaScript Document
var app = angular.module("single-page-app", ['ngRoute'], function(){
	 $rootScopeProvider.digestTtl(Infinity);
	});
	
    app.factory('JsonSvc', function ($http) {
	  return {
		  read: function(jsonURL, scope) {
			return $http.get(jsonURL).success(function (data, status) {				
					scope.data = data;  
					//$rootScope.$broadcast("jsonDone");				    
			});
		}};
	 });
	
	 app.factory('Page', function() {
	   var title = 'default';
	   return {
		 title: function() { return title; },
		 setTitle: function(newTitle) { title = newTitle }
	   };
	});
	 
	// configure our routes
    app.config(function($routeProvider) {
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
    });
	
	
	 //body data content
	app.directive('json', function($compile) {
		return {
			restrict: 'AE',
			scope: {databody: '=' },
			replace: true,
			transclude: true,			
			templateUrl : 'directive/dataContent.htm',
			/*link: function (scope, element, attrs) {
            scope.$watch('databody', function (newValue) {
                if (newValue !== undefined) {
					 console.log('newValuye =' +newValue)
					
                }
            });
           }*/
    	};
	});
	 //image content
	 app.directive('figureImg', function() {
    	return {
			restrict: 'AE',
			scope: { imgSoruce: '=' },
			replace: true,
			transclude: true,
			templateUrl : 'directive/imageContent.htm'
        }		
	});
	
	app.directive('headerData', function() {
		return {
			restrict: 'E',
			scope: { head: '=' },
			replace: true,
			transclude: true,
			templateUrl : 'directive/header.htm'
		};
	});
	//json control to get json data
	app.controller('mainController', PostAjax);		
	
	function PostAjax($scope, JsonSvc, Page){			
			var firstLevel='';				
			JsonSvc.read('data.json', $scope).then(function () {
					$scope.nestedObj = $scope.data["#children"][0]["#children"]; 	
							jsonObj =  $scope.nestedObj;								
							var dataObj = [], text, childData, string='';
								$scope.buildJson = function() {									
									angular.forEach(jsonObj, function(obj, index){		
									   if(obj["#name"]==="body"){
										angular.forEach(obj["#children"], function(obj, i){																	
											angular.forEach(obj, function(gobj, i){																	
											
										});
										});
									}
								});
								return dataObj;
							}								
							$scope.parseJson = $scope.buildJson();	
							});
						}	
		






/*
function getObject(theObject) {
    var result = null;
    if(theObject instanceof Array) {
        for(var i = 0; i < theObject.length; i++) {
            result = getObject(theObject[i]);			
        }
    }
    else
    {
        for(var prop in theObject) {
            //console.log(prop + ': ' + theObject[prop]);            
            if(theObject[prop] instanceof Object || theObject[prop] instanceof Array){			
                result = getObject(theObject[prop]);
			}
        }
    }
	
    return result;
}
*/




















   /*


*/