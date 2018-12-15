//Michael Costantini snake.js
function Snake(headloc,vel){ //Snake constructor function
  this.headloc = headloc; //represents location of head of snake
  this.vel = vel; //velcoty varaible
  this.segments = []; //segments variable
  this.segments.push(createVector(0,0));//creates vector for segments

  this.run = function(){ //runs update, render, and combine function
    this.update();
    this.render();
    this.combine();
  }
  this.update = function(){ //updtae function
    this.segments[0].x = this.headloc.x //head has 0 segments for x-axis
    this.segments[0].y = this.headloc.y//head has 0 segments for y-axis
    this.headloc.add(this.vel); //adds location of head to velocity of snake
      for (var i =this.segments.length-1;i>=1;i--){//for loop for creating segments
        this.segments[i].x=this.segments[i-1].x; //adds segments for x-axis
        this.segments[i].y=this.segments[i-1].y; //adds segments for y-axis
  }

    if(this.headloc.dist(food.loc) === 0) { //detects when head of snake hits food
       this.segments.push(createVector(this.segments[this.segments.length-1].x+w, this.segments[this.segments.length-1].y));//creates vector for additional segments
      score++; //score goes up 1 when head of snake hits food
      newFood();//new food spawns
    }
  }
  this.render = function(){ //render function
    fill(0,255,0) //color of snake
    rect(this.headloc.x, this.headloc.y, w, w); //shape of snake
     for(i=1;i<=this.segments.length-1;i++){ //for loop for erasing segments after specific amount of time
       rect(this.segments[i].x,this.segments[i].y,w,w) //shape of segments
    }
  }
  this.combine = function(){ //combine function
    if(this.segments.length!=1&&this.segments.length!=2&&this.segments.length!=3){ //if statement for snake hitting itself when score is 1, 2, or 3, nothing happens
      for(var i = 1; i<this.segments.length;i++){//for loop for overlapping segments
        if(this.headloc.x===this.segments[i].x && this.headloc.y===this.segments[i].y){//if statement for when head of snake hits body
          gameState=3; //Game over happens when head combines with body
      }
    }
  }
}
}
