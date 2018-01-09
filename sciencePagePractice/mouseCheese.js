// $("#mouse").click(function() {
//   $("#mouse").hide().fadeIn(1000);
// });
// $("#mouse").draggable();
// $("#cheese").draggable();

// MY ATTEMPT AT WORKING WITH THE DRAG AND DROP WITH no jQuery

// var images = document.getElementsByTagName('img');
// for (var i = 0; i < images.length; i++) {
//   images[i].setAttribute("onmouseover", "mouseOver(this)");
//   images[i].setAttribute("onmouseout", "mouseOut(this)");
//   images[i].setAttribute("onclick", "hideEl(this)");
// }
//
// function mouseOver(el) {
//   currentElement = document.getElementById(el.id);
//   currentElement.style.opacity = 0.5;
// }
//
// function mouseOut(el) {
//   currentElement = document.getElementById(el.id);
//   currentElement.style.opacity = 1.0;
// }
//
// function allowDrop(event) {
//   event.preventDefault();
// }
// function drag(ev) {
//   ev.dataTransfer.setData("stuffInside", ev.target.id);
// }
//
// function hideEl(el) {
//   el.style.visibility = "hidden";
// }

// SOLO ATTEMPT at Drag and Drop with no jQuery
// dynamically add mouseover mouseout event listeners to images

var images = document.getElementsByTagName("img");
for(var i = 0; i < images.length; i++) {
   // images[i].setAttribute("draggable", "true");
   images[i].draggable = true;
   // images[i].setAttribute("onmouseover", mouseOver(this)); // this captures the object in the mouseOver function
   images[i].onmouseover = mouseOver; // this captures this event in the mouseOver function
   images[i].onmouseout = mouseOut;
   images[i].ondragstart = drag;
}





 ////////////////////////// ALTERNATE ATTEMPT /////////////

// create functions that fire when differnt mouse events occur

function mouseOver(ev) {
  ev.target.style.opacity = 0.5;
}

function mouseOut(ev) {
  ev.target.style.opacity = 1.0;
}

// on drag event, make droppable

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

// on drop event, place element in new location

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var elId = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(elId));
}





// // Non-jQuery drag and drop basic functionality
// function allowDrop(ev) {
//   ev.preventDefault();
// }
//
// function drag(ev) {
//   ev.dataTransfer.setData("stuffInside", ev.target.id);
// }
//
// function drop(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData("stuffInside");
//   ev.target.appendChild(document.getElementById(data));
//   console.log(ev.clientX, ev.clientY);
// }
//
//
// var selectedMouse = document.getElementById("mouse");
// selectedMouse.setAttribute("ondragstart", "drag(event)");
// selectedMouse.setAttribute("style", "cursor:move");
//
// var box1 = document.getElementById("mouseDiv");
// box1.setAttribute("ondragover", "allowDrop(event)");
// box1.setAttribute("ondrop", "drop(event)");
//
// var box2 = document.getElementById("emptyDiv");
// box2.setAttribute("ondrop", "drop(event)");
// box2.setAttribute("ondragover", "allowDrop(event)");
//
// var selectedCheese = document.getElementById("cheese");
// selectedCheese.setAttribute("ondragstart", "drag(event)");
// selectedCheese.setAttribute("style", "cursor:move");
