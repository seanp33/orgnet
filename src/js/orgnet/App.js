define(
  [
    'orgnet/fx',
    'orgnet/ui'
  ],

  function(fx, ui, ViewManager) {

    function App(container) {
      this._container = container;
    }

    App.prototype = {

      init: function() {
        this._stage = new PIXI.Stage(0x414241);
        this._renderer = PIXI.autoDetectRenderer(700, 700);
        this._container.appendChild(this._renderer.view);
        this._initBackground();
        this._initBadge();
        requestAnimFrame(this._animate.bind(this));
      },

      _initBackground: function() {
        var background = new PIXI.Sprite(PIXI.Texture.Draw(function(canvas) {
          canvas.width = 700;
          canvas.height = 700;
          var ctx = canvas.getContext("2d");

          var grd = ctx.createRadialGradient(350, 350, 0, 350, 350, 700);
          grd.addColorStop(0, "#424343");
          grd.addColorStop(1, "#000000");

          ctx.fillStyle = grd;
          ctx.fillRect(0, 0, 700, 700);
        }));

        this._stage.addChild(background);
      },

      _initBadge: function() {
        var badge = new PIXI.Sprite(PIXI.Texture.fromImage("assets/img/orgnet_badge.png"));
        badge.position.x = 331;
        badge.position.y = 331;

        ui.asButton(badge, function(data){
          fx.fadeOut(badge);
        });

        this._stage.addChild(badge);
        fx.fadeIn(badge);
      },

      _animate: function() {
        requestAnimFrame(this._animate.bind(this));
        TWEEN.update();
        this._renderer.render(this._stage);
      }
    }

    return App;

  });
