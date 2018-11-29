function Food(loc, vel){ //Food constructor function
  this.loc = loc;
  this.vel = vel;
  this.iscolliding = false

  this.run = function(){ //run fuction
    this.render();
    this.update();
  }

  this.update = function(){ //update function
    this.loc.x = constrain(this.loc.x, 0, width-w);
    this.loc.y = constrain(this.loc.y, 0 ,height-w);
    if(snake.segments[0].x === this.loc.x && //if statement for snake
      snake.segments[0].x === this.loc.x + w &&
      snake.segments[0].y === this.loc.y &&
      snake.seegments[0].y === this.loc.y + w){
        this.iscolliding = true
      }
    if(this.iscolliding === true){
    }
  }


    this.render = function(){ //render function
      fill(250, 0,0); //food is red
      rect(this.loc.x, this.loc.y, w, w)//shape of food
    }

}
