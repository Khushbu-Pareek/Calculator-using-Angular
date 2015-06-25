calculatorApp.directive('numericButtonView', function(){
	return {
		restrict: 'E',
		controller: 'NumericButtonController',
		scope: {
            type: "@",
            value: "@"
        },
		template: '<button class={{type}}>{{value}}</button>',
		link: function (scope, element, attrs, NumericButtonController) {
            element.on("click", function(e) {
                //Call display
                scope.value = e.target.innerText;
                scope.updateDisplay(scope.value);
            });
        }
	}
});