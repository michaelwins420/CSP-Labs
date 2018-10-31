function Bar(height, width, loc, col){ //Bar constructor function
  this.height = height
  this.width = width
  this.loc = loc
  this.col = color

  this.run = function(){

    this.render();
  }

  this.render = function(){
    fill(col);
    ellipse(this.loc.x, this.loc.y, width, height);//Bars are ellipses
  }
}
