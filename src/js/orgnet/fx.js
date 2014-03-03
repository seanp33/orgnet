define([], function() {

  return {
    fadeIn: function(sprite, duration) {
      var start = {val: 0};
      var end = {val: 1};
      sprite.alpha = 0;
      var fade = new TWEEN.Tween(start).to(end, duration);
      fade.onUpdate(function() {
        sprite.alpha = start.val;
      });

      fade.start();
    }
  }
});