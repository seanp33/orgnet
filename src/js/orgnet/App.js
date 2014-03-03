define([], function() {

  function App(container) {
    this._container = container;
  }

  App.prototype = {

    init: function() {
      this._stage = new PIXI.Stage(0x414241);
      this._renderer = PIXI.autoDetectRenderer(700, 700);
      this._container.appendChild(this._renderer.view);

      var background = new PIXI.Sprite(PIXI.Texture.Draw(function(canvas) {
        var r = 10; //radius
        canvas.width = 700;   //you need to specify your canvas width and height otherwise it'll have a size of 0x0 and you'll get an empty sprite
        canvas.height = 700;
        var ctx = canvas.getContext("2d");

        var grd = ctx.createRadialGradient(350, 350, 0, 350, 350, 700);
        grd.addColorStop(0, "#424343");
        grd.addColorStop(1, "#000000");

        // Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, 700, 700);
      }));

      this._stage.addChild(background);

      this._initBadge();
      requestAnimFrame(this._animate.bind(this));
    },

    _initBadge: function() {
      var texture = PIXI.Texture.fromImage("assets/img/orgnet_badge.png");
      var badge = new PIXI.Sprite(texture);
      badge.anchor.x = 0.5;
      badge.anchor.y = 0.5;
      badge.position.x = 350;
      badge.position.y = 350;
      this._stage.addChild(badge);
      badge.alpha = .5;
      new TWEEN.Tween(badge.alpha).to(1, 1000).start();
    },

    _animate: function() {
      TWEEN.update();
      requestAnimFrame(this._animate.bind(this));
      this._renderer.render(this._stage);
    }
  }

  return App;

});
