var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":12,"version":"QlWjSDSHKelVdIScOnvX.Ud0NP_kcy0s","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"a6keYKt8vQUWxDfqcWXcRB0K6YeShkga","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"a542XsORzq2PSRRuuzN_p6GgfzvOXtdC","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"}}};
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

var player = createSprite(75,365,20,50);
player.setAnimation("monkey");
player.scale=0.1;
player.setCollider("circle",0,0,30);

var ground = createSprite(400,395,800,5);
ground.velocityX=-4;
ground.x=ground.width/2;

var invisibleGround = createSprite(400,395,800,5);
invisibleGround.visible = false;

var obstaclegroup = createGroup();
var bananagroup = createGroup();

var count=0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var obstaclesGroup = createGroup();
var survivaltime=0;
stroke("black");
//var frameCount = 0;
//var frameRate = 0;

function draw() {
 background(255);
if(gameState===PLAY){
   ground.velocityX = -(6 + 3*count/100);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }

   if(keyDown("space") && player.y >=  359){
      player.velocityY = -15 ;
    }
  // survivaltime = Math.ceil(frameCount/frameRate());
    //text("survivaltime:"+survivaltime,100,50);
   }
   player.velocityY = player.velocityY + 0.8;
   spawnObstacles();
   spawnbanana();
  
  player.collide(invisibleGround);
drawSprites();  
}


function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = - (6 + 3*count/100);
  
    var rand = randomNumber(1);
    obstacle.setAnimation("Stone");
  
    obstacle.scale = 0.15;
    obstacle.lifetime = 70;
   
    obstaclesGroup.add(obstacle);
  }
}

function spawnbanana(){
  if(World.frameCount % 80 === 0){
  var banana = createSprite(400,320,40,10);
  banana.velocityX = -(6 + 3*count/100);
  var random = randomNumber(1);
  banana.setAnimation("Banana");
  banana.scale=0.05;
  banana.lifetime = 70;
  bananagroup.add(banana);
}
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
