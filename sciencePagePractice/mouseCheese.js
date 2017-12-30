// $("#mouse").click(function() {
//   $("#mouse").hide().fadeIn(1000);
// });
$("#mouse").draggable();
$("#cheese").draggable();



// Non-jQuery drag and drop basic functionality
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
// var selectedItem = document.getElementById("mouse");
// selectedItem.setAttribute("ondragstart", "drag(event)");
// selectedItem.setAttribute("style", "cursor:move");
//
// var box1 = document.getElementById("mouseDiv");
// box1.setAttribute("ondragover", "allowDrop(event)");
// box1.setAttribute("ondrop", "drop(event)");
//
// var box2 = document.getElementById("emptyDiv");
// box2.setAttribute("ondrop", "drop(event)");
// box2.setAttribute("ondragover", "allowDrop(event)");
//
// var cheesePic = document.getElementById("cheese");
// cheesePic.setAttribute("draggable", "false");
