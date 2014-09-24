var app = angular.module('jg.knob', []);

var Directive = function(){
  var linker = function(scope, elm, attrs){
    elm.knob(scope);
    // FIXME I would like to do something like this but it isn't working
    // this.updateValue = function(){
    //   console.log(JSON.stringify(this.settings()));
    //   elm.trigger('configure', this.settings());
    // }
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
      angleArc:"=",
      value:"="
    }
  }
}

app.directive('jgKnob', Directive);
