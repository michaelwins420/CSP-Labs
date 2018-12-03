//Michael Costantini

var w = 20;
var cols, rows; //color and row global variable
var snake; //snake global varaible
var score = 0; //score variable
var food; //food global variable


function setup(){
  var cnv = createCanvas(800, 800);
  cols = width/w;
  rows = height/w;
  cnv.position((windowWidth-width)/2, 30);
  frameRate(10);
  background(5, 5, 5);
  food = new Food(createVector(round(random(40))*w, round(random(40))*w), createVector(0,0)); //creates Food
  snake = new Snake(createVector(width/2, height/2), createVector(1, 0)); //creates Snake
  snake.segments.push(createVector(420,400)) //pushes segments of sanke

}

function draw(){
  background(5, 5, 5);
  snake.run();//call snake
  food.run();//call food
}

function keyPressed(){
  text(keyCode, 50,50);
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
