//Michael Costantini
//December 17, 2018
//Snake Game Project
var w = 20;  //w global variable
var cols, rows;  //columns and rows global variable
var snake; //snake global variable
var food; //food global variable
var score = 0  //score starts at 0
var img;  //image global variable
var end = "false" //end global varibale
var start = "true"; //start global variable
//decides which part of the game you are in
var gameState = 1;  //gameState variable
function preload(){  //preload function
  img = loadImage('FilthyFrank.jpeg') //loads image
}
function setup(){ //setup function
  var cnv = createCanvas(800,800); //creates Canvas size
  cols = width/w; //columns is width/w
  rows = height/w; //rows is height/w
  cnv.position((windowWidth-width)/2,30); //position of canvas
  frameRate(17); //FPS
  background(0,0,0); //background is black
  snake = new Snake(createVector(floor(width/2), floor(height/2))); //new snake created
  var fx = floor(random(cols)) //random # of columns
  var fy = floor(random(rows)) //random # of rows
  food = new Food(createVector(fx*w, fy*w)); //creates new food

}
function draw(){ //draw function
  if(gameState === 1){ //Game State 1 starts game
    startGame(); //Game starts
  }else if(gameState === 2){ //Game State 2 plays game
    playGame(); //Game plays
  }else if(gameState === 3){ //Game State 3 ends game
    endGame(); //Game ends
  }
  for(var i = 0; i<snake.segments.length;i++){ //for loop for adding segments
    if(snake.segments[i].x > 790 || snake.segments[i].x<0 || snake.segments[i].y < 0 || snake.segments[i].y > 790){ //if statement when snake goes outside of canvas
      gameState=3; //Game State is 3, meaning GAME OVER!!!!!!!!
    }
}
}
function keyPressed(){ //keypressed function
  if(keyCode===UP_ARROW){ //sanke moves up
    snake.vel = createVector(0,-1*w);
  }
  if(keyCode === DOWN_ARROW){ //snake moves down
    snake.vel = createVector(0,1*w);
  }
  if(keyCode === RIGHT_ARROW){ //snake moves right
    snake.vel = createVector(1*w,0);
  }
  if(keyCode === LEFT_ARROW){ //snake moves left
    snake.vel = createVector(-1*w,0);
  }
  if (keyCode === 32 && score===0){
    gameState=2; //Game plays, State of game is 2
  }

}
function newFood(){ //newFood function
  var fx = floor(random(cols)) //random columns for food
  var fy = floor(random(rows)) //random rows for food
  for(var i = 0; i < snake.segments.length; i++){ //for loop for adding segments
    if(food.loc!=snake.segments[i].loc){ //food doesn't appear in snake
      food = new Food(createVector(fx*w, fy*w)); //creates vector for food obkect
    }
  }


 }

 function startGame(){ //start of game function
    if(start==="true" && score===0){ //score is 0
      image(img,250, 250) //position of image
      textFont('Lobster'); //font of text
      fill(255,0,0); //color of text
      textAlign(CENTER); //Allignment of the text in centered
      textSize(20); //size of the text
      text("Press space bar to be AWESOME",400,300) //Words
   }
 }
 function playGame(){// Game plays function

   background(0,0,0);//background is black
   snake.run(); //calls snake
   food.run(); //calls food
    fill(0,255,0)//color of score
    textSize(40); //size of score
    text(score, 100, 100); //position of score
 }
 function endGame(){ //endGame function
   if (gameState===3){ //if statement for game over
      image(img,250,250) //position of image
      textFont('Lobster'); //font of text
      fill(255,0,0); //color of text
      textAlign(CENTER);//allignment of the text is centered
      textSize(20); //size of text
      text("GAME OVER HA YOU LOST, HERE'S YOUR SCORE: " + score + ". REFRESH TO LOSE AGAIN",400,300)//words when game over
   }
 }
