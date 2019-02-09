var app = angular.module('myApp', []);

app.factory('myFctry', function($http) {
	var factory = {};

	factory.getAll = function() {
		return $http({
	    	method : 'GET',
	    	url : "http://localhost:3000/tasks"
		})
	}

	factory.add = function(params) {
		return $http({
	    	method : 'POST',
	    	url : "http://localhost:3000/tasks",
	    	data: params,
    		headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		})
	}

	factory.delete = function(id) {
		path = "http://localhost:3000/tasks/" + id + "/delete";
		return $http({
	    	method : 'POST',
	    	url : path
		})
	}

	factory.edit = function(id, params) {
		path = "http://localhost:3000/tasks/" + id + "/edit";
		return $http({
	    	method : 'POST',
	    	url : path,
	    	data: params,
    		headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		})
	}

	return factory;
});


app.controller('myCtrl', function($scope, myFctry) {

  	$scope.taskArray = [];
  	$scope.formData = {};
  	$scope.formData1 = {};

	myFctry.getAll().then(function success(response) {
	    $scope.taskArray = response.data;
	}, function error(response) {
	    $scope.taskArray = response.statusText;
	});
	
  	$scope.add = function() {
  		myFctry.add($.param($scope.formData)).then(function success(response) {
		    $scope.taskArray = response.data;
		}, function error(response) {
		    $scope.taskArray = response.statusText;
		});
	}

	$scope.delete = function(id) {
		myFctry.delete(id).then(function success(response) {
		    $scope.taskArray = response.data;
		}, function error(response) {
		    $scope.taskArray = response.statusText;
		});
	}

	$scope.edit = function(id) {
		$("."+id).hide();
		$(".xx"+id).show();
	}

	$scope.done = function(id) {
		$("."+id).show();
		$(".xx"+id).hide();

		myFctry.edit(id, $.param($scope.formData1)).then(function success(response) {
		    $scope.taskArray = response.data;
		}, function error(response) {
		    $scope.taskArray = response.statusText;
		});
		$scope.formData1.subject = "";
		$scope.formData1.detail = "";
	}
});