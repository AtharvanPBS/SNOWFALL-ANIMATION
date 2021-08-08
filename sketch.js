const engine=Matter.engine
const Render=Matter.Render
const world=Matter.world
function preload() {
  
  snowImage=loadAnimation("snow1.jpg","snow2.jpg","snow3.jpg",);
 
}
function setup() {
  createCanvas(800,400);
  snow=createSprite(400, 200, 50, 50);
  snow.addAnimation("snowImage",snowImage)
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}