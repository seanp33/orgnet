// http://www.html5gamedevs.com/topic/518-hack-making-all-2d-drawing-functions-available-to-pixi/
PIXI.Texture.Draw = function(cb) {
  var canvas = document.createElement('canvas');
  if (typeof cb == 'function') cb(canvas);
  return PIXI.Texture.fromCanvas(canvas);
}

// Function.prototype.bind polyfill https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    if (typeof this !== "function") {
      // closest thing possible to the ECMAScript 5 internal IsCallable function
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
      fToBind = this,
      fNOP = function() {
      },
      fBound = function() {
        return fToBind.apply(this instanceof fNOP && oThis
          ? this
          : oThis,
          aArgs.concat(Array.prototype.slice.call(arguments)));
      };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}

require.config({
  paths: {
    'requirejs': 'lib/requirejs',
    'signals': 'lib/signals'
  }
});

require(
  [
    'orgnet/App',
    'requirejs/ready'
  ],

  function(App, ready) {
    ready(function() {
      var app = new App(document.getElementById("container"));
      app.init();
    })
  });
