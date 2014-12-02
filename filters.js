angular.module('app.filters', []).
filter('asteriskFilter',[function() {
	return function(input) {
		if (!input) return;
	    var r = "";
	    for(i=0;i<input.length;i++) {
	        r+="*";
	    }
	    return r;
	};
}]).
filter('dotterFilter',[function() {
	return function(input,length) {
		var l = parseInt(length,10);
		if (!input) return;
	    var r = "";
	    if (input.length > l) {
	    	r = input.slice(0,l)+"...";
	    } else{
	    	r = input;
	    };
	    return r;
	};
}]).
filter('trustAsHtml', ['$sce', function($sce){
	return function(text) {
		if (angular.isDefined(text) && text !== "") {
			return $sce.trustAsHtml(text);
		} else{
			return "";
		}
	};
}]);
