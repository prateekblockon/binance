app.controller("ratesCtr",function($scope,$rootScope,$translate,$http){
	$rootScope.curPage='Rates';
	$rootScope.webtitle=$translate.instant('Fee Structure on Binance');

	

	 
	 
	 $scope.getAllAsset=function(){
	       var config = {
	                 method: 'get',
	                 url: '/assetWithdraw/getAllAsset.html'
	             };
	        $http(config).success(function(data){

	        	$scope.asset=data
	            
	        })
	 }
	$scope.getAllAsset()
	




	
}


)
