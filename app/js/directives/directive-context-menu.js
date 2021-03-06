angular.module('app').directive('contextMenu', ['$parse', function($parse) {
  return function(scope, element, attrs) {
    var fn = $parse(attrs.contextMenu);

    element.bind('contextmenu', function(e) {
      scope.$apply(function() {
        e.preventDefault();
        fn(scope, { $event: e });
      });
    });
  };
}]);
