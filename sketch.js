var player;
var bubbles =[];
function setup() {
  createCanvas(800,800);
  player = createSprite(400, 300, 20, 20);

}

function draw() {
  background(255,255,255);

  if(var i =0, i<500, i++){
bubbles[i]= new Bubble();
  }
  
 if(keyDown("RIGHT_ARROW")){
   player.velocityX= 03;
 }
 
    
 drawSprites();
}