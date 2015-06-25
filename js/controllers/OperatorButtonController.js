calculatorApp.controller('OperatorButtonController',['$rootScope', '$scope','OperatorButtonData',
	function($rootScope, $scope, OperatorButtonData){
	$scope.opdata = OperatorButtonData;
	$scope.evaluation = function(value){
		if(value == 'C'){
			$scope.$emit("myEvent",'');
		} else if(value == '='){
			value = eval($rootScope.myvalue);
			$scope.$emit("myEvent",value);
		} else{
			value = $rootScope.myvalue + value;
			$scope.$emit("myEvent",value);
		}
	}
	console.log($scope.data);
}]);