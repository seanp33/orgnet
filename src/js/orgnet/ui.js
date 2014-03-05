define([], function(){
  return {
    asButton:function(sprite, onCb, offCb){
      sprite.buttonMode = true;
      sprite.interactive = true;
      sprite.mousedown = sprite.touchstart = onCb;
      sprite.mouseup = sprite.touchend = sprite.mouseupoutside = sprite.touchendoutside = offCb;
      return sprite;
    }
  }
})