// array to sort
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
var txt;

function preLoad(){
	txt = loadStrings ("words.txt");

	function setup(){//setup function
	  var cnv = createCanvas(800, 800); //canvas variable
	  background(20, 20, 20); //creates background color
	  cnv.position((windowWidth-width)/2, 30); //canvas position
	  fill(200, 30, 150);

// swap function helper
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// this is a very basic implementation which is nice to understand the deep principle of bubble sort (going through all comparisons) but it can be greatly improved for performances
function bubbleSortBasic(array) {
  for(var i = 0; i < array.length; i++) {
    for(var j = 1; j < array.length; j++) {
      if(array[j - 1] > array[j]) {
        swap(array, j - 1, j);
      }
    }
  }
  return array;
}

console.log(bubbleSortBasic(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
