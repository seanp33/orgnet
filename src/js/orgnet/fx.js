define(['lodash'], function(_) {

  var ALPHA_0 = {val: 0};
  var ALPHA_1 = {val: 1};

  return {
    fadeIn: function(sprite, duration, done) {

      sprite.alpha = 0;

      var fade = new TWEEN.Tween(ALPHA_0).to(ALPHA_1, duration);

      fade.onUpdate(function() {
        sprite.alpha = ALPHA_0.val;
      });

      if (_.isFunction(done)) {
        fade.onComplete(function() {
          done();
        });
      }

      fade.start();
    },

    fadeOut: function(sprite, duration, done) {

      sprite.alpha = 0;

      var fade = new TWEEN.Tween(ALPHA_1).to(ALPHA_0, duration);

      fade.onUpdate(function() {
        sprite.alpha = ALPHA_0.val;
      });

      if (_.isFunction(done)) {
        fade.onComplete(function() {
          done();
        });
      }

      fade.start();
    }
  }
});