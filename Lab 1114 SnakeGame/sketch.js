//Michael Costantini
// Snake Project
var w = 20;
var cols, rows; //color and row global variable
var snake; //snake global varaible
//var score = 0; //score variable
var food; //food global variable


function setup(){ //setup function
  var cnv = createCanvas(800, 800);
  cols = width/w; //width/20
  rows = height/w; //height/20
  cnv.position((windowWidth-width)/2, 30);
  frameRate(20);//FPS
  background(5, 5, 5); //backgound of canvas
  snake = new Snake(createVector(floor(width/2), floor(height/2))); //Creates Snake
  var fx = floor(random(cols)) //horizontal coloumns variable
  var fy = floor(random(rows)) //vertical rows variable
  food = new Food(createVector(fx*w, fy*w)); //Creates Food

}

function draw(){
  background(5, 5, 5);
  snake.run();//call snake
  food.run();//call food
  fill(0,250,0) //color of text
  textSize(20); //size of text
  text(score, 50, 40); //score position
  if(snake.headloc.x === width-w || snake.headloc.x===20 || snake.headloc.y === 20 || snake.headloc.y === height-w){ //if statement that changes score
}
}

function keyPressed(){
  //text(keyCode, 50,50);
  if(keyCode === UP_ARROW){ //moves up
    snake.vel = createVector(0,-1*w)
  }
  if(keyCode === DOWN_ARROW){ //moves down
    snake.vel = createVector(0,1*w)
  }
  if(keyCode === LEFT_ARROW){ //moves left
    snake.vel = createVector(-1*w,0)
  }
  if(keyCode === RIGHT_ARROW){ //moves right
    snake.vel = createVector(1*w,0)
  }
}

function newFood(){
  var fx = floor(random(cols))
  var fy = floor(random(rows))
  food = new Food(createVector(fx*w, fy*w));
}
