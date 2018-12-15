//Michael Costantini food.js
function Food(loc){//Food constructor function
  this.loc=loc; //loaction of food variable



  this.run = function(){ //runs update and render function
    this.update();
    this.render();
  }
  
  this.update = function(){ //update function
  }

  this.render = function(){ //render function
    fill(255,0,0)//color of food
    rect(this.loc.x, this.loc.y, w, w)//shape of food
  }
}
