engular.module('jg.knob', []);

var Directive = function(){
  var linker = function(scope, elm, attrs){
    elm.knob({
      displayInput : scope.displayInput,
      cursor: scope.cursor,
      width: scope.width,
      min:scope.min,
      max:scope.max,
      step:scope.step,
      angleOffset: scope.angleOffset,
      linecap:scope.linecap,
      fgColor:scope.fgColor,
      angleArc:scope.angleArc
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
