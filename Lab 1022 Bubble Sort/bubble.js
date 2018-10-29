function setup(){//setup function
	var cnv = createCanvas(800, 800); //canvas variable
	background(20, 20, 20); //creates background color
	cnv.position((windowWidth-width)/2, 30); //canvas position
	fill(200, 30, 150);

	words = [];

	function preLoad(){
		var txt = loadStrings('words.txt')
	}

	console.log(words);
	for(var i = words.length - 1; i>= 1; i--) {
		for(var j = 0; j < words.length; j++) {
			if(words[j] > words[j+1]){
				var temp = words[j];
				words[j] = words[j + 1];
				words[j+1] = temp;
			}
			console.log(words);
		}
	}
}
