angular.module('app.filters', []).
/**
 * ## Documantation for filters
 * ### asteriskFilter
 * Filters that hides a text and replace it with *
 *
 */
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
/**
 * ### dotterFilter
 * Filters that replace the exeding characters after a certein length with "..."
 *
 */
filter('dotterFilter',[function() {
	return function(input,length) {
		var l = parseInt(length,10);
		if (!input) return;
		var r = "";
		if (input.length > l) {
			r = input.slice(0,l)+"...";
		} else{
			r = input;
		}
		return r;
	};
}]).
/**
 * ### trustAsHtml
 * Filters that return trust html
 *
 */
filter('trustAsHtml', ['$sce', function($sce){
	return function(text) {
		if (angular.isDefined(text) && text !== "") {
			return $sce.trustAsHtml(text);
		} else{
			return "";
		}
	};
}]);
