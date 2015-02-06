angular.module('app.directives', []).
/**
 * ## Documantation for directives
 * ### svgLoadingspin
 * Dircetive that show an arch spinning in SVG
 *
 * #### Example:
 *	<svg fill="white" height="25px" width="25px" viewBox="0 0 38 38">
 *		<svg-loadingspin></svg-loadingspin>
 *	</svg>
 */
directive('svgLoadingspin', [function () {
  return {
    templateNamespace: 'svg',
    template: '<g><path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/><path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"><animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="1s" repeatCount="indefinite" /></path></g>',
    restrict: 'E',
    replace: true
  };
}])
/**
 * ## Documantation for directives
 * ### isotopeNg
 * Dircetive that will sort a list (collection) based on the data-order attribute
 *
 * #### Example:
 *	<div isotope-ng isotope-list="list"...
 *    <div data-order="{{item.order}}" ng-repeat="item in list track by item.name">
 * 
 *	
 */
.directive('isotopeNg', ['$timeout',function($timeout) {
    return {
        restrict: 'A',
        scope: {
            isotopeList: "=isotopeList" // focusWhenDelay is necessary if you want to set a delay
        },
        link: function(scope, element, attrs, ngModel) {

          var resultBox = angular.element(element);

          function isotopeInit(resultBox) {
            if(!resultBox.hasClass('isotope')){
              resultBox.isotope({
                animationEngine: 'best-available',
                itemSelector:'.result-row',
                containerStyleObject: {
                  position: 'relative',
                  overflow: 'hidden'
                },
                layoutMode: 'straightDown',
                getSortData: {
                  order : function($elem) {
                    return parseInt($elem.attr("data-order"),10);
                  },
                  // mo : function($elem) {
                  //  return parseInt($elem.attr("data-mo"),10);
                  // },
                  // category : function($elem) {
                  //   return parseInt($elem.attr("data-category"),10);
                  // },
                  // price : function($elem) {
                  //   return parseInt($elem.attr("data-price"),10);
                  // }
                }
              });
            }
            resultBox.isotope();
          }

          function isotopeSort(resultBox) {
            if (typeof resultBox !== "undefined") {
              $timeout(function() {
                resultBox.isotope('reloadItems');
                resultBox.isotope({ sortBy : ['order']});
              },100);
            }
          }

          scope.$watch('isotopeList',function(value) {
            isotopeSort(resultBox);
          });

          isotopeInit(resultBox);

        }
    };
}]);
