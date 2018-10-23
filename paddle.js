//Constructor Function
function Paddle(loc,  col){
	this.loc = loc;
	this.w = 150;
	this.h = 50;
	this.col = col;

	//This function calls other functions
	this.run = function(){
		this.checkEdges();
		this.update();
		this.render();
	}

	this.update = function(){//Update function
		this.loc.x = lerp(this.loc.x, mouseX, 0.05);
	}

	this.checkEdges = function(){ //Edges function

	}

	this.render = function(){//Render function
		fill(this.col);//Adds color
		rect(this.loc.x, this.loc.y, 155, 12);//Properties of Paddle


	}
}
//  ++++++++++++++++++++++++++++++++++++++++++++++  end paddle constructor  function
