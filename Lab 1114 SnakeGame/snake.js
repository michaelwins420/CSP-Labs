function Snake(loc, vel){ //Snake constructor function
  this.vel = vel;
  this.segments = [];
  this.segments[0] = loc;
  this.run = function(){
    this.update();
    this.render();
  }

  this.update = function(){
    this.segments[0].add(this.vel);
    this.segments[0].x = constrain(this.segments[0].x, 0, width-w);
    this.segments[0].y = constrain(this.segments[0].y, 0 ,height-w);
    if(food.iscolliding === true){

    }
    for(var i = this.segments.length-1; i > 0; i--){
      this.segments[i].x = this.segments[i-1].x;
      this.segments[i].y = this.segments[i-1].y;
    }
  }

  this.render = function(){
    for(var i = 0; i < this.segments.length; i++){
      fill(0,255,0);
      rect(this.segments[i].x, this.segments[i].y, w, w);
    }
  }
}
