angular
	.module('myAngularApp').service('modelService', ['$timeout', '$q',function($timeout,$q) {
  var stock= {
    name:'Infosys',
    price:100,
    time:new Date()
  }

  var StockPrice = [];
 
  function updatePrice() {
      StockPrice.push({
        name:'Infosys',
        price:100,
        time:new Date()
  });
 
  }


  //$interval(updatePrice, 5000);

  this.getStockPrice= function() {
    var deferred = $q.defer();
       updatePrice();
       $timeout(function(){
          deferred.resolve(StockPrice);
       }, 5000);
     
    
   return deferred.promise;
  }
  
}]);