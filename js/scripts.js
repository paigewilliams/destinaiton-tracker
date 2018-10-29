//--- Business Logic for DestinationTracker
function ToDoList() {
  this.tasks = [];
  this.currentId = 0
}

ToDoList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks.push(task);
}

ToDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

// Business Logic for Destination
function Task(title, description, type){
  this.title = title,
  this.description = description,
  this.type = type
}


// --- User Interface Logic
function addToList(task){
  $(".results").append("<li id='" + task.id + "'>" + task.title + " <button id='button" + task.id + "'>Mark complete</button></li>");
  $("#" + task.id).click(function(event){
    $(".title").text(task.title);
    $(".description").text(task.description);
    $(".type").text(task.type);
    $(".details").toggle();
  });
  $("#button" + task.id).click(function(){
    $(".completed-list").show();
    $("#" + task.id).remove();
    $(".completedResults").append("<li id='" + task.id + "'>" + task.title + " <button id='delete" + task.id + "'>Delete</button></li>");
  });
}




var toDoList = new ToDoList();

$(document).ready(function(){
  $("#to-do").submit(function(event){
    event.preventDefault();
    var title = $("input#title").val();
    var description = $("input#description").val();
    var type = $("#type").val();
    var task = new Task(title, description, type);
    toDoList.addTask(task);
    console.log(toDoList);
    addToList(task);

    $()

    $(".uncompleted-list").show();
  });

});



// for(var i = 0; i < destinationTracker.destinations.length; i ++){
//   var id = i;
//   var properties = "properties";
//   var propertyid = "properties" + i;
//   $("#destinations").after("<h2 id='" + id + "'>" + destinationTracker.destinations[i].city + "</h2>" +
//   "<ul id='" + propertyid + "' class='"+ properties +"'>" +
//   "<li><strong>Country: </strong>" + destinationTracker.destinations[i].country + "</li>" +
//   "<li><strong>Attractions: </strong>" + destinationTracker.destinations[i].attractions + "</li>" +
//   "<li><strong>Days spent there: </strong>" + destinationTracker.destinations[i].daysThere + "</li>" +
//   "<li><strong>Dates visited: </strong>" + destinationTracker.destinations[i].dateVisited + "</li>");
// }
