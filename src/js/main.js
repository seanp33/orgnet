// http://www.html5gamedevs.com/topic/518-hack-making-all-2d-drawing-functions-available-to-pixi/
PIXI.Texture.Draw = function(cb) {
  var canvas = document.createElement('canvas');
  if (typeof cb == 'function') cb(canvas);
  return PIXI.Texture.fromCanvas(canvas);
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
      var app = new App();
      app.init();
    })
  });
