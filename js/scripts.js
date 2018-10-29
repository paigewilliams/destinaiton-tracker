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


var destionationTracker = new DestinationTracker();
var destination1 = new Destination("Portland", "USA", ["Rose Garden", "Bridges"], 3, "10/29/2018- 10/31/2018");
var destination2 = new Destination("Seattle", "USA", ["Rose Garden", "Bridges"], 3, "10/29/2018- 10/31/2018");
var destination3 = new Destination("SF", "USA", ["Rose Garden", "Bridges"], 3, "10/29/2018- 10/31/2018");
var destination4 = new Destination("LA", "USA", ["Rose Garden", "Bridges"], 3, "10/29/2018- 10/31/2018");

destionationTracker.addDestination(destination1);
destionationTracker.addDestination(destination2);
destionationTracker.addDestination(destination3);
destionationTracker.addDestination(destination4);

console.log(destionationTracker);
// --- User Interface Logic
