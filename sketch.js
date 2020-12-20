var paddle
var food

var bomb
var ball
var edges
var gameState = "Start"



function setup() {
  createCanvas(400,400);
  paddle = createSprite(200,300,50,10)
   
  
  ball = createSprite(200,200,10,10);
  edges = createEdgeSprites()

}

function draw() {   
  background(255,255,255); 

 

  if(gameState === "play") {
  if(keyDown(UP_ARROW)){
    paddle.y = paddle.y-5
  }
  if(keyDown(DOWN_ARROW)){  
    paddle.y = paddle.y + 5
  }
  if(keyDown(LEFT_ARROW)){
    paddle.x = paddle.x - 5

  }
  if(keyDown(RIGHT_ARROW)){
    paddle.x = paddle.x + 5
  }
 
}


  if(keyDown("SPACE")&& gameState === "Start"){
    var r = Math.round(random(1,2))
    switch(r){
    case 1:
    ball.velocityX = 3
    ball.velocityY = 3
    break;

    case 2:
      ball.velocityX = -3
      ball.velocityY = 3
      break;
    
    }
    gameState = "play"
  }
  if(gameState === "play"){

  }
  
  ball.bounceOff(edges);
  ball.bounceOff(paddle);
 targetspawn();

  
  drawSprites();

}

  


function targetspawn(){
 
  food = createSprite(rand,rand,20,20)

  if(ball.isTouching(food)){
    food.x = rand
    console.log(food.x)
    food.y = rand
    food.width = 20
    food.height = 20

  }
}
