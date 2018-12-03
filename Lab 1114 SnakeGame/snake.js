function Snake(loc, vel, length) {

  this.loc = loc; //location property
  this.segments = []; //segments of snake
  this.length = length; //length of snake
  this.vel = vel; //velocity property

  this.setVel = function(vel) {
    if(this.vel.y > 0 && vel.y < 0) {
      //snake can't go down when pressed up
    }
    else if(this.vel.y < 0 && vel.y > 0) {
      //snake can't go up when pressed down
    }
    else if(this.vel.x < 0 && vel.x > 0) {
      //snake can't go left when pressed right
    }
    else if(this.vel.x > 0 && vel.x < 0) {
      //snake can't go right when pressed left
    }
    else {
      this.vel = vel;
      console.log(vel);
      this.vel.mult(w);
    }
  }

  this.run = function() {
    this.checkEdges();
    this.update();
    this.render();
  }

  this.checkEdges = function() {
    if(this.loc.x == food.loc.x && this.loc.y == food.loc.y) {
      console.log("food");
      this.length += 1;
      food.randomize(); //randomizes location of food
    }
  }

  this.update = function() {
    let headLoc = createVector(this.loc.x, this.loc.y);
    this.segments.push(headLoc); //pushed the segments
    if(this.segments.length > this.length) { //if statement when length of segmenths is greater than snake
      let remove = this.segments.shift(); //removes segment
      fill(0, 0, 0);
      rect(remove.x, remove.y, w, w); //removes one segment when sanke moves
    }
    console.log(this.segments);
    this.loc.add(this.vel); //adds location to velocity

    this.loc.x = constrain(this.loc.x, 0, width-w); //contrain x segments
    this.loc.y = constrain(this.loc.y, 0, height-w); //constrain y segments
  }

  this.render = function(){
    fill(0,255,0);
    rect(this.loc.x, this.loc.y, w, w)
  }

  this.setVel(vel);
  this.render();
}
