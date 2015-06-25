calculatorApp.controller('NumericButtonController', ['$scope','$rootScope',  'NumberButtonData',
	function($scope,$rootScope, NumberButtonData){
	$scope.numdata = NumberButtonData;
	$scope.updateDisplay = function(value){
		value = $rootScope.myvalue + value;
		$scope.$emit("myEvent",value);
	}
	console.log($scope.data);
}]);