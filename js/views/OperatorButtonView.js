calculatorApp.directive('operatorButtonView', function(){
	return {
		restrict: 'E',
		controller: 'OperatorButtonController',
		scope: {
            type: "@",
            value: "@"
        },
		template: '<button class={{type}}>{{value}}</button>',
		link: function (scope, element, OperatorButtonController, $rootScope) {
            element.on("click", function(e) {
                 //Call display
                 scope.value = e.target.innerText;
                 scope.evaluation(scope.value);
            });
        }
	}
});