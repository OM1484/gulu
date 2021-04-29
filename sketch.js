var Score=0
function preload(){
dum = loadImage("dummy-removebg-preview.png")
gen = loadImage("gen.png")
guddu = loadImage("guddu.png")
ob=loadImage("shigaraki.jpg") 



}

function setup() {
  createCanvas(displayWidth-30,displayHeight-110);
 dum1= createSprite(100, 80, 50, 50);
 dum1.addImage(dum)
 dum1.scale=0.3
 dum2= createSprite(100, 290, 50, 50);
 dum2.addImage(dum)
 dum2.scale=0.3  
 dum3= createSprite(100, 520, 50, 50);
 dum3.addImage(dum)
 dum3.scale=0.3 
 
 shooter=createSprite(width-130,height/2)
 shooter.addImage(gen)
 shooter.scale=0.4
 shooter.rotation=360

 edges=createEdgeSprites();
 bulletg=createGroup()
 obg=createGroup()
}


function draw() {
  background(0);  
  fill("white")
  textSize(25)
text("Score: "+Score,width-180,50)
shooter.velocityY=0;
if(bulletg.isTouching(dum1)||bulletg.isTouching(dum2)||bulletg.isTouching(dum3)){
  bulletg.destroyEach()
  Score++
}
if(keyDown("UP")){
shooter.velocityY=-3
}

if(keyDown("DOWN")){
  shooter.velocityY=3
  }

shooter.collide(edges)

if(keyDown("enter") && frameCount%4===0){
  bullet=createSprite(shooter.x-130,shooter.y+10)
  bullet.addImage(guddu)
  bullet.velocityX=-16
  bullet.scale=0.06
  bulletg.add(bullet)
}
obsticle()

if(bulletg.isTouching(obg)){
  bulletg.destroyEach()
}

  drawSprites();
}
function obsticle(){
  if(frameCount%30===0){
    obs=createSprite(random(250,width-350),0)
obs.addImage(ob)
obs.velocityY=+9
obs.scale=0.2
obg.add(obs)
obs.lifetime=width/9
  }
}