/*
//   Name of project
//   Miguel
//   Date 101718
//
*/


//Ball constructor function
function Ball(loc, vel,  col){
	this.loc = loc;
	this.vel = vel;
	this.col = col;
	this.acc = createVector(0, .2);

	//This function calls other functions
	this.run = function(){
		this.checkEdges();
		this.update();
		this.render();
	}

	this.update = function(){
		this.vel.add(this.acc);//adds velocity to acceleration
		this.loc.add(this.vel);//adds location to velocity
	}

	this.checkEdges = function(){
		if(this.loc.x < 0) this.vel.x = -this.vel.x;
		if(this.loc.x > width) this.vel.x = -this.vel.x;
		if(this.loc.y < 0) this.vel.y = -this.vel.y;
		if(this.loc.y > height) this.vel.y = -this.vel.y;
	}

	this.render = function(){
		fill(this.col);//gives ball color
		ellipse(this.loc.x, this.loc.y, 20, 20); // propertiers of circle
	}

	this.isColliding = function(){
		//  Check for collision +++++++++++++
		if(this.loc.x > paddle.loc.x &&
			this.loc.x < paddle.loc.x + paddle.w &&
			this.loc.y > paddle.loc.y &&
			this.loc.y < paddle.loc.y + paddle.h){ //if statement of collision detection

				return true; //If collison is true
			}
			return false; //If collision is false
		}

	}// ++++++++++++++++++++++++++++++++++++++++++++++  end ball
