calculatorApp.controller('CalculatorController',function($scope,$rootScope){
	$rootScope.$on("myEvent",function(event, arg){
		$rootScope.myvalue = arg;
		$scope.$apply();
	})
})