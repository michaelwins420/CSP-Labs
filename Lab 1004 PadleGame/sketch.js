var paddle; //paddle variable
var balls = []; //array of boids
var numBalls = 3;
var score = 0;
//  This is a comment
//  The setup function function is called once when your program begins
function setup(){//setup function
  var cnv = createCanvas(800, 800); //canvas variable
  background(20, 20, 20); //creates background color
  cnv.position((windowWidth-width)/2, 30); //canvas position
  paddle = new Paddle(createVector(width/2, height - 200),//creates paddle
  color(255, 0, 0)
);
loadBalls(numBalls); //Loads 200 balls

}


//  The draw function is called @ 30 fps
function draw(){ //draw function
  background(20, 20, 20);
  textSize(14);
  text('Score', 50, 10);
  
  paddle.run(); //calls  function
  // for each ball call  run
  for(var i = 0; i < balls.length; i++){//for loop of balls
    balls[i].run(); //array of balls
  }

  for(var i = balls.length-1; i >= 0; i--){//for loop of splicing balls
    if(balls[i].isColliding()){//Calls Collision
      if(balls[i].vel.y < 0){
        numBalls+=3;
        loadBalls(numBalls);

      }
      score++;
      balls.splice(i, 1);//splices i amount of balls
      if(balls.length == 0 ){
        numBalls+=3;
        loadBalls(numBalls);
      }

    }

  }
}

function loadBalls(numBalls){ //loads number of balls
  balls = [];
  for(var i = 0; i < numBalls; i++){ //for loop of parameters
    var loc = createVector(random(width), random(100));//location variable
    var vel = createVector(random(-1,1), random(-1, 1));// velocity variable
    var col = color(random(255),random(255), random(255));//color variable
    var b = new Ball(loc,  vel, col); //Parameters of ball
    balls.push(b);//Pushes ball and its patameters

  }

}
