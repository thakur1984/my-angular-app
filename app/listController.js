angular
	.module('myAngularApp').controller('stockController',['$scope','modelService',function($scope,model){
		//$scope.stockList=model.getStockPrice();
		  model.getStockPrice().then((stockPrice)=>{
			$scope.stockList=stockPrice;	
		},fucntion(){
			
		});
		
	}]);