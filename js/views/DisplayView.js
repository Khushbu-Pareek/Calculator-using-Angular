calculatorApp.directive('displayView', function(){
	return {
		restrict: 'E',
		 scope: {
            value: "@"
         },
   // replace:true,
		template: '<input class="display" type="text" value={{value}} readonly="readonly"/>',

	}
});