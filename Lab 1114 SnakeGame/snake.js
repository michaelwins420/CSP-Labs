function Snake(headloc,vel){ //Snake contructor function
  this.headloc = headloc;
  this.vel = vel;
  this.segments = [];
  this.segments.push(createVector(0,0));

  this.run = function(){
    this.update();
    this.render();
  }
  this.update = function(){
    this.segments[0].x = this.headloc.x //0 segments is the head
    this.segments[0].y = this.headloc.y //0 segments is the head
    this.headloc.add(this.vel); //adds location to velocity
    this.headloc.x = constrain(this.headloc.x, 0, width-w) //constains location for width
    this.headloc.y = constrain(this.headloc.y, 0, height-w) //constains location for height


    //for loop will move the segments
      for (var i =this.segments.length-1;i>=1;i--){ //for loop for creating segments
        this.segments[i].x=this.segments[i-1].x;
        this.segments[i].y=this.segments[i-1].y;
  }
    if(this.headloc.dist(food.loc) === 0) {
       this.segments.push(createVector(this.segments[this.segments.length-1].x+w, this.segments[this.segments.length-1].y)); //pushes the segments
       //this.segments[this.segments.length-1].loc
      score++; //adds to the score
      newFood();



    }

  }
  this.render = function(){
    fill(0,255,0) //color of snake
    rect(this.headloc.x, this.headloc.y, w, w); //snake is a rectangle
     for(i=1;i<=this.segments.length-1;i++){ //for loop for removing segments
       rect(this.segments[i].x,this.segments[i].y,w,w)
    }

  }
}
