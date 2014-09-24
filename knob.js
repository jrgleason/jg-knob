var app = angular.module('jg.knob', []);

var Directive = function(){
  var linker = function(scope, elm, attrs){
    this.settings = function() {
      return {
        "displayInput": scope.displayInput,
        "cursor": scope.cursor,
        "width": scope.width,
        "min": scope.min,
        "max": scope.max,
        "step": scope.step,
        "angleOffset": scope.angleOffset,
        "lineCap": scope.linecap,
        "fgColor": scope.fgColor,
        "angleArc": scope.angleArc
      }
    }
    elm.knob(this.settings());
    scope.$watch('value', function() {
      if (typeof scope.value !== 'undefined') {
        elm.val(scope.value).trigger('change');
      }
    });
    scope.$watch('min', function() {
      if (typeof scope.min !== 'undefined') {
        elm.trigger(
          'configure', {
            "min": scope.min
          }
        );
      }
    });
    scope.$watch('max', function() {
      if (typeof scope.max !== 'undefined') {
        elm.trigger(
          'configure', {
            "max": scope.max
          }
        );
      }
    });
  }
  return {
    restrict: 'AE',
    link:linker,
    scope:{
      displayInput:"=",
      cursor:"=",
      width:"=",
      min:"=",
      max:"=",
      step:"=",
      lineCap:"=",
      angleOffset:"=",
      linecap:"=",
      fgColor:"=",
      angleArc:"="
    }
  }
}

app.directive('jgKnob', Directive);
