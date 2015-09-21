angular
	.module('myAngularApp').service('modelService', ['$interval', function($interval) {
  var stock= {
    name:'Infosys',
    price:100,
    time:new Date()
  }

  var StockPrice = [stock];
 
  function updatePrice() {
 
    if (StockPrice.length) {
      StockPrice.push({
        name:'Infosys',
        price:100,
        time:new Date()
  });
    }
  }

  $interval(updatePrice, 5000);

  this.getStockPrice= function() {
    return StockPrice;
  }
  
}]);