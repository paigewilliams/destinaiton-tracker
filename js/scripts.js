//--- Business Logic for DestinationTracker
function DestinationTracker() {
  this.destinations = [];
  this.currentId = 0
}

DestinationTracker.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations.push(destination);
}

DestinationTracker.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

// Business Logic for Destination
function Destination(city, country, attractions, daysThere, dateVisited){
  this.city = city,
  this.country = country,
  this.attractions = attractions,
  this.daysThere = daysThere,
  this.dateVisited = dateVisited

}


var destinationTracker = new DestinationTracker();
var destination1 = new Destination("Portland", "USA", ["Rose Garden", "Bridges"], 3, "10/29/2018- 10/31/2018");
var destination2 = new Destination("Seattle", "USA", ["Rose Garden", "Bridges"], 3, "10/29/2018- 10/31/2018");
var destination3 = new Destination("SF", "USA", ["Rose Garden", "Bridges"], 3, "10/29/2018- 10/31/2018");
var destination4 = new Destination("LA", "USA", ["Rose Garden", "Bridges"], 3, "10/29/2018- 10/31/2018");

destinationTracker.addDestination(destination1);
destinationTracker.addDestination(destination2);
destinationTracker.addDestination(destination3);
destinationTracker.addDestination(destination4);

console.log(destinationTracker);
// --- User Interface Logic
$(document).ready(function(){

  for(var i = 0; i < destinationTracker.destinations.length; i ++){
    var id = i;
    var properties = "properties";
    var propertyid = "properties" + i;
    $("#destinations").after("<h2 id='" + id + "'>" + destinationTracker.destinations[i].city + "</h2>" +
    "<ul id='" + propertyid + "' class='"+ properties +"'>" +
    "<li><strong>Country: </strong>" + destinationTracker.destinations[i].country + "</li>" +
    "<li><strong>Attractions: </strong>" + destinationTracker.destinations[i].attractions + "</li>" +
    "<li><strong>Days spent there: </strong>" + destinationTracker.destinations[i].daysThere + "</li>" +
    "<li><strong>Dates visited: </strong>" + destinationTracker.destinations[i].dateVisited + "</li>");
  }

  $("#0").click(function(){
    $("#properties0").toggle();
  });
  $("#1").click(function(){
    $("#properties1").toggle();
  });
  $("#2").click(function(){
    $("#properties2").toggle();
  });
  $("#3").click(function(){
    $("#properties3").toggle();
  });

});
