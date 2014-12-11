angular.module('app.directives', []).
/**
 * ## svgLoadingspin
 * ### Dircetive that show and arch spinning in SVG
 *
 * #### Example:
 *
 *	<svg fill="white" height="25px" width="25px" viewBox="0 0 38 38">
 *		<svg-loadingspin></svg-loadingspin>
 *	</svg>
 *
 */
directive('svgLoadingspin', [function () {
  return {
    templateNamespace: 'svg',
    template: '<g><path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/><path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"><animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="1s" repeatCount="indefinite" /></path></g>',
    restrict: 'E',
    replace: true
  };
}]);