//Michael Costantini

var data;

function preload(){
  data = loadJSON("population.json");
  console.log(data);

}


function setup(){
    data.countrydata[3].males
}

function bubbleSort(){ //bubbleSort function
  var temp = 0; //temp variable
  var males = data.countrydata.males
  for(var i = countrydata.males.length -1; i > 0; i--){
    for(var j = 0; j < i; j++){
      if(data.countrydata[j].males > data.countrydata[j + 1].males){
        temp = data.countrydata[j].males;
        data.countrydata[j].males = data.countrydata[j + 1].males;
        data.countrydata[j + 1].males = temp;
      }
    }
  }
}
