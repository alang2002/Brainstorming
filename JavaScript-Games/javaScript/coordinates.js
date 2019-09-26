var getRandomNumber = function(size){
  return Math.floor(Math.random() * size)
};

var getDistance = function(event, target){
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffX *diffX) + (diffY*diffY));
};

var getDistanceHint = function (distance) {
  if(distance < 10){
    return "Boiling Hot!";
  }
  else if(distance < 20){
    return "return really hot";
  }
  else if(distance < 40){
    return "Hot";
  }
  else if(distance < 80){
    return "Warm";
  }
  else if(distance < 160){
    return "Cold";
  }
  else if(distance < 320){
    return "Really Cold!";
  }
  else{
    return "Freezing!";
  }
};
//set up variables
var width = 400;
var height = 400;
var clicks = 0;

var target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height)
};
//Add a click handler to the images
$("#map").click(function(event){
  //click handler code goes here
  clicks++;

//Gets the distance between the click and the event
var distance = getDistance(event, target);
//Convert the distance to show a hint
var distanceHint = getDistanceHint(distance);
//update the distance element in html
$("#distance").text(distanceHint);

if(distance < 8){
  alert("Found the treasure in " + clicks + " clicks!");
  }
});
