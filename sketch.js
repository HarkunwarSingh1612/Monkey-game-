
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var food, FoodGroup, obstacleGroup, obstacle, foodImage, obstacleImage;
var score=0;
var ground;
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  foodImage= loadImage("banana.png");
  obstacleImage= loadImage("obstacle.png");
}



function setup() {
  createCanvas(600,400);
  monkey= createSprite(50,330,10,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,1200,10);
  ground.velocityX = -4;
  ground.x= ground.width/2;
  console.log(ground.x);
  
  FoodGroup= createGroup();
  obstacleGroup= createGroup();
}


function draw() {
background("white");

   monkey.velocityY = monkey.velocityY + 0.8
  if(ground.x < 0){
     ground.x =  ground.width /2;
  }
  
  if(keyDown("space") ) {
        monkey.velocityY = -12;
       
    }
  
  if(obstacleGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    obstacleGroup.destroyEach();
    ground.destroy();
    monkey.destroy();
    food.destroy();
    
    //banana.destroy();
    
  }
  
  if(FoodGroup.isTouching(monkey)){
    score=score+1;
    FoodGroup.destroyEach();
  }
  
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Score:"+score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime, 100, 50);
    
  monkey.collide(ground);
  foodGroups();
  obstacleGroups();
  drawSprites();
}

function foodGroups(){
  if (frameCount % 80 === 0) {
    food=createSprite(600,120,40,10);
    food.y = Math.round(random(120,200));
    food.addImage(foodImage);
    food.velocityX=-3;
    food.lifetime= 200;
    food.scale=0.1;
    FoodGroup.add(food);
}
}
function obstacleGroups(){
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,330,10,40);
   obstacle.velocityX = -(6 + score/100);
   obstacle.addImage(obstacleImage);
    var rand = Math.round(random(1,6));
    
     obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
}
}





