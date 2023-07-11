var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e95242b3-5e69-426d-aecd-7a871d70e9ea","e04e38d2-8458-487e-a6bb-fe5358d3279e","1622ea4c-8df4-4b02-b3c8-438c754b1852","422a8256-0b7c-4e36-90d2-9bf71d325f82","c39acf57-9449-4b02-84e2-dc33ad31860f","f76af8b8-cff3-4a57-9295-f62ec5c67bb0","3328ab06-0faf-40eb-b82a-936cf45b7751"],"propsByKey":{"e95242b3-5e69-426d-aecd-7a871d70e9ea":{"name":"snake","sourceUrl":"assets/api/v1/animation-library/gamelab/DHUr9pQX3Hts6iuS8VMOwyysxYwEGrl5/category_animals/cobra.png","frameSize":{"x":397,"y":360},"frameCount":1,"looping":true,"frameDelay":2,"version":"DHUr9pQX3Hts6iuS8VMOwyysxYwEGrl5","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":397,"y":360},"rootRelativePath":"assets/api/v1/animation-library/gamelab/DHUr9pQX3Hts6iuS8VMOwyysxYwEGrl5/category_animals/cobra.png"},"e04e38d2-8458-487e-a6bb-fe5358d3279e":{"name":"zombie","sourceUrl":"assets/api/v1/animation-library/gamelab/NVWLyQ7eFA78l2aOE1XO4ZMdIKEXp338/category_fantasy/rpgcharacter_05.png","frameSize":{"x":214,"y":209},"frameCount":1,"looping":true,"frameDelay":2,"version":"NVWLyQ7eFA78l2aOE1XO4ZMdIKEXp338","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":214,"y":209},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NVWLyQ7eFA78l2aOE1XO4ZMdIKEXp338/category_fantasy/rpgcharacter_05.png"},"1622ea4c-8df4-4b02-b3c8-438c754b1852":{"name":"alien","sourceUrl":"assets/api/v1/animation-library/gamelab/qGpeJJg0r_caGeHtgyB2vvvKJBU6ApVC/category_fantasy/alien_14.png","frameSize":{"x":329,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"qGpeJJg0r_caGeHtgyB2vvvKJBU6ApVC","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":329,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qGpeJJg0r_caGeHtgyB2vvvKJBU6ApVC/category_fantasy/alien_14.png"},"422a8256-0b7c-4e36-90d2-9bf71d325f82":{"name":"kiki","sourceUrl":"assets/api/v1/animation-library/gamelab/hq.ucPtTaB_vNQ.1BzHOStATi0Xc_TG_/category_emoji/halloweenemoji_04.png","frameSize":{"x":370,"y":318},"frameCount":1,"looping":true,"frameDelay":2,"version":"hq.ucPtTaB_vNQ.1BzHOStATi0Xc_TG_","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":370,"y":318},"rootRelativePath":"assets/api/v1/animation-library/gamelab/hq.ucPtTaB_vNQ.1BzHOStATi0Xc_TG_/category_emoji/halloweenemoji_04.png"},"c39acf57-9449-4b02-84e2-dc33ad31860f":{"name":"dia","sourceUrl":"assets/api/v1/animation-library/gamelab/1ve8xcSUavvVvLC6Vl.mojAV9PqyYTDU/category_stickers/sticker_14.png","frameSize":{"x":246,"y":192},"frameCount":1,"looping":true,"frameDelay":2,"version":"1ve8xcSUavvVvLC6Vl.mojAV9PqyYTDU","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":246,"y":192},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1ve8xcSUavvVvLC6Vl.mojAV9PqyYTDU/category_stickers/sticker_14.png"},"f76af8b8-cff3-4a57-9295-f62ec5c67bb0":{"name":"kiko","categories":["emoji"],"frameCount":1,"frameSize":{"x":338,"y":300},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 18:59:34 UTC","pngLastModified":"2021-01-05 18:59:30 UTC","version":"clvDc51BL65KlQ1TLqNHEFdBqtxo3ODG","sourceUrl":"assets/api/v1/animation-library/gamelab/clvDc51BL65KlQ1TLqNHEFdBqtxo3ODG/category_emoji/cny_02.png","sourceSize":{"x":338,"y":300},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/clvDc51BL65KlQ1TLqNHEFdBqtxo3ODG/category_emoji/cny_02.png"},"3328ab06-0faf-40eb-b82a-936cf45b7751":{"sourceSize":{"x":500,"y":466},"frameSize":{"x":500,"y":466},"frameCount":1,"frameDelay":4,"name":"con","sourceUrl":"assets/v3/animations/NUrQ4UAjj6sVW6CmVPl8S8vJxuDZD66_HDqeKIzfNAs/3328ab06-0faf-40eb-b82a-936cf45b7751.png","size":25416,"version":"0k.xHZoLkqKzAuuiUfN5.Ehg.0ezgMi7","categories":[""],"looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/NUrQ4UAjj6sVW6CmVPl8S8vJxuDZD66_HDqeKIzfNAs/3328ab06-0faf-40eb-b82a-936cf45b7751.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var game_state=0; 
var bg;
  var b = createSprite(200,200,400,400);
  b.shapeColor="white";
  
  var c1 = createSprite(132,88,15,100);
  c1.shapeColor=("black");
  
  var c2 = createSprite(190,80,105,15);
  c2.shapeColor=("black");
  
  var c3 = createSprite(290,140,15,206);
  c3.shapeColor=("black");
  
  var c4 = createSprite(246,135,100,15);
  c4.shapeColor=("black");
  
  var c5 = createSprite(65,150,15,200);
  c5.shapeColor=("black");
  
  var c6 = createSprite(162,186,100,15);
  c6.shapeColor=("black");
  
  var c7 = createSprite(295,382,15,34);
  c7.shapeColor=("black");
  
  var c8 = createSprite(30,138,60,15);
  c8.shapeColor=("black");
  
  var c9 = createSprite(154,240,15,100);
  c9.shapeColor=("black");
  
  var c10 = createSprite(247.5,240,100,15);
  c10.shapeColor=("black");
  
  var c11 = createSprite(200,295,200,15);
  c11.shapeColor=("black");
  
  var c12 = createSprite(30,350,15,100);
  c12.shapeColor=("black");
  
  var c13 = createSprite(222,330,15,60);
  c13.shapeColor=("black");
  
  var c14 = createSprite(125,346,100,15);
  c14.shapeColor=("black");
  
  var c15 = createSprite(312.5,365,50,15);
  c15.shapeColor=("black");
  
  var c16 = createSprite(344,254,15,238);
  c16.shapeColor=("black");
  
  var c17 = createSprite(350,80,105,15);
  c17.shapeColor=("black");
  
  
  var snake = createSprite(251,160,5,5);
  snake.setAnimation("snake");
  snake.scale="0.1";
  snake.velocityX=3.8;
  
  
  var alien = createSprite(100,320);
  alien.setAnimation("alien");
  alien.scale="0.1";
  alien.velocityX=4.2;
  
  
  var player = createSprite(30,20,20,20);
  player.setAnimation("kiki");
  player.scale=0.1;
  
  
  var zombie = createSprite(157,107);
  zombie.setAnimation("zombie");
  zombie.scale=0.16;
  zombie.velocityX=4.5;
  
  var cup = createSprite(375,375);
  cup.setAnimation("dia");
  cup.scale=0.15;




fill(rgb(1002, 0, 0));
function draw(){
  background("white");
  createEdgeSprites();
  player.collide(edges);

    
  
  alien.bounceOff(c12);
  alien.bounceOff(c13);
  snake.bounceOff(c3);
  snake.bounceOff(c5);
  player.bounceOff(c1);
  player.bounceOff(c2);
  player.bounceOff(c3);
  player.bounceOff(c4);
  player.bounceOff(c5);
  player.bounceOff(c6);
  player.bounceOff(c7);
  player.bounceOff(c8);
  player.bounceOff(c9);
  player.bounceOff(c10);
  player.bounceOff(c11);
  player.bounceOff(c12);
  player.bounceOff(c13);
  player.bounceOff(c14);
  player.bounceOff(c15);
  player.bounceOff(c16);
  player.bounceOff(c17);
  zombie.bounceOff(edges);
  zombie.bounceOff(c1);
  
 
 
 if (game_state===0){
   player_moving();
   out();
   win();
   
 }
 
 if (game_state===1){
   end();
  
 }
  
  
  drawSprites();
  }




function player_moving(){
  
  
  if(keyDown("up")){
    player.velocityY=-3;
    player.velocityX=0;
  }
  
  if(keyDown("down")){
    player.velocityY=3;
    player.velocityX=0;
  }
  
  if(keyDown("left")){
    player.velocityX=-3;
    player.velocityY=0;
  }
  
  if( keyDown("right")){
    player.velocityX=3;
    player.velocityY=0;
  }
  
  
}


function out (){
  
  if(player.isTouching(snake)){
    player.x=30;
    player.y=20;
  }
  if(player.isTouching(alien)){
    player.x=30;
    player.y=20;
  }
   if(player.isTouching(zombie)){
    player.x=30;
    player.y=20;
  }
}

function win (){
  
  if(player.isTouching(cup)){
    game_state=1;
 }
  
}

function end (){
  
  bg  = createSprite(200,200,400,400);
  bg.shapeColor="black";
  var co = createSprite(200,100);
  co.setAnimation("con");
  co.scale=0.3;
  var kiki = createSprite(120,250);
  kiki.setAnimation("kiko");
  kiki.scale=0.4;
  var dia = createSprite(310,250);
  dia.setAnimation("dia");
  dia.scale=0.5;
  
}

  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
