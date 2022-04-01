var box 
function setup() {
  createCanvas(800,800);
box = createSprite(200, 200, 30, 70)
box.shapeColor = "Red"




}

function draw() 
{
  background(30);
drawSprites()
if(keyDown("left")) {
 box.x = box.x - 5

}
if(keyDown("right")){
box.x = box.x + 5


}
if(keyDown("down")) {
box.y = box.y + 5


}
if(keyDown("up")) {
box.y = box.y - 5

}


}


 

