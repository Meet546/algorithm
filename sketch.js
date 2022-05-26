var fixedRect,movingRect

function setup(){
  createCanvas(1200,800)
  fixedRect=createSprite(400,200,200,250)
  fixedRect.shapeColor="red"
  fixedRect.debug=true
  movingRect=createSprite(200,300,40,50)
  movingRect.shapeColor="blue"
  movingRect.debug=true
}

function draw(){
background("white")
console.log(fixedRect.x-movingRect.x)
movingRect.x=World.mouseX
movingRect.y=World.mouseY
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
&& fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
&& movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
&& fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
  movingRect.shapeColor="green"
  fixedRect.shapeColor="pink"
}
else{
  movingRect.shapeColor="blue"
  fixedRect.shapeColor="red"
}
drawSprites()
}