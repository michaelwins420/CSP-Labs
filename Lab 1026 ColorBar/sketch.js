//Michael Costantini

var bars = []; //bar 1 global variable
var bars1 = []; // bar 2 global variable
var bars2 = []; //bar 3 global variable

function setup(){ //setup function
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255);
  loadBars(255); //Colors in bars
  bubbleSort();
}

function draw() {
  for(i = 0; i < bars.length; i++){ //Runs the bars
    bars[i].run(); //calls bar 1
  }
  for (i = 0; i < bars1.length; i++){
    bars1[i].run(); // calls bar 2
    if(bars1[i].loc.y < 250){
      bars1[i].loc.y = bars1[i].loc.y + 250;
    }
  }
  for (i = 0; i < bars2.length; i++){
    bars2[i].run(); //calls bar 3
    if(bars2[i].loc.y < 500){
      bars2[i].loc.y = bars2[i].loc.y + 250;
    }
  }
}

function loadBars(numBars){ //loads bars
  for(var i = 0; i < numBars; i++){
    var height = 200; //height varaible
    var width = 800/numBars; //width variable
    var loc = createVector((width * i), 100); //location varaible
    var col = color(random(255), random(255), random(255)); //color variable
    bars.push(new Bar(height, width, loc, col));
    bars1.push(new Bar(height, width, loc, col));
    bars2.push(new Bar(height, width, loc, col));
  }
}

function bubbleSort(){ //bubbleSort function
  var temp = 0; //temp variable
  for(var i = bars.length -1; i > 0; i--){
    for(var j = 0; j < i; j++){
      if(bars[j] > bars[j + 1]){
        temp = bars[j];
        bars [j] = bars [j + 1];
        bars[j + 1] = temp;
      }
    }
  }

}
