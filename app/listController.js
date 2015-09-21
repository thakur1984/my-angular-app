angular
	.module('myAngularApp').controller('stockController',['$scope','modelService',function($scope,model){
		$scope.stockList=model.getStockPrice();
	}]);